import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
                <Container>
                    <Navbar.Brand href="#home">✈ Ghurbo</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/addpackage">Add Package</Nav.Link>
                        {
                            user?.email ?
                                <Nav.Link as={Link} to="/managetour">My Booking</Nav.Link> :
                                ''
                        }
                        {
                            user?.email ?
                                <button onClick={logOut} className="btn btn-primary">Logout</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text className="mx-2">
                            <i class="fas fa-user"></i> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;