import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact={true} component={Home} />
        <Route path="/staff" exact={true} component={Staff} />
      </div>
    </Router>
  );
}

export default App;
