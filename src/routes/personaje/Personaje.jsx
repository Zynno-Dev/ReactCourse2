import React, {useEffect, useState} from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Personaje = () => {
    const [characters, setCharacters] = useState({});

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then(setCharacters)
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Personajes</h1>
                {characters.results?.map((character) => (
                    <Link to={`/personajes/${character.id}`}>
                        <h2>{character.name}</h2>
                    </Link>
                ))}
        </div>
    );
}

export default Personaje;