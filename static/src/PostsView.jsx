import React from "react";

import { Link, Redirect } from "react-router-dom";
import card_styles from "./css/card.css";
import style from "./css/postsview.css";
import { get, try_timeout } from "./utility";

export default class PostsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      timeout: false,
      err: false
    };
  }

  async componentDidMount() {
    const url = "/api/posts";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    };

    const result = await get(url, options, 5000).catch(err => {
      this.setState({ timeout: true });
    });

    const posts = await try_timeout(result.json(), 5000).catch(err => {
      console.log(err);
      this.setState({ err: true });
    });

    // TODO: 'Validate'

    if (posts != null) {
      this.setState({ posts: posts });
    }
  }

  render() {
    const { posts, timeout, err } = this.state;

    if (timeout === true) {
      return <Redirect to="/404" />;
    }
    if (err === true) {
      return <Redirect to="/404" />;
    }

    if (posts != null) {
      let topbar = (
        <div key="ptop">
          <Link to="/create/post">
            <button type="button">New Post</button>
          </Link>
          <h2>Previous posts:</h2>
        </div>
      );

      let cards = posts.map(post => {
        let routeTo = "/posts/" + post._id;
        return (
          <div className={card_styles.card} key={post.id + post.date}>
            <img
              src={post.image}
              alt={"Post by " + post.author}
              className={card_styles.thumbnail}
            />
            <div className={card_styles.container}>
              <Link to={routeTo} className={card_styles.title}>
                {post.title}
              </Link>
            </div>
          </div>
        );
      });

      return (
        <div>
          {topbar}
          <div key="pcard" className={style.container}>
            {cards}
          </div>
        </div>
      );
    }
  }
}
