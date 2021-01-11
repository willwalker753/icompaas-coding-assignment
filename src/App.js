import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Plans from './components/plans/plans';
import Notifications from './components/notifications/notifications';
import Billing from './components/billing/billing';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/notifications'>
          <Nav />
          <Notifications />
        </Route>
        <Route exact path='/billing'>
          <Nav />
          <Billing />
        </Route>
        <Route exact path='/plans'>
          <Nav />
          <Plans />
        </Route>
        <Route exact path='/'>
          <Nav />
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
