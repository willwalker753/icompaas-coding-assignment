import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Nav />
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
