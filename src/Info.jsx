/**
 * Info.js
 * 
 * This file defines the `Info` component, which serves as the information section of the application.
 * The component provides details about the text editor, its features, and its purpose, all styled to match the 90's aesthetic.
 * 
 * Key Features:
 * - A retro-inspired design with a classic gray background and 3D borders.
 * - A detailed description of the text editor and its functionality.
 * - Organized sections for text styling, file operations, undo/redo, and user-friendly interface.
 * - Square bullet points for a retro feel.
 * 
 * Styles:
 * - The component uses inline styles to achieve a 90's look, including gray backgrounds, 3D borders, and classic fonts.
 * - Headings and lists are styled to maintain consistency with the overall design.
 * 
 * Props:
 * - None. This component is static and does not accept any props.
 * 
 * Example Usage:
 * <Info />
 * 
 * Dependencies:
 * - React: The core library for building the component.
 * 
 * @returns {JSX.Element} The Info component with a description and feature list.
 */

import React from 'react';

const Info = () => {
  return (
    <div id="info-section" style={styles.infoSection}>
      {/* Section Title */}
      <h2 style={styles.sectionTitle}><u>About This Text Editor:</u></h2>

      {/* Section Content */}
      <div style={styles.sectionContent}>
        <p style={styles.sectionText}>
          This is a simple text editor designed to bring you back to the 90's. It's made for Windows machines and the main purpose is to take the role of the default notepad app!
          Notes can be stylized, making it easier to look over in them in the future.
        </p>
        <p style={styles.sectionText}>
          Perfect for writing notes, code, or just reminiscing about the good old days of computing!
        </p>

        {/* Features Section */}
        <h3 style={styles.featureTitle}><u>Features:</u></h3>

        {/* Text Styling */}
        <h4 style={styles.subFeatureTitle}>Text Styling</h4>
        <ul style={styles.list}>
          <li>Bold</li>
          <li>Underline</li>
          <li>Bullet points</li>
          <li>Change text color</li>
          <li>Highlight text</li>
        </ul>

        {/* File Operations */}
        <h4 style={styles.subFeatureTitle}>File Operations</h4>
        <ul style={styles.list}>
          <li>Create new files</li>
          <li>Open existing files (supports .txt and .rtf formats)</li>
          <li>Save files (supports .txt and .rtf formats)</li>
        </ul>

        {/* Undo/Redo */}
        <h4 style={styles.subFeatureTitle}>Undo/Redo</h4>
        <ul style={styles.list}>
          <li>Supports undo and redo operations for text editing</li>
        </ul>

        {/* User-Friendly Interface */}
        <h4 style={styles.subFeatureTitle}>User-Friendly Interface</h4>
        <ul style={styles.list}>
          <li>Intuitive design with easy-to-use menus and toolbars</li>
        </ul>
      </div>
    </div>
  );
};

// Styles for each element
const styles = {
    infoSection: {
      backgroundColor: '#c0c0c0', // Classic gray background
      border: '2px outset', // 3D effect for the section
      padding: '16px',
      marginBottom: '0', // Spacing below the section
    },
    sectionTitle: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#000', // Black text
      margin: '0 0 12px 0',
    },
    sectionContent: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
      color: '#000', // Black text
    },
    sectionText: {
      margin: '0 0 8px 0', // Spacing between paragraphs
    },
    featureTitle: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#000', // Black text
      margin: '16px 0 0 0', // Spacing above and below
    },
    subFeatureTitle: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#000', // Black text
      margin: '4px 0 8px 0', // Spacing above and below
    },
    list: {
      margin: '0 0 8px 0',
      paddingLeft: '20px', // Indent the list
      listStyleType: 'square', // Square bullets for a retro feel
    },
  };

export default Info;