/**
 * Requirements.js
 * 
 * This file defines the `Requirements` component, which displays the system requirements for the application.
 * The component includes a list of requirements, styled to match the 90's aesthetic.
 * 
 * Key Features:
 * - A retro-inspired design with a classic gray background and 3D borders.
 * - A list of system requirements with square bullets for a retro feel.
 * - Simple, clean typography using Arial font for a 90's look.
 * 
 * Props:
 * - None. This component is static and does not accept any props.
 * 
 * Example Usage:
 * <Requirements />
 * 
 * Styles:
 * - The component uses inline styles to achieve a 90's look, including gray backgrounds, 3D borders, and classic fonts.
 * - Square bullets are used for the list to maintain the retro aesthetic.
 * 
 * Dependencies:
 * - React: The core library for building the component.
 * 
 * @returns {JSX.Element} The Requirements component with a list of system requirements.
 */

import React from 'react';

const Requirements = () => {
  return (
    <div style={styles.requirementsSection}>
      <h2 style={styles.sectionTitle}><u>System Requirements:</u></h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Java Runtime Environment (JRE)</li>
        <li style={styles.listItem}>JDK 1.8.0</li>
        <li style={styles.listItem}>480 Kilobytes of Disk Space</li>
      </ul>
    </div>
  );
};

// Styles for each element
const styles = {
  requirementsSection: {
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
  list: {
    margin: '0 0 8px 0',
    paddingLeft: '20px', // Indent the list
    listStyleType: 'square', // Square bullets for a retro feel
  },
  listItem: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#000', // Black text
    margin: '4px 0', // Spacing between list items
  },
};

export default Requirements;