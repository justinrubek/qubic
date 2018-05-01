import React from "react";
import { Redirect } from "react-router-dom";
import { post as send_post, try_timeout } from "./utility";

function generatePost(postId) {
  return {
    title: "Post " + postId,
    content: "I made this. You made this? I made this.",
    author: "Justin Rubek"
  };
}

// For now, we assume that each post has four properties
// title, content, author, and datePosted
// title and author being a string
// content being a string representing markdown to be rendered
// and datePosted being the datetime the post was created
// In the future, maybe there could be different types of posts
// as well as having a post created but not published
export default class PostCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: "",
        content: "",
        author: "Justin Rubek",
        datePosted: undefined
      },
      redirect: null
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  async createPost() {
    let today = new Date().toISOString();
    let post = this.state.post;

    let newPost = {
      title: post.title,
      content: post.content,
      author: post.author
    };

    // Do something with newPost, probably
    const url = "/api/posts";
    // Currently not doing anything with error, should push a message to the user
    const response = await send_post(url, newPost).catch(err => {
      console.log("Error in POST");
      console.log(err);
    });
    const created = await try_timeout(response.json(), 5000).catch(err => {
      console.log("Error parsing JSON");
      console.log(err);
    });

    if (created != null) {
      console.log("Created");
      console.log(created);

      // This currently uses the value of redirect to redirect. I'm not sure
      // if this is prefered over setting it in render
      this.setState({ redirect: <Redirect to={"/posts/" + created.id} /> });
    } else {
      console.log("ruh-oh");
    }
  }

  handleTitleChange(event) {
    let post = Object.assign({}, this.state.post);
    post.title = event.target.value;

    this.setState({
      post: post
    });
  }

  handleAuthorChange(event) {
    let post = Object.assign({}, this.state.post);
    post.author = event.target.value;

    this.setState({
      post: post
    });
  }

  handleContentChange(event) {
    let post = Object.assign({}, this.state.post);
    post.content = event.target.value;

    this.setState({
      post: post
    });
  }

  render() {
    const { post, redirect } = this.state;

    return (
      <div>
        <h1>Create new post</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={post.title}
            onChange={this.handleTitleChange}
            id="title"
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={post.author}
            onChange={this.handleAuthorChange}
            id="author"
          />
          <label htmlFor="content">Content</label>
          <textarea
            value={post.content}
            onChange={this.handleContentChange}
            id="content"
          />
          <button onClick={this.createPost}>Create Post</button>
        </div>
        {redirect}
      </div>
    );
  }
}
