import React, {Component} from 'react';
import Axios from 'axios';
import './App.css'


const App = () =>{
  const APP_ID="5661db5d"
  const APP_KEY="b5c9bab94750b4d7343f70237d7b5a9d";
  const url = 'https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}';

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result)
  }
  return (
    <div className="App">
      <h1 onClick={getData}><div class="p-3 mb-2 bg-primary text-white">Food Recipe App</div></h1>
    </div>
    
  )
  
  }

export default App;
