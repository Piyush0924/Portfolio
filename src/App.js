
import './App.css';
import Navbar from './components.js/Navbar';
import{Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="Skills" element={<Skills />}/>
   <Route path="Projects" element={<Projects />}/>
    <Route path="Contact" element={<Contact />}/>
    

</Routes> 
    </div>
  );
}

export default App;
