
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home';
import AboutUs from './Component/About/AboutUs';
import Service from './Component/Service/Service';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header> </Header>
    <Switch>
    <Route exact path="/">
              <Home></Home>
            </Route>
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
        <Footer></Footer>
     
    </Router>
  
    </div>
  );
}

export default App;
