import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Footer></Footer>
      </React.Fragment>

    )
  }
}

export default App;
