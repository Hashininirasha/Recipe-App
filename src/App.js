import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css'
import Form from './components/Form.jsx';

function App() {
  getrecipe() {
    console.log("Working!!!");
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe App</h1>
      </header>
      <Form getrecipe={this.getrecipe} />
    </div>
  );
  };
};

export default App;
