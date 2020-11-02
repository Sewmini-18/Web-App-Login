import { Button, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { blue } from '@material-ui/core/colors';
import { Row, Col } from 'react-bootstrap';

import './css/style.css'
import { Person, Lock, Email, Call } from '@material-ui/icons';
import axios from 'axios';
import ActionAlerts from './alert'

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: '#37474f',
    borderRadius: '25px 25px',
    // marginLeft:'15px',
    width: '150px',
    height: '40px',
    //fontFamily:'./fonts/Montserrat-SemiBold.ttf',
    '&:hover': {
      backgroundColor: '#263238',


    },
    '&:active': {
      outline: '0',
    }
  },


}))(Button);



export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = this.intialState;
    this.userChange = this.userChange.bind(this);
    this.submitRegisterUser = this.submitRegisterUser.bind(this);
    //this.count=this.state.users.length;
  }

  intialState = { name: '', email: '', nic: '', password: '' , alert:''}

  componentDidMount() {
    document.title = "Register"
  }

  submitRegisterUser = event => {
    //alert(this.state.password);
    event.preventDefault();
    console.log(this.state);

    const user = {

      name: this.state.name,
      email: this.state.email,
      nic: this.state.nic,
      password: this.state.password
    }

    axios.post("http://localhost:8081/signup", user)
      .then(response => {
        if (response.data != null) {
         
          this.setState({ alert: 'success' });
          setTimeout(() => this.setState({ alert: '' }), 4000);
        setTimeout(() => this.props.history.push("/home"), 5000);
        }
      }).catch(error => {
        this.setState({ alert: 'error' });
        console.log("Bad credential");
        setTimeout(() => this.setState({ alert: '' }), 4000);
      });
      this.setState(this.intialState);


  }

  userChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {

    const { name, email, nic, password, alert } = this.state;

    return (

      <div >

        <div className="Wrapper">
          <div className="inner">

            <form id="UserRegisterForm" onSubmit={this.submitRegisterUser}>
              <h3>REGISTER</h3>

              <div className="form-holder active"><span className="icon"><Person /></span>
                <input className="form-control" type="text" placeholder="Name"
                  name="name" value={name} onChange={this.userChange} required />
              </div>

              <div className="form-holder"><span className="icon"><Email /></span>
                <input className="form-control" type="email" placeholder="e-mail" 
                  name="email" value={email} onChange={this.userChange} required />
              </div>

              <div className="form-holder "><span className="icon"><Call /></span>
                <input className="form-control" type="text" placeholder="NIC"
                  name="nic" value={nic} onChange={this.userChange} required />
              </div>

              <div className="form-holder "><span className="icon"><Lock /></span>
                <input className="form-control" type="password" placeholder="password"
                  name="password" value={password} onChange={this.userChange} required />
              </div>



              <div >


                <Row className="text-center">
                  <Col>&nbsp; I agree all statement in <a className="alink" href="/">Terms & Conditions</a><br /><br /><br />

                  </Col>
                </Row>
              </div>
              <div className="form-login">
                <Row>
                  <Col className="text-right" xs={6}>
                    <ColorButton type="submit" variant="contained" className="abutton" >
                      Register
      </ColorButton>
                  </Col>
                  <Col className="text-center"><p><br /> &nbsp;Already have an account?
                <a className="alink " href="/login"> Login</a></p></Col>
                </Row>
               
              </div>
              {this.state.alert==="error"?<ActionAlerts name="alert" value={alert} 
             children={{  severity:"error",message: "Email or Password is wrong" }}/>:null}
             {this.state.alert==="success"?<ActionAlerts name="alert" value={alert}
             children={{  severity:"success",message: "Successfully login" }}/>:null}
            </form>
          </div>
        </div>
      </div >
    )
  }

}

