import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchFood from "./components/SearchFood";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Foodify</h2>
      </header>
      <SearchFood />
    </div>
  );
}

export default App;
