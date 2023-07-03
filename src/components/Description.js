import React, { Component } from 'react';
import './../css/description.css'

class Description extends Component {
    render() {
        return (
            <div className='description-div'>
                <h5>Information Extraction Demo</h5>
                <p>All extractions are exactly as output by our model and entries were not seen during training.</p>
            </div>
        );
    }
}

export default Description;