'use client'
import { useState } from 'react'
import  Logo from '../../public/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
 
export default function Header() { 
	return (
		<Navbar expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">
					<Image
						alt=""
						src={Logo}
						width={150}
						// className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Nav className="">
					<Nav.Link href="#home">Login</Nav.Link>
				</Nav>
				<Navbar.Toggle aria-controls="r" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav
						className="me-auto"
					>
						<NavDropdown title="Checking & Savings">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Credit Cards">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Loans">
							<NavDropdown.Item href="./unsecured-personal-loan">Personal Unnsecured Loan</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Mortages">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Investing & Retirement">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}