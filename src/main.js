"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Menu from './components/menu';
import Footer from './components/footer';

class Main extends React.Component{
  componentDidMount(){
  }
  render(){
    return (
      <div>
      <Menu />
        {/* {this.props.children} */}
        <h1>Hello First Redux App :)</h1>
      <Footer />
      </div>
    );
  }
}

export default Main;
