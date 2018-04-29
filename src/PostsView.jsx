import React from "react";

import { Link } from "react-router-dom";

function generatePosts(amount) {
  const posts = [];
  for (let i = 0; i < amount; i++) {
    posts.push(generatePost(i));
  }

  return posts;
}

function generatePost(id) {
  return {
    id: id,
    title: "Post " + id
  };
}

export default class PostsView extends React.Component {
  constructor(props) {
    super(props);

    // Do API call for posts

    this.state = {
      posts: generatePosts(10)
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
