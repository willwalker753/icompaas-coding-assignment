import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Plans from './components/plans/plans';
import Notifications from './components/notifications/notifications';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Nav />
          <Profile />
        </Route>
        <Route exact path='/notifications'>
          <Nav />
          <Notifications />
        </Route>
        <Route exact path='/billing'>
          <Nav />

        </Route>
        <Route exact path='/plans'>
          <Nav />
          <Plans />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
