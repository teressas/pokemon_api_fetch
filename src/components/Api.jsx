import React, {useState, useEffect} from 'react';

const Api = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    return (
        <div>
            <ol>{pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}</ol>
        </div>
    );
}
export default Api;
