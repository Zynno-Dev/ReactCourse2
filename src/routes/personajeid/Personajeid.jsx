import React, {useEffect, useState} from "react";

import { useParams } from "react-router-dom";

const Personajeid = () => {
    const [characters, setCharacters] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then(setCharacters)
    }, [id]);

    return (
        <div>
            <h1>Personaje</h1>
            <h2>{characters?.name}</h2>
            <img src={characters?.image} alt={characters?.name} />
        </div>
    );
}

export default Personajeid;