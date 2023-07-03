import React, { Component } from 'react';
import ResultContent from './ResultContent';
import { Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/result.css'

class Result extends Component {
    render() {
        return (
            <div className='result-div'>
                <Row>
                    <Col xs="6">
                        <div className='center-heading'>
                            <h5>Labels</h5>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className='center-heading'>
                            <h5>Predictions</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <div className='label-div'>
                            {this.props.label !== 'unanswerable' ?
                                JSON.parse(this.props.label).map((value, index) => (
                                    <ResultContent key={'label ' + index} id={'label ' + index} value={value} />
                                )) : <ResultContent key={'label'} id={'label'} value={{}} />
                            }
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className='label-div'>
                            {this.props.prediction !== 'unanswerable' ?
                                JSON.parse(this.props.prediction).map((value, index) => (
                                    <ResultContent key={'prediction ' + index} id={'prediction ' + index} value={value} />
                                )) : <ResultContent key={'prediction'} id={'prediction'} value={{}} />
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Result;