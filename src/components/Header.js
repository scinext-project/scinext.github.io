import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/header.css'
import { Row, Col } from 'reactstrap'
import { Navbar, NavbarBrand } from 'reactstrap';

import logo from './../orkg_logo.png';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <header>
                            <Navbar className="header-navbar" light expand="md">
                                <NavbarBrand href="/">
                                    <img src={logo} alt="Logo" />
                                </NavbarBrand>
                            </Navbar>
                        </header>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Header;