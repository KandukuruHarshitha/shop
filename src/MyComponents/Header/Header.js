import React, { useState } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  // State to manage selected address
  const [selectedAddress, setSelectedAddress] = useState('Bhopal, Misrod');

  // List of addresses
  const addresses = [
    'Bhopal, Misrod',
    'Bangalore, Karnataka',
    'Mysore, Karnataka',
  ];

  // Handle address selection
  const handleAddressChange = (address) => {
    setSelectedAddress(address);
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Dropdown with radio buttons */}
        <NavDropdown
          title={selectedAddress}
          id="location-dropdown"
          className="location-dropdown"
        >
          {addresses.map((address, index) => (
            <NavDropdown.Item key={index} className="d-flex align-items-center">
              <input
                type="radio"
                name="address"
                value={address}
                checked={selectedAddress === address}
                onChange={() => handleAddressChange(address)}
                style={{ marginRight: '10px' }}
              />
              {address}
            </NavDropdown.Item>
          ))}
        </NavDropdown>

        {/* Center Brand */}
        <Navbar.Brand href="#home" className="text-center">
          KANDUKURU SUPERMARKET
        </Navbar.Brand>

        {/* Right-Aligned Content */}
        <div className="d-flex align-items-center">
          <span className="me-4">Helpline: 1800 103 1003</span>
          <a href="#download" className="text-white download-app" id="downloadAppLink">
            Download App
          </a>

        </div>
      </Container>
    </Navbar>
  );
}
