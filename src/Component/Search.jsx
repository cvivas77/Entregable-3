import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import App from '../App';
import Character from './Character';

const Search = () => {

  const [location, setLocation] = useState({});
  


  useEffect(() => {
    const beginningId = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${beginningId}`)
      .then(res => {setLocation(res.data)})
  },[])




const [placeType, setPlaceType] = useState("") 

const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${placeType}`)
    .then(res => setLocation(res.data) )
  }


  return (
    <div className='box'>
      <div className='container-search'>
      <input placeholder='Search' type="text" value={placeType} onChange ={e => setPlaceType(e.target.value)} />
        <div></div>
        <button onClick={searchType}>Search</button>
      
      </div>
      <div className='container-location'>
        <h1>{location.name}</h1>
      </div>
      <div className='container-type'>
        <h2>Type: {location.type}</h2>
        <h2>Dimesion: {location.dimension}</h2>
        <h2>Residents: {location.residents?.length}</h2>
      </div>

      <div className='container-character'>
        {location.residents?.map(urlCharacter =>
          (<Character urlCharacter={urlCharacter} 
          key={urlCharacter} />))}
      </div>
      <div>
        
        <button></button>
      </div>
    </div>
   
  );
};

export default Search;