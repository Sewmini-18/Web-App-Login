import React, { Component } from 'react';
import '../../../views/css/customerFormStyle.css';
import { Button, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { Row,  Jumbotron } from 'react-bootstrap'


const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: '#ff4b5a',
      borderRadius: '25px 25px',
      // marginLeft: '15px',
      width: '150px',
      height: '40px',
  
      '&:hover': {
        backgroundColor: '#eb3746',
      },
      '&:disabled': {
        backgroundColor: '#d66a73',
        opacity:0.7,
        color:'white',
      }
    },
  }))(Button);
class CustomerForm extends Component {
    render() {
        const mBend = {
            marginLeft: "400px",
           
        }
        return (
            <div >
                <div className="container mgntop">
                <h2>Profile</h2>
                 <Row >
                     <div className="wrapper p-b-45">
                <Jumbotron style={{ width: '56rem' }}>
                <div>
                    <div >
                        <div className="card card-5">
                            <div className="card-heading">
                                <h2 className="title">Customer Details Collection Form</h2>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="name">Customer Name</div>
                                        <div className="value">
                                            <div className="input-group"><input className="input--style-5" type="text" name="last_name" /></div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="name">Contact Number</div>
                                        <div className="value">
                                            <div className="input-group"><input className="input--style-5" type="text" name="last_name" /></div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="name">Email</div>
                                        <div className="value">
                                            <div className="input-group"><input className="input--style-5" type="text" name="last_name" /></div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="name">Reason / Request</div>
                                        <div className="value">
                                            <div className="input-group"><input className="input--style-5" type="text" name="last_name" /></div>
                                        </div>
                                    </div>
                                   
                                    <div><ColorButton type="button" onClick={this.submitLoginUser} variant="contained"
                                        className="abutton" >
                                        Login
                  </ColorButton></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </Jumbotron>
                </div>
                
                </Row>
                </div>
            </div>
        );
    }
}

export default CustomerForm;