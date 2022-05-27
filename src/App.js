import React,{Component} from "react";
import {Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Routes} from "react-router";
class App extends Component {
    render(){
        return(
            
            <div>
                <h1>
                    MY FIRST REACT APP
                </h1>
                <ul className="header">
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
              
                <div className= "content">
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="about" element={ <About/> } />
                    <Route path="contact" element={ <Contact/> } />
                </Routes>
                   
                </div>
            </div>
            
        );
    }
}

export default App;