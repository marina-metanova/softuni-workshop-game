import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
    return (
        <div id="box">

            <Header></Header>

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                
            </main>
        </div>
    );
}

export default App;
