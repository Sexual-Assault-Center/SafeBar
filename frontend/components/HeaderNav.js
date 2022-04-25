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
    <Navbar as="nav" className="nb-fixed" expand={show}>
      <Container fluid>
        <Navbar.Brand href="/">
          <h1 className="safespace">SafeBar</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <h1 className="safespace">SafeBar</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/resources" passHref>
                <Button variant="link" onClick={handleClose}>Resources</Button>
              </Link>
              <Link href="/contacts" passHref>
                <Button variant="link" onClick={handleClose}>Contacts</Button>
              </Link>
              <a href="https://safebartn.org" target="_blank" rel="noreferrer">SafeBar website</a>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
