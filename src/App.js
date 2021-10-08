
import './App.css';
import FetchUsers from './FetchUsers';
import AddUser from './AddUser';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>         
          <Route exact path="/">
            <FetchUsers />
          </Route>
          <Route exact path="/adduser">
            <AddUser />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
