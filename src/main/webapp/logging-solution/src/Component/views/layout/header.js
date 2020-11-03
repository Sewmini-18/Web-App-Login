import React, { Component } from 'react';
import { Navbar, NavDropdown, Button, Nav, Col } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { Dvr } from '@material-ui/icons';



class Header extends Component {



    nextPath(path) {
        this.props.history.push(path);
    }

    render() {

        const mTop = {
            marginTop: "20px",
            marginRight: "20px"
        }

        return (
            <div>
                <div className="header">

                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/home">
                            <Dvr fontSize="large" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="mr-auto">
                                <Nav.Link href="home/profile">
                                    Profile {"   "}    </Nav.Link>
                                <Nav.Link href="home/users/">{"   "}Users</Nav.Link>

                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/home">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="home/profile">Another action</NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                            <Button variant="outline-light" onClick={() => this.nextPath('/login')} >Logout</Button>
                        </Navbar.Collapse>

                    </Navbar>
                </div>
                <Col sm={6} style={mTop}></Col>
            </div>
        );
    }
}

export default withRouter(Header);