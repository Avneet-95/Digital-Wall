import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarExample({ onCreateNewBoard, onSearchHandler, searchKey }) {
    const handleCreateNewBoard = () => {
      onCreateNewBoard();
    };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
        Toddle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form onSubmit={(e) => {e.preventDefault()}} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchKey}
              onChange={onSearchHandler}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div className="mx-2" />
          <Button variant="outline-primary" onClick={handleCreateNewBoard}>
            +Create New Board
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;