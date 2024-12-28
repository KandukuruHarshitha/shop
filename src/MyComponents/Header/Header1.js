import React from 'react'
import "./Header.css";
import logo from './1.png';

export default function Header1() {
  return (
    <div className="header-container">
      <div className="header-top">
        <img
          src={logo}
          alt="kukuu"
          className="logo"
        />
        <input
          type="text"
          placeholder="Search for Products and more"
          className="search-bar"
        />
        <button className="search-button">Search</button>
        <button className="login-button">Login</button>
        <button className="membership-button">Apply For Membership</button>
      </div>
      <div className="header-categories">
        <span>Categories</span>
        <span>All Offers</span>
        <span>Combo Offers</span>
        <span>Online Only Offer</span>
        <span>Trade Offers</span>
        <span>Kirana Exclusive</span>
        <span>HoReCa Exclusive</span>
        <span>O&I Exclusive</span>
      </div>
    </div>
  )
}
