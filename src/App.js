import React, {Component} from 'react';
import './App.css'
import Foodlist from './components/Foodlist.jsx';


const App = () =>{
  const APP_ID="5661db5d"
  const url = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}";

 
  return (
    <div className="App">
      <h1><div class="p-3 mb-2 bg-primary text-white">Food Recipe App</div></h1>
    </div>
    
  )
  
  }

export default App;
