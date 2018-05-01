import React from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { get, try_timeout } from "./utility";
import common_styles from "./css/common.css";

function generatePost(postId) {
  return {
    id: postId,
    title: "Post " + postId,
    content: "# I made this.\n\n You made this? I made this.",
    author: "Justin Rubek",
    date: new Date().toISOString()
  };
}
// For now, we assume that each post has four properties
// title, content, author, and datePosted
// title and author being a string
// content being a string representing markdown to be rendered
// and datePosted being the datetime the post was created
// In the future, maybe there could be different types of posts
// as well as having a post created but not published
export default class PostPage extends React.Component {
  constructor(props) {
    super(props);

    let params = props.match.params;

    let postId = params.postId;

    // Do API call for posts
    // But definitely not here, use the componentWillMount function or whatever it was
    this.state = {
      postId: postId,
      timeout: false,
      err: false
    };
  }

  async componentDidMount() {
    const id = this.state.postId;
    const result = await get("/api/posts/" + id + ".json", {}, 5000).catch(
      err => {
        this.setState({ timeout: true });
      }
    );
    const post = await try_timeout(result.json(), 5000).catch(err => {
      // Bad return
      console.log(err);
      this.setState({ err: true });
    });

    if (post !== undefined) {
      this.setState({ post: post });
    }
  }

  render() {
    const { post, timeout, err } = this.state;

    if (timeout) {
      return <Redirect to="/404" />;
    }
    if (err) {
      return <Redirect to="/404" />;
    }

    if (post != null) {
      return (
        <div>
          <h1>{post.title}</h1>
          <p>
            Posted {moment(post.date).format("D MMM YY")} by {post.author}
          </p>
          <ReactMarkdown source={post.content} />
        </div>
      );
    } else {
      return <div className={common_styles.loading} />;
    }
  }
}
