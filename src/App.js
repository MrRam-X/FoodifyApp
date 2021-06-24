import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { useState } from "react";
// import { Switch, Route, useHistory, Link } from "react-router-dom";

import SearchFood from "./components/SearchFood";
// import Ingredients from "./components/Ingredients";
// import Recipe from "./components/Recipe";

function App() {
  // const [defaultView, setDefaultView] = useState(true);
  // let history = useHistory();
  // function backToHome() {
  //   history.push("/");
  // }

  return (
    <div className="App">
      {/* <Link to="/"> */}
      <header className="App-header">
        <h2>Welcome to Foodify</h2>
      </header>
      <SearchFood />
      {/* </Link> */}

      {/* <Switch>
        <Route path="/" exact>
          <SearchFood />
        </Route>
        <Route path="/recipe">
          <Recipe />
        </Route>
        <Route path="/ingredients">
          <Ingredients />
        </Route>
      </Switch> */}

      {/* <Switch>
        <Route path="/">
          
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
