import "./App.css";
import { Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import MainNavBar from "./components/navbar";
import TypeList from "./components/type/list-type.component";

function App() {
  return (
    <div className="App">
      <MainNavBar />

      <Routes>
        <Route path="/" />
        <Route path="/type">
          <Route></Route>
          <Route></Route>
        </Route>
        <Route path="/subtype">
          <Route></Route>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
