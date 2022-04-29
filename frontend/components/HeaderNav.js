import { useState } from 'react';
import {
  Nav, Navbar, Container, Offcanvas, Button,
} from 'react-bootstrap';
import Link from 'next/link';

export default function HeaderNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar as="nav" variant="dark" className="nb-fixed" expand={show}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          show={show}
          onHide={handleClose}
          placement="end"
        >
          <Offcanvas.Header className="offcanvas-header" closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <h1 className="safespace">SAFEBAR</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/resources" passHref>
                <Button variant="link" className="menuButton" onClick={handleClose}>resources</Button>
              </Link>
              <Link href="/contacts" passHref>
                <Button variant="link" className="menuButton" onClick={handleClose}>contacts</Button>
              </Link>
              <Link href="/faqs" passHref>
                <Button variant="link" className="menuButton" onClick={handleClose}>faqs</Button>
              </Link>
              <Link href="/training" passHref>
                <Button variant="link" className="menuButton" onClick={handleClose}>get SAFEBAR training</Button>
              </Link>
              <a href="https://safebartn.org" target="_blank" rel="noreferrer">safebartn.com</a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
