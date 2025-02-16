/**
 * Footer.js
 * 
 * This file defines the `Footer` component, which serves as the footer section of the application.
 * The footer includes a copyright notice and a credit line, styled to match the 90's aesthetic.
 * 
 * Key Features:
 * - A retro-inspired design with a classic gray background and 3D borders.
 * - Centered text with a copyright notice and a credit line.
 * - Simple, clean typography using Arial font for a 90's look.
 * 
 * Styles:
 * - The footer uses inline styles to achieve a 90's look, including gray backgrounds, 3D borders, and classic fonts.
 * 
 * Props:
 * - None. This component is static and does not accept any props.
 * 
 * Example Usage:
 * <Footer />
 * 
 * Dependencies:
 * - React: The core library for building the component.
 * 
 * @returns {JSX.Element} The Footer component with a copyright notice and credit line.
 */

import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      {/* Footer Content */}
      <p style={styles.footerText}>
        © 2025 Stylized Text Editor
      </p>
      <p style={styles.footerText}>
        Made with ❤️ using React and 90's nostalgia by Layton Yates.
      </p>
    </div>
  );
};

// Styles for each element
const styles = {
  footer: {
    backgroundColor: '#c0c0c0', // Classic gray background
    border: '2px outset', // 3D effect for the footer
    padding: '8px',
    textAlign: 'center', // Center-align the text
    marginTop: '0', // Spacing above the footer
  },
  footerText: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    color: '#000', // Black text
    margin: '0', // Spacing between lines
  },
};

export default Footer;