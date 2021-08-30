import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
// import Work from '@material-ui/icons/Work';
import Work from "./Pages/Work/Work"
import Footer from './Components/Footer/Footer';
import BottomNav from "./Components/BottomNav/BottomNav"
import MaterialNavbar from "./Components/MaterialNavBar/MaterialNavbar"
import Services from './Pages/Services/Services';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <MaterialNavbar/>


     <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} /> 
        <Route path="/work" component={Work} exact />
        <Route path="/services" component={Services} exact />

       


       {/* <Route path="/categories" component={Category} /> */}
     
    </Switch>
    </BrowserRouter>
    <Footer/>
    <BottomNav/>
    
    </div>
  );
}

export default App;
