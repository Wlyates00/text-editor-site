/**
 * Banner.js
 * 
 * This file defines the `Banner` component, which serves as the header section of the application.
 * The banner includes a welcome message, a subheader, and an image, all styled to match the 90's aesthetic.
 * 
 * Key Features:
 * - A retro-inspired design with a classic gray background and 3D borders.
 * - A centered header with a bold title and a subheader.
 * - An image section that displays a screenshot or logo with a 3D inset border.
 * 
 * Styles:
 * - The banner uses inline styles to achieve a 90's look, including gray backgrounds, 3D borders, and classic fonts.
 * - Tailwind CSS classes are used for responsive image sizing.
 * 
 * Props:
 * - None. This component is static and does not accept any props.
 * 
 * Example Usage:
 * <Banner />
 * 
 * Dependencies:
 * - React: The core library for building the component.
 * - Tailwind CSS: Used for responsive image sizing (optional).
 * 
 * @returns {JSX.Element} The Banner component with a header, subheader, and image.
 */

import React from 'react';

const Banner = () => {
  return (
    <div style={styles.banner}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.headerText}>Welcome to My Text Editor</h1>
        <p style={styles.subHeaderText}>
          A simple, retro text editor that takes you back to the 90's!
        </p>
      </div>
      {/* Image Section */}
      <div style={styles.imageContainer} className='flex justify-center'>
        <img
          src="/screenshot.png" // Replace with your image URL
          alt="90's Banner"
          className="md:max-w-[50%] lg:max-w-[30%] w-64 max-w-[100%] md:w-[50%]"
          style={styles.image}
        />
      </div>
    </div>
  );
};

// Styles for each element
const styles = {
  banner: {
    backgroundColor: '#c0c0c0', // Classic gray background
    border: '2px outset', // 3D effect for the banner
    marginBottom: '0', // Spacing below the banner
  },
  header: {
    padding: '16px',
    textAlign: 'center',
  },
  imageContainer: {
    textAlign: 'center',
    padding: '8px',
  },
  image: {
    border: '2px inset', // 3D effect for the image
  },
  headerText: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000', // Black text
    margin: '0 0 8px 0',
  },
  subHeaderText: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#000', // Black text
    margin: '0',
  },
};

export default Banner;