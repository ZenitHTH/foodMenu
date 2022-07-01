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
import Home from "./components/home";
import TypeList from "./components/type/edit-type.component";
import TypeCreate from "./components/type/create-type.component";
function App() {
  return (
    <div className="App">
      <MainNavBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/type" element={<TypeList />} />
        <Route path="/type/create" element={<TypeCreate />} />
        <Route path="/subtype" />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
