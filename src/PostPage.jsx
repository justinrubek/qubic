import React from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";
import ReactMarkdown from "react-markdown";

function generatePost(postId) {
  return {
    id: postId,
    title: "Post " + postId,
    content: "# I made this.\n\n You made this? I made this.",
    author: "Justin Rubek",
    date: new Date().toISOString()
  };
}

function get(url, options, timeout) {
  options = options || {};
  timeout = timeout || 5000;

  return try_timeout(fetch(url, options), timeout);
  /*
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Connection timed out")), timeout)
    )
  ]);
*/
}

function try_timeout(prom, timeout) {
  return Promise.race([
    prom,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timed out")), timeout)
    )
  ]);
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

    let redirect = null;
    if (timeout) {
      return <Redirect to="/404" />;
    }
    if (err) {
      return <Redirect to="/404" />;
    }

    if (post === undefined) {
      return timeout;
    } else {
      return (
        <div>
          {redirect}
          <h1>{post.title}</h1>
          <p>
            Posted {moment(post.date).format("D MMM YY")} by {post.author}
          </p>
          <ReactMarkdown source={post.content} />
        </div>
      );
    }
  }
}
