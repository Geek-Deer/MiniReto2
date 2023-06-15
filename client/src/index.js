import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css';
import Home from './pages/Home';
import Borrar from "./pages/Borrar";
import Layout from "./pages/Layout";
import Update from "./pages/Update";
import Registro from "./pages/Registro";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Registro" element={<Registro />} />
          <Route path="Update" element={<Update />} />
          <Route path="Borrar" element={<Borrar />} />
        </Route >
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))


