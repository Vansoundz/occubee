import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./index.css";
import "materialize-css/dist/js/materialize";
import { connect } from "react-redux";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container" style={{ marginTop: "16px" }}>
          <Routes />
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect(mapStateToProps)(App);
