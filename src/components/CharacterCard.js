import React from 'react';
import '../styles/cards.css';

export default function CharacterCard(props){
    return(
        <div className="col">
            <div className="card">
                <h1>{props.chars.name}</h1>
                <img src={props.chars.image}  alt="Rick&Morty"></img>
                <div className="h4"><span id="gnr">Genre: </span>{props.chars.gender}</div>
                <div className="h4"><span id="gnr">Status: </span>{props.chars.status}</div>
                <div className="h4"><span id="gnr">Specie: </span>{props.chars.species}</div>
                <div className="h4"><span id="gnr">Created: </span>{props.chars.created}</div>
            </div>
        </div>
    )
}