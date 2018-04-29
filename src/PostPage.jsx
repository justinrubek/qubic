import React from "react";

function generatePost(postId) {
  return {
    title: "Post " + postId,
    content: "I made this. You made this? I made this.",
    author: "Justin Rubek",
    datePosted: "today"
  };
}

export default class PostsView extends React.Component {
  constructor(props) {
    super(props);

    let params = props.match.params;

    let postId = params.postId;

    // Do API call for posts
    // But definitely not here, use the componentWillMount function or whatever it was
    this.state = {
      post: generatePost(postId)
    };
  }

  render() {
    const { post } = this.state;

    return (
      <div>
        <h1>{post.title}</h1>
        <p>
          Posted {post.datePosted} by {post.author}
        </p>
        <p>{post.content}</p>
      </div>
    );
  }
}
