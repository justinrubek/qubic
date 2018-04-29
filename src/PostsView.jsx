import React from "react";

import { Link } from "react-router-dom";

var i = 0;
function generatePost() {
  return {
    id: i,
    title: "Post " + i++
  };
}

export default class PostsView extends React.Component {
  constructor(props) {
    super(props);

    // Do API call for posts

    this.state = {
      posts: [generatePost(), generatePost()]
    };
  }

  render() {
    const { posts } = this.state;

    let postCards = posts.map(post => {
      let routeTo = "/posts/" + post.id;
      return (
        <div>
          <Link to={routeTo}>{post.title}</Link>
        </div>
      );
    });
    return <div>{postCards}</div>;
  }
}
