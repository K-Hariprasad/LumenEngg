import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;

