import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Character = ({urlCharacter}) => {

  const [character, setCharacter] = useState({});
  

  useEffect(() => {
    axios.get(urlCharacter)
      .then(getsCharacter => setCharacter(getsCharacter.data))
  }, [urlCharacter]);






  return (
    <div className='container-card'>
      <div className='face front'>
      <img className='img' src={character.image} alt="" />
            <h2>{character.name}</h2>
      </div>
      <div className='face back'>
          <h3>Status: {character.status}</h3>
          <h3>Specie: {character.species}</h3>
          <h3>Gener: {character.gender}</h3>
          <h3>Number of Episodes: {character.episode?.length}</h3>
      </div>
      
        
    </div>
  );
};

export default Character;