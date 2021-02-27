import React, {useState} from 'react';
import Axios from 'axios';
import './App.css'


const App = () =>{
  const [query,setQuery]=useState("");
  const APP_ID="5661db5d";
  const APP_KEY="b5c9bab94750b4d7343f70237d7b5a9d";
  const url = 'https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}';

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
    setQuery(" ")
  };
  const onChange = e => {
    setQuery(e.target.value)
  }
  const onsubmit = e => {
      e.preventDefault()
      getData();
  };
  return (
    <div className="App">
      <h1 onClick={getData}><div class="p-3 mb-2 bg-primary text-white">Food Recipe App</div></h1><br/>
      <form className="search-form" onSubmit={onsubmit}>
        
        <input class="btn btn-outline-primary my-2 my-sm-0" type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query}/>
        <input class="btn btn-outline-primary my-2 my-sm-0" type="submit" value="Search"/>
      </form>
    </div>
    
  )
  
  }

export default App;
