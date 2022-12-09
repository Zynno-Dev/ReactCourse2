import React, {useEffect, useState} from "react";

const Pjs = () => {
    const [characters, setCharacters] = useState({});

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then(setCharacters)
    }, []);


    return (
        <div>
            <h1>Personajes</h1>
                {characters.results?.map((character) => (
                        <h2>{character.name}</h2>
                ))}
        </div>
    );
};

export default Pjs;