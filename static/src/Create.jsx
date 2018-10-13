import React from "react";
import { Switch, Route } from "react-router-dom";

import PostCreate from "./PostCreate";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path="/create/post" component={PostCreate} />
      </Switch>
    );
  }
}
