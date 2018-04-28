import React from "react";
import style from "./navbar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    let links = items.map(text => {
      return (
        <li>
          <a href="#">{text}</a>
        </li>
      );
    });

    return (
      <div className={style.navbar}>
        <ul>{links}</ul>
      </div>
    );
  }
}
