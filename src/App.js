import React from 'react';
import './App.css';
import Navbar from './MyComponents/Layout/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './MyComponents/Pages/Home';
import About from './MyComponents/Pages/About';
import Contact from './MyComponents/Pages/Contact';
import Footer from './MyComponents/Layout/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;


 