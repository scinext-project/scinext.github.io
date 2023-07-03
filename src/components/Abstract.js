import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/abstract.css'
import { FaSyncAlt } from 'react-icons/fa';

class Abstract extends Component {
    render() {
        return (
            <div className='abstract-div'>
                <Row className='abstract-row1'>
                    <Col sm="10" md={{ size: 10, offset: 0 }}>
                        <div className='abstract-text'>
                            <h5>{this.props.title}</h5>
                            <p>{this.props.abstract}</p>
                        </div>
                    </Col>
                    <Col sm="2" md={{ size: 2, offset: 0 }} className="d-flex align-items-center">
                        <button id='refresh-button' className='button refresh-button' onClick={this.props.onClick}><FaSyncAlt /></button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Abstract;