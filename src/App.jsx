import React, { useState } from 'react';
import Banner from './Banner'
import Info from './Info'
import Navbar from './Navbar'
import Footer from './Footer'
import Requirements from './Requirements'

function App() {


  return (
    <>
      <Navbar />
      <Banner />
      <Requirements />
      <Info />
      <Footer />
    </>
  )
}

export default App
