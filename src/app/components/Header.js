import Link from 'next/link'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
export default function Header() {
  

  return (
    <div className="mt-0 p-2 bg-gray-400">
    <Navbar expand="lg" className="container mx-auto">
      <Navbar.Brand className="text-white text-4xl font-bold">
       Sunrise Sip
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#shop" className="text-white px-4 py-2">Shop</Nav.Link>
          <Nav.Link href="#about" className="text-white px-4 py-2">About Us</Nav.Link>
          <Nav.Link href="#contact" className="text-white px-4 py-2">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}
