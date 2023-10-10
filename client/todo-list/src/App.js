import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
    )
}

export default App;