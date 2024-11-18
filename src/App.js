import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./Home/home";
import Semana01 from "./semana01/Atv01";
import Semana02 from "./semana02/Atv02";
import Semana03 from "./semana03/Atividade03";
import Semana04 from "./semana04/Atividade04";
function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/semana01" element={<Semana01/>} />
          <Route path="/semana02" element={<Semana02/>} />
          <Route path="/semana03" element={<Semana03/>} />
          <Route path="/semana04" element={<Semana04/>} />
      </Routes>
      </BrowserRouter>

  );

}

export default App;
