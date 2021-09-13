import './App.css';
import {Navbar} from './components/Navbar'
import NewsComponents from './components/NewsComponents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <>
    <Navbar/>
    <Router>
    <Switch>
      <Route exact path="/">
        <NewsComponents category="general"/>
      </Route>
          <Route path="/home">
            <NewsComponents  category = "general"/>
          </Route>
          <Route path="/business">
            <NewsComponents  category = "business"/>
          </Route>
          <Route path="/entertainment">
            <NewsComponents  category = "entertainment"/>
          </Route>
          <Route path="/health">
            <NewsComponents  category = "health"/>
          </Route>
          <Route path="/science">
            <NewsComponents  category = "science"/>
          </Route>
          <Route path="/sports">
            <NewsComponents  category = "sports"/>
          </Route>
          
          <Route path="/technology">
            <NewsComponents  category = "technology"/>
          </Route>
          
        </Switch>
      
    </Router>
    <NewsComponents/>
  </>  
  );
}

export default App;
