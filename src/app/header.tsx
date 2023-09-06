'use client'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import { Lock } from 'react-bootstrap-icons';
 
export default function Header() { 
	return (
		<Navbar expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">
					<Image
						alt=""
						src="/logo.png"
						width={150}
						height={50}
						// className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Nav className="">
					<Button variant="outline-secondary" href="#home">Login <Lock/></Button>
				</Nav>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav
						className=""
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