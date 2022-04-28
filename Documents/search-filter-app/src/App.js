import React from "react";
import "./App.css";
import Search from "./Search";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="ui container center">
        <BrowserRouter>
          <nav className="navbar sticky-top navbar-expand-lg navBarBgColor">
            <div className="navbarContent" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"></li>
                <Link className="nav-link navLink" to="/">Home</Link>
                <Link className="nav-link navLink" to="/contact">Contact</Link>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Search />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
