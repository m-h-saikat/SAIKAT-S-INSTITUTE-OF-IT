import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import AboutUs from './Component/About/AboutUs';
import Service from './Component/Service/Service';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
    <Switch>
          <Route exact path="/Home">
           <Home></Home>
         </Route>
          <Route exact path="/AboutUs">
          <AboutUs></AboutUs>
          </Route>
          <Route exact path="/Service">
          <Service></Service>
          </Route>
    
          <Route exact path="/Contact">
          <Contact></Contact>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
     
    </Router>
  
    </div>
  );
}

export default App;
