import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Abstract from './components/Abstract';
import Result from './components/Result';
import Description from './components/Description';
import testdata from './../src/test_data.json'

import { Container } from 'reactstrap'

class App extends Component {

  constructor(props) {
    super(props);

    const data = testdata['Sheet1'][Math.floor(Math.random() * 300) + 1]

    this.state = {
      title: data['title'],
      abstract: data['abstract'],
      label: data['json_response'],
      prediction: data['json_model_response']
    };
  }

  onRefresh = () => {
    const data = testdata['Sheet1'][Math.floor(Math.random() * 300) + 1]
    
    this.setState({
      title: data['title'],
      abstract: data['abstract'],
      label: data['json_response'],
      prediction: data['json_model_response']
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Header />
          <Description />
          <Abstract title = {this.state.title} abstract = {this.state.abstract} onClick = {this.onRefresh} />
          <Result label = {this.state.label} prediction = {this.state.prediction} />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
