import React, { Component } from 'react';
import { Navbar, NavDropdown, Button, Nav } from 'react-bootstrap'
import {withRouter} from 'react-router-dom';




class Header extends Component {
    
    nextPath(path) {
        this.props.history.push(path);
      }
    
    render() {
      
        return (
            <div>
                <div className="header">

                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home {"   "}</Nav.Link>
                                <Nav.Link href="home/profile">{"   "}Profile</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/home">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="home/profile">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Button variant="outline-light" onClick={() => this.nextPath('/login') } >Logout</Button>
                        </Navbar.Collapse>
                    </Navbar>


                </div>
            </div>
        );
    }
}

export default withRouter(Header);