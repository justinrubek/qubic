import React from "react";
import { Route, HashRouter } from "react-router-dom";

import styles from "./app.css";

import NavBar from "./NavBar";
import Home from "./Home";
import GalleryView from "./GalleryView";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let navItems = [
      {
        text: "Home",
        link: "/",
        exact: true
      },
      {
        text: "Gallery",
        link: "/gallery"
      }
    ];

    return (
      <HashRouter>
        <div className={styles.app}>
          <h1>Qube: qq</h1>
          <NavBar items={navItems} />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={GalleryView} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
