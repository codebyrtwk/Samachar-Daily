import './App.css';
import {Navbar} from './components/Navbar';
import NewsComponents from './components/NewsComponents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



function App() {
  
  return (
  <>
  <LoadingBar
    progressIncrease={10}
        color='white'
        progress={100}
        shadow={true}
        height={3} />
        
  
  <Router>
  <Navbar/>
    <Switch>
      <Route exact path="/">
        <NewsComponents category="general"/>
      </Route>
          <Route exact path="/home">
            <NewsComponents  key = "general"category = "general"/>
          </Route>
          <Route exact path="/business">
            <NewsComponents key = "business" category = "business"/>
          </Route>
          <Route exact path="/entertainment">
            <NewsComponents key = "entertainment" category = "entertainment"/>
          </Route>
          <Route exact path="/health">
            <NewsComponents key = "health" category = "health"/>
          </Route>
          <Route exact path="/science">
            <NewsComponents key = "science" category = "science"/>
          </Route>
          <Route exact path="/sports">
            <NewsComponents key = "sports" category = "sports"/>
          </Route>
          
          <Route exact path="/technology">
            <NewsComponents key = "technology" category = "technology"/>
          </Route>
          
        </Switch>
      
    </Router>
    
    </>
  
  );
}

export default App;
