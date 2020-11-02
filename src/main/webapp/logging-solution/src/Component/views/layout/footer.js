import { Container } from '@material-ui/core';
import React from 'react';
import { Navbar, Col } from 'react-bootstrap';


const Footer = () => {
    
    return (
        <div className="footer">
           <Navbar fixed="bottom"  bg="dark" variant="dark">
               <Container>
                   <Col className="text-center text-muted" >
                       <div>All rights reserved</div>
                   </Col>
               </Container>
           </Navbar>
        </div>
    )
}

export default Footer;