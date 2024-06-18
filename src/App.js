import{Browser as Router, Rote, Link, Routes } from"react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';



<Router>
  <Routes>
    {
      /*<Route exaxt path="/" element={<h1>Home Page</h1>} /> */
    }
    <route path="/bannner" element={<Banner/>}/>
    <route path="/marketing" element={<Markting/>}/>
    <route path="/companies" element={<Companys/>}/>
    <route path="/code" element={<Routing/>}/>
  </Routes>
</Router>





function App() {
  return (
    <div className="App">
    <Navbar/>
    </div>
  );
}

export default App;
