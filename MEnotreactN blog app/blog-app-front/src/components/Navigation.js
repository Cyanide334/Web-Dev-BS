import React from 'react'
import { Nav, NavLink} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
const Navigation = ({setUser,user}) => {
    const logout=()=>{
        setUser(null);
        localStorage.clear();

    }
  return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand href='/'>The Blog App</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                  {user && (
                      <>
                          <Nav.Link href='/create'>New Post</Nav.Link>
                          <Nav.Link href='/'>View My Posts</Nav.Link>
                          <Nav.Link href='/blogs'>View All Posts</Nav.Link>
                      </>
                  )}
              </Nav>
              <Nav className='ms-auto'>
                  {!user && (
                      <>
                          {' '}
                          <Nav.Link href='/login'>Login</Nav.Link>
                          <Nav.Link href='/signup'>Sign Up</Nav.Link>
                      </>
                  )}
                  {user && (
                      <>
                          
                          <Nav.Link onClick={logout}>Logout</Nav.Link>
                      </>
                  )}
              </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}

export default Navigation