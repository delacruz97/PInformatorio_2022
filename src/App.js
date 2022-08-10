import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/home/Home.jsx";
import Error from "./components/Error404.jsx";
import Busqueda from "./components/routes/buscador/Busqueda.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscador" element={<Busqueda />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
