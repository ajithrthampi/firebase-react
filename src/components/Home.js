// import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CardHome from "./CardHome";

const Home = () => {
  const {user, logOut} = useUserAuth();
  console.log(user);
  const handleLogOut = async () => {

    try {
        await logOut();
        // Navigate("/")
    }catch (err) {
      console.log(err.mesage);
    }
  };

  return (
    <>
<Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">WELCOME  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            
            {/* <Button variant="outline-success" href="/">SignOut</Button> */}
            <Button className="text-primary" variant="light" onClick={handleLogOut}>
          Log out
        </Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

{/* 
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br/>
        {user && user.email}
       
      </div> */}
      <div className="d-grid gap-2">
       
      </div>
      <br/>
      <CardHome/>

    </>
  );
};

export default Home;