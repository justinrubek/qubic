import React from "react";
import { NavLink } from "react-router-dom";

import style from "./css/navbar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    let links = items.map((item, i) => {
      let link = item.link;
      let text = item.text;

      let exact = item.exact;

      let key = i;

      return (
        <li key={key}>
          <NavLink exact={exact} to={link} activeClassName={style.active}>
            {text}
          </NavLink>
        </li>
      );
    });

    return (
      <nav className={style.navbar}>
        <ul>{links}</ul>
      </nav>
    );
  }
}
