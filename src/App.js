import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Landing from './component/home/Landing';
import store from './store';
import { HashRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Landing />
            <br />
            <br />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
