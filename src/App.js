import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import About from './components/Navbar/Navbarcomponents/About';
import Works from './components/Navbar/Navbarcomponents/Works';
import Contact from './components/Navbar/Navbarcomponents/Contact';
import Home from './components/Home';
import './App.css';



const App = () => {
  const [toggle, setToggle] = useState(false)


  return (
    <Router>
            <div className='control'>
                      <Navbar toggle={toggle} setToggle={setToggle}/>
              <Switch >
                        <Route path="/" exact component={Home}  />
                        <Route path="/about"  component={About} />
                        <Route path="/works" component={Works} />
                        <Route path="/contact" component={Contact} />  
              </Switch>   
            </div>
    </Router>
  );
} 




export default App;
