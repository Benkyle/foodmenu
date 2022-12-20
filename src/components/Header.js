import React from 'react'
import { Button , Container , Form, Nav , Navbar  } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
       <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container fluid >
        <Navbar.Brand href="/">STEAK & CHEESE 4GUYS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home"><i class="fa-solid fa-house-user">Home</i></Nav.Link>
            <Nav.Link href="/login"><i class="fa-solid fa-user"></i> Sign in</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
