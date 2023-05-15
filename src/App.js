import './App.css';
// import Input from "./components/input";
import Dashboard from  "./components/dashboard"
import About from "./components/about"
import Navigation from "./components/navigation"

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
    <header>
      <h2>My Page</h2>
      <Navigation />
    </header>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/About" element={<About />}/>
    </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
