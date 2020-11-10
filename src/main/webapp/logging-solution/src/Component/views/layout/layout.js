import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import Header from '../layout/header'
import { Profile } from '../pages/profile'
import CustomerForm from '../pages/adminPages/customerForm'
import Footer from '../layout/footer'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


class Layout extends React.Component {
    componentDidMount() {
        document.title = "Home"
    }
    render() {
        const { match } = this.props
        return (

            <div className="">
                <Header appTitle=" Layout" />
                <Switch>
                    <Route
                        exact path={`${match.path}`}
                        render={(props) => <Home {...props} />} />
                    <Route path={`${match.path}/profile`} component={Profile} />
                    <Route path={`${match.path}/customerform`} component={CustomerForm} />
                </Switch>
                <Footer />
            </div>

        )
    }
}

Layout.propTypes = {
    match: PropTypes.any.isRequired
}


export default Layout;