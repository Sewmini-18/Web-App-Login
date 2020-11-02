import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

class ActionAlerts extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isActive: true,
        }
    }

    hideAlert() {
        this.setState({
            isActive: false,
        });
    }

    render() {
        if (this.state.isActive) {
            return (
                <div>
                    <div >

                        <Alert severity={this.props.children.severity} onClose={() => this.hideAlert()}  >{this.props.children.message}</Alert>

                    </div>
                  


                </div>


            );
        }
        return <div />
    }
}

export default ActionAlerts;