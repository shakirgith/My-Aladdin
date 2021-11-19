import React from 'react';
import './App.css';
import Navbar from './MyComponents/Layout/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './MyComponents/Pages/Home';
import About from './MyComponents/Pages/About';
import Contact from './MyComponents/Pages/Contact';
import ResultListView from './MyComponents/Pages/result-view';
import Footer from './MyComponents/Layout/Footer';
import PageNotFound from './MyComponents/Pages/Not-found';
import Registration from './MyComponents/Model/Register';
// import Button from 'react-bootstrap/Button';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/my-aladdin" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/result-view" component={ResultListView} />
        <Route path="" component={PageNotFound} />

        {/* <Route path="/not-found" /> */}
      </Switch>
      <Registration />
      
     
      <Footer />
    </Router>



    
  );
}

export default App;


 