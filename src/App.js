import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Landing from './component/home/Landing';
import store from './store';

import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Landing></Landing>
        <br/>
        <br/>
        <Footer />
      </Provider>
    )
  }
}

export default App;
