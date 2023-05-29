import React from "react";
import {Routes, Route} from "react-router-dom";
import { Main, Register, Login, Navbar  } from "./Components"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  )
};

export default App;
