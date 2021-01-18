import React from "react";
import "./App.css";
import Navigationbar from "./components/NavigationBar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Random from "./Pages/Random";
import Search from "./Pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/random" render={() => <Random />} />
        <Route path="/search" render={() => <Search />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
