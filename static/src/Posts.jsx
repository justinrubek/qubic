import React from "react";
import { Switch, Route } from "react-router-dom";

import PostsView from "./PostsView";
import PostPage from "./PostPage";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/posts" component={PostsView} />
        <Route path="/posts/:postId" component={PostPage} />
      </Switch>
    );
  }
}
