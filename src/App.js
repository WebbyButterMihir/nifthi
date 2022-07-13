import "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Appmain from "./Appmain";
import HeaderData from "./blockChain/headerData";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
   
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Appmain />} />
    <Route path="/blockchain" element={<HeaderData />} />
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
