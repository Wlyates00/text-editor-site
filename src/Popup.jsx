/**
 * Popup.js
 * 
 * This file defines the `Popup` component, which is used to display messages in a 90's-style popup.
 * The popup includes a message and an "OK" button to close it, all styled to match the retro aesthetic.
 * 
 * Key Features:
 * - A retro-inspired design with a classic gray background and 3D borders.
 * - A semi-transparent overlay to focus attention on the popup.
 * - A centered message and an "OK" button to close the popup.
 * 
 * Props:
 * - message: The message to display in the popup.
 * - onClose: A function to call when the "OK" button is clicked.
 * 
 * Example Usage:
 * <Popup message="This is a popup message!" onClose={handleClose} />
 * 
 * Styles:
 * - The popup uses inline styles to achieve a 90's look, including gray backgrounds, 3D borders, and classic fonts.
 * - The overlay ensures the popup stands out from the rest of the content.
 * 
 * Dependencies:
 * - React: The core library for building the component.
 * 
 * @returns {JSX.Element} The Popup component with a message and an "OK" button.
 */

import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popup}>
        <p style={styles.popupMessage}>{message}</p>
        <button style={styles.popupButton} onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

// Styles for each element
const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it appears above other content
  },
  popup: {
    backgroundColor: '#c0c0c0', // Classic gray background
    border: '2px outset', // 3D effect
    padding: '16px',
    textAlign: 'center',
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', // Shadow for depth
  },
  popupMessage: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#000', // Black text
    margin: '0 0 12px 0',
  },
  popupButton: {
    backgroundColor: '#c0c0c0', // Gray button background
    border: '2px outset', // 3D button effect
    padding: '4px 12px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#000', // Black text
    cursor: 'pointer',
  },
};

export default Popup;