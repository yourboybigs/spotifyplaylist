import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#00AFAF';
let defaultStyle = {
  color: defaultTextColor
};

class Aggregate extends Component{
  render() {
    return(
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
      <h2 style={{color: defaultTextColor}}>number text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img />
        <h3>PlayList Name</h3>
        <ul><li>song 1</li><li>song 2</li><li>song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
