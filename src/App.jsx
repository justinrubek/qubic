import React from "react";

import styles from "./app.css";

import NavBar from "./NavBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.app}>
        <h1>Qube: qq</h1>
        <NavBar items={["Home", "Gallery"]} />
        <h1>Enter the realm of the qube</h1>
        <p> Hello, World! </p>
      </div>
    );
  }
}
