import { Button, withStyles} from '@material-ui/core';
import React, { Component } from 'react';
import { purple } from '@material-ui/core/colors';
import './css/style.css';
import axios from 'axios';

import { Row, Col } from 'react-bootstrap';


import { LockOpen, Email } from '@material-ui/icons';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#37474f',
    borderRadius: '25px 25px',
    // marginLeft: '15px',
    width: '150px',
    height: '40px',

    '&:hover': {
      backgroundColor: '#263238',


    },
    '&:active': {
      outline: '10px',
    }
  },
 

}))(Button);








class Login extends Component {

  constructor(props) {
    super(props);
    this.state = this.intialState;
    this.userChange = this.userChange.bind(this);
    this.submitLoginUser = this.submitLoginUser.bind(this);
  }

  intialState = {email:'', password:'' };
  setStatus={status:'Wrong credintial'};
  submitLoginUser = event => {
    //alert(this.state.password);
    event.preventDefault();
    console.log(this.state);

    const user = {

      name: this.state.name,
      email: this.state.email,
      nic: this.state.nic,
      password: this.state.password
    }

    axios.post("http://localhost:8081/login", user)
      .then(response => {
        if (response.data != null) {
          this.setState(this.intialState);
          alert("successfiul log!");
        }
      }).catch(error => {
        console.log("bad crediantial");
      })


  }
  /*
  submitLoginUser =()=> {
    axios.post("http://localhost:8081/login",{
      email:this.state.email,
      password:this.state.password
    }).then((response)=>{
      if(response.data.message){
        this.setState(this.setStatus);
      } else{console.log(response.data);}
      
    });
    
  };
*/
  userChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    const {email, password} = this.state;

    return (
     
      <div >

        <div className="Wrapper">
          <div className="inner">

            <form className="login" >
              <h3>LOGIN</h3>
              <div className="form-holder "><span className="icon"><Email /></span>
              <input className="form-control" type="text" placeholder="e-mail" name="email"
                value={email} onChange={this.userChange} /></div>
              <div className="form-holder "><span className="icon"><LockOpen /></span>
              <input className="form-control" type="password" placeholder="password" name="password"
                value={password} onChange={this.userChange} /></div>
              <div>
                <Row>

                  
                  <Col>
                    <div className="text-right"><a href="/">forget password? </a> &nbsp;&nbsp;</div><br />


                  </Col>
                </Row>


              </div>


              <div className="form-login">
                <Row>
                  <Col className="text-right" xs={6}>
                    <ColorButton type="button" onClick={this.submitLoginUser} variant="contained" className="abutton" >
                      Login
      </ColorButton>
                  </Col>
                  <Col className="text-center"><p><br /> &nbsp;You don't have an account?
                <a className="alink " href="/register"> Register</a></p></Col>
                </Row>

                <h2>{this.state.status}</h2>


              </div>




            </form>
          </div>
        </div>
      </div >
    )
  }

}

export default (Login);