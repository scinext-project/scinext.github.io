import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap'
import './../css/footer.css'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <footer className="footer">
                            <p className="footer-content">&copy; {new Date().getFullYear()} Open Research Knowledge Graph (ORKG) | <a href="https://orkg.org/">ORKG</a></p>
                        </footer>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Footer;