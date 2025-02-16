/**
 * Navbar.js
 * 
 * This file defines the `Navbar` component, which serves as the navigation bar for the application.
 * The navbar includes dropdown menus for File, View, and Help options, all styled to match the 90's aesthetic.
 * 
 * Key Features:
 * - A retro-inspired design with a classic gray background and 3D borders.
 * - Dropdown menus for File, View, and Help options.
 * - Functionality for downloading files, zooming, printing, and accessing documentation/support.
 * - A custom 90's-style popup for displaying messages.
 * 
 * Functionality:
 * - File Dropdown: Download, Details, and Print options.
 * - View Dropdown: Zoom In, Zoom Out, and Reset Zoom options.
 * - Help Dropdown: Documentation and Support options.
 * - Popup: Displays messages in a 90's-style popup.
 * 
 * Styles:
 * - The navbar uses inline styles to achieve a 90's look, including gray backgrounds, 3D borders, and classic fonts.
 * - Dropdown menus and buttons are styled to maintain consistency with the overall design.
 * 
 * Props:
 * - None. This component is static and does not accept any props.
 * 
 * Example Usage:
 * <Navbar />
 * 
 * Dependencies:
 * - React: The core library for building the component.
 * - Popup: A custom component for displaying messages in a 90's-style popup.
 * 
 * @returns {JSX.Element} The Navbar component with dropdown menus and functionality.
 */

import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100); // State for zoom functionality
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Show Popup
  const showPopup = (message) => {
    setPopupMessage(message);
    setIsPopupVisible(true);
  };

  // Close Popup
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleDownload = () => {
    // Path to the .exe file (relative to the public folder)
    const fileUrl = '/TextEditor.exe'; // Update this path

    // Create an invisible <a> element to trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'TextEditor.exe'; // Name of the file to be downloaded
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  const handleDetails = () => {
    const infoSection = document.getElementById('info-section');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
  };

  const handlePrint = () => {
    window.print(); // Opens the browser's print dialog
  };

  // View Dropdown Functions
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 10, 200)); // Increase zoom by 10%, max 200%
    document.body.style.zoom = `${zoomLevel + 10}%`;
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 10, 50)); // Decrease zoom by 10%, min 50%
    document.body.style.zoom = `${zoomLevel - 10}%`;
  };

  const handleResetZoom = () => {
    setZoomLevel(100); // Reset zoom to 100%
    document.body.style.zoom = '100%';
  };

  // Help Dropdown Functions
  const handleDocumentation = () => {
    window.open('https://github.com/Wlyates00/stylized-text-editor', '_blank'); // Open documentation in a new tab
  };

  const handleSupport = () => {
    showPopup('Email the developer at wlyates1@gmail.com');
  };

  return (
    <>
      {/* Title Bar */}
      <div style={styles.titleBar}>
        <span style={styles.titleText}>Stylized-Text-Editor</span>
      </div>

      {/* Navbar */}
      <div style={styles.navbar}>
        {/* File Dropdown */}
        <div style={styles.dropdownContainer}>
          <button style={styles.button} onClick={() => toggleDropdown('file')}>
            File
          </button>
          {openDropdown === 'file' && (
            <div style={styles.dropdownContent}>
              <a href="#" style={styles.dropdownItem} onClick={handleDownload}>
                Download
              </a>
              <a href="#" style={styles.dropdownItem} onClick={handleDetails}>
                Details
              </a>
              <a href="#" style={styles.dropdownItem} onClick={handlePrint}>
                Print
              </a>
            </div>
          )}
        </div>

        {/* View Dropdown */}
        <div style={styles.dropdownContainer}>
          <button style={styles.button} onClick={() => toggleDropdown('view')}>
            View
          </button>
          {openDropdown === 'view' && (
            <div style={styles.dropdownContent}>
              <a href="#" style={styles.dropdownItem} onClick={handleZoomIn}>
                Zoom In
              </a>
              <a href="#" style={styles.dropdownItem} onClick={handleZoomOut}>
                Zoom Out
              </a>
              <a href="#" style={styles.dropdownItem} onClick={handleResetZoom}>
                Reset Zoom
              </a>
            </div>
          )}
        </div>

        {/* Help Dropdown */}
        <div style={styles.dropdownContainer}>
          <button style={styles.button} onClick={() => toggleDropdown('help')}>
            Help
          </button>
          {openDropdown === 'help' && (
            <div style={styles.dropdownContent}>
              <a href="#" style={styles.dropdownItem} onClick={handleDocumentation}>
                Documentation
              </a>
              <a href="#" style={styles.dropdownItem} onClick={handleSupport}>
                Support
              </a>
            </div>
          )}
        </div>
      </div>
      
      {/* Popup */}
      {isPopupVisible && <Popup message={popupMessage} onClose={closePopup} />}
    </>
  );
};

// Styles for each element
const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#c0c0c0', // Classic gray background
    padding: '2px',
    border: '2px outset', // 3D effect for the navbar
  },
  dropdownContainer: {
    position: 'relative',
    marginRight: '4px', // Spacing between buttons
  },
  button: {
    backgroundColor: '#c0c0c0', // Gray button background
    border: '2px outset', // 3D button effect
    padding: '2px 8px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    cursor: 'pointer',
  },
  dropdownContent: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#c0c0c0', // Gray background for dropdown
    border: '2px outset', // 3D effect for dropdown
    zIndex: 1,
  },
  dropdownItem: {
    display: 'block',
    padding: '4px 8px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#000', // Black text
    textDecoration: 'none',
    cursor: 'pointer',
  },
  titleBar: {
    backgroundColor: '#000080', // Classic blue title bar
    padding: '4px',
    borderBottom: '2px solid #c0c0c0',
  },
  titleText: {
    color: '#fff', // White text
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default Navbar;