import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function Characters(){
    const [Characters , GetCharacters] = useState([]);

    useEffect(()=>{
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
                console.log(response.data.results);
                GetCharacters(response.data.results);
    })
    .catch(err =>{
        console.log(err)
    });
}, []);

    return (
        <section className="characters">
            {Characters.map((chars, id) =>{
                return <CharacterCard key={id} chars={chars} />
            })}
        </section>
    );
}