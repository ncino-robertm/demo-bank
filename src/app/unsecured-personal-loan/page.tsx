'use client'
import { Button, Container, Col, Row } from 'react-bootstrap'
import Image from 'next/image';
import  Logo from '../../../public/logo.png'

export default function Page() {
  return (
	<main>
		<Container className="p-4">
			<Row className='my-5'>
				<Col>
					<h2>Personal Unsecured Loan</h2>
				</Col>
			</Row>
			<Row className="my-3"> 
				<Col>
				Unlock your dreams with our versatile unsecured loan! <br/><br/>
				Whether you&apos;re planning a dream vacation, enhancing your home, or consolidating debts, our hassle-free application process and competitive rates make it easy to achieve your goals. <br/><br/>
				Experience financial flexibility today!
				</Col>
			</Row>
		</Container>

		<Container className='my-5'>
			<Row>
				<Col>
					<Button
						variant="primary" 
						size="lg"
						style={{
							width: "100%", 
							color:"white"
						}}
						href="https://ncino.simplenexus.com/homehub/prefill_form?product_id=a0u8c00004gsUusAAE"
						value="Apply Now">
						Apply Now
					</Button>
				</Col>
			</Row>
		</Container>

		<Row className="my-5 py-4">
			<Col className="mx-auto " xs={4}>
				<Container>
					<Image
						alt="logo" 
						width={100} 
						src={Logo}
					/>
				</Container>
			</Col>
		</Row>
	</main>
  )
}
