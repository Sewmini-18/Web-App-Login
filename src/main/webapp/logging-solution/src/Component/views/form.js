import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap'

class FormP extends Component {

state={
    email:'', password:''
}

handleChange=(event)=>{
    this.setState({ [event.target.name]: event.target.value });
}

submitRegisterUser = event => {
    event.preventDefault(); 
    console.log(this.state);
  }

    render() {
        return (
            <div>
                <p>Hi world</p>
                <Form onSubmit={this.submitRegisterUser}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>
            </div>
        )
    }
}

export default FormP;