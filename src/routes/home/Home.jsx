import React from "react";
import Navbar  from "../../components/navbar/Navbar";
import ItemListContainer from "../../components/itemlistcontainer/ItemListContainer";

const Home = () => {

    let toGreeting = 'Juan';

    return (
        <div>
            <Navbar />
            <ItemListContainer greeting={toGreeting}/>
        </div>
    );
    }

export default Home;