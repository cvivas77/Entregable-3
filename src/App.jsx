import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import axios from 'axios'
import Search from './Component/Search';
import Character from './Component/Character';




function App() {



  return (
    <div className="App">
      <figure className='banner'></figure>
      <Search />
      
    
    </div>
  )
}

export default App
