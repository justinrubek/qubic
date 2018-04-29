import React from "react";

function generatePost(postId) {
  return {
    title: "Post " + postId,
    content: "I made this. You made this? I made this.",
    author: "Justin Rubek",
    datePosted: "today"
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
        author: "",
        datePosted: undefined
      }
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  createPost() {
    let today = new Date().toISOString();
    let post = this.state.post;

    let newPost = {
      title: post.title,
      content: post.content,
      author: post.author,
      datePosted: today
    };

    // Do something with newPost, probably
    console.log("Attempting to create a new post.");
    console.log("Post contents: ");
    console.log(newPost);
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
    const { post } = this.state;

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
          <input type="submit" value="Create Post" onClick={this.createPost} />
        </div>
      </div>
    );
  }
}
