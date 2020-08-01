import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import BookSearch from "./BookSearch.js"
import SavedBooks from "./SavedBooks.js"
import Nav from "./components/nav.js"

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path="/" component={BookSearch} />
      <Route exact path="/saved" component={SavedBooks} />
    </div>
    </Router>
  );
}

export default App;