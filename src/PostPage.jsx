import React from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";

function generatePost(postId) {
  return {
    title: "Post " + postId,
    content: "# I made this.\n\n You made this? I made this.",
    author: "Justin Rubek",
    datePosted: new Date().toISOString()
  };
}

// For now, we assume that each post has four properties
// title, content, author, and datePosted
// title and author being a string
// content being a string representing markdown to be rendered
// and datePosted being the datetime the post was created
// In the future, maybe there could be different types of posts
// as well as having a post created but not published
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
          Posted {moment(post.datePosted).format("D MMM YY")} by {post.author}
        </p>
        <ReactMarkdown source={post.content} />
      </div>
    );
  }
}
