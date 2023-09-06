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
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from 'react-bootstrap-icons';

 
export default function Footer() { 
	return (
		// <Container className='position-relative bottom-0'>
		<Container>
			<Row className="">
				<Col />
				<Col className="mx-auto" xs={2}>
					<Instagram size={25} />
				</Col>
				<Col className="mx-auto" xs={2}>
					<Facebook size={25}/>
				</Col>
				<Col className="mx-auto" xs={2}>
					<Youtube size={25}/>
				</Col>
				<Col className="mx-auto" xs={2}>
					<Twitter size={25}/>
				</Col>
				<Col className="mx-auto" xs={2}>
					<Linkedin size={25}/>
				</Col>
				<Col/>
			</Row>
			<Row className="mt-4">
				<Col className="text-center">
					<a className="link-secondary" href="#">Contact</a>
				</Col>
				<Col className="text-center">
					<a className="link-secondary" href="#">Privacy</a>
				</Col>
			</Row>
		</Container>
	);
}