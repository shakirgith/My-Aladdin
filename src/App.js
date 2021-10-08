import React from 'react';
import './App.css';
import Navbar from './MyComponents/Layout/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './MyComponents/Pages/Home';
import About from './MyComponents/Pages/About';
import Contact from './MyComponents/Pages/Contact';
import Footer from './MyComponents/Layout/Footer';
import PageNotFound from './MyComponents/Pages/Not-found';
import Modal from './MyComponents/Model/Register';
// import Button from 'react-bootstrap/Button';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="" component={PageNotFound} />

        {/* <Route path="/not-found" /> */}
      </Switch>
      <Modal />
      
     
      <Footer />
    </Router>
    
  );
}

export default App;


 