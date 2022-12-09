import React from "react";

const ItemListContainer = ({greeting}) => {
    
    const date = new Date();
    const hours = date.getHours();

    let saludo = '';
    if (hours < 12) {
        saludo = 'Buenos días ';
    } else if (hours < 18) {
        saludo = 'Buenas tardes ';
    } else {
        saludo = 'Buenas noches ';
    }

    return (
        <div>
        <h3>{ saludo + greeting}</h3>
        </div>
    );
    }

export default ItemListContainer;