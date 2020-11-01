import { Button, withStyles, Checkbox } from '@material-ui/core';
import React, { Component } from 'react';
import { purple } from '@material-ui/core/colors';
import './css/style.css';

import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Row, Col } from 'react-bootstrap';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
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

const CheckboxC = withStyles({
  root: {
    color: '#263238',

    '&$checked': {
      color: '#263238',
    },

  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);






class FormP extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = { checkedG: '' }

  handleChange = () => {
    this.setState(() => this.initialState);
  };
  render() {

    //const { classes } = this.props;
    return (

      <div >

        <div className="Wrapper">
          <div className="inner">

            <form className="login">
              <h3>LOGIN</h3>
              <div className="form-holder "><span className="icon"><Email /></span><input className="form-control" type="text" placeholder="e-mail" /></div>
              <div className="form-holder "><span className="icon"><LockOpen /></span><input className="form-control" type="password" placeholder="password" /></div>
              <div>
                <Row>

                  <Col className="text-right">
                    <FormControlLabel
                      control={
                        <CheckboxC checked={this.checkedG} onChange={this.handleChange}
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                          name="checkedG"
                        />
                      }
                      label="check me out"
                    />
                    <br /><br />
                  </Col>
                  <Col>
                    <div className="text-right"><a href="/">forget password? </a> &nbsp;&nbsp;</div><br />


                  </Col>
                </Row>


              </div>


              <div className="form-login">
                <Row>
                  <Col className="text-right" xs={6}>
                    <ColorButton type="submit" variant="contained" className="abutton" >
                      Login
      </ColorButton>
                  </Col>
                  <Col className="text-center"><p><br /> &nbsp;You don't have an account?
                <a className="alink " href="/register"> Register</a></p></Col>
                </Row>




              </div>




            </form>
          </div>
        </div>
      </div >
    )
  }

}

export default (FormP);