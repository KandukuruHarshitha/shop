// src/App.js
import React from 'react';
import './App.css';
import Header from './MyComponents/Header/Header';
import Header1 from './MyComponents/Header/Header1';
import Footer from './MyComponents/Footer';
import Section from './MyComponents/Section';
import GroceryDeals from './MyComponents/Body/GroceryDeals';

function App() {
  return (
    <div className="App">
      <Header />
      <Header1 />
      <Section />
      < GroceryDeals />
      <Footer />

    </div>
  );
}

export default App;