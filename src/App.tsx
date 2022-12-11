import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./page/Home";
import ContentInfo from "./page/ContentInfo";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/content/:id" element={<ContentInfo/>}/>
        </Routes>
    );
}

export default App;
