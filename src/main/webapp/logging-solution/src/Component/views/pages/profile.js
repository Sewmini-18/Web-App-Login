import React from 'react';
import { Row,  Jumbotron } from 'react-bootstrap'
import { Face } from '@material-ui/icons';

export const Profile = () => {
    return (
        <div className="container mgntop">
            <h2><Face fontSize="large"/> {"  "}Profile</h2>
            <Row>
                <Jumbotron>
       
                       <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information. content or information.
                        content or information.
                    </p>

                </Jumbotron>
            </Row>

        </div>
    )
}