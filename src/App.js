import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import * as gameService from './services/gameService';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Catalog from "./components/Catalog/Catalog";

function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                console.log(result);
                setGames(result);
            })
    }, [])

    return (
        <div id="box">

            <Header></Header>

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home games={games} />} />
                    <Route path="/catalog" element={<Catalog games={games}  />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                
            </main>
        </div>
    );
}

export default App;
