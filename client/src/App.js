import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import NotFound from './components/No Found/NoFound'
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/countries/:id" element={<Detail />} />
        <Route exact path="/form" element={<Form/>} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;