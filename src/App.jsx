import React from "react";
import { Route, HashRouter, Redirect, Switch } from "react-router-dom";

import common_styles from "./css/common.css";
import styles from "./css/app.css";

import NavBar from "./NavBar";
import Home from "./Home";
import Posts from "./Posts";
import Create from "./Create";

import NotFound from "./NotFound";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  setBodyClassName() {
    var orig = document.body.className;
    document.body.className = orig + (orig ? " " : "") + styles.body;
  }

  componentDidMount() {
    this.setBodyClassName();
  }

  render() {
    let navItems = [
      {
        text: "Home",
        link: "/",
        exact: true
      },
      {
        text: "Posts",
        link: "/posts"
      }
    ];

    return (
      <HashRouter>
        <div className={styles.app}>
          <h1>Qube: qq</h1>
          <NavBar items={navItems} />
          <div className={common_styles.content}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Posts} />
              <Route path="/create" component={Create} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
