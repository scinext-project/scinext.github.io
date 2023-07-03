import React, { Component } from 'react';
import './../css/resultcontent.css'

class ResultContent extends Component {
    render() {
        return (
            <div key = {this.props.id} className='content'>
                <pre>{JSON.stringify(this.props.value, null, 2)}</pre>
            </div>
        );
    }
}

export default ResultContent;