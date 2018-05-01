import React from "react";

import { Link, Redirect } from "react-router-dom";
import card_styles from "./css/card.css";
import style from "./css/postsview.css";
import { get, try_timeout } from "./utility";

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
    title: "Post " + id,
    author: "Justin Rubek",
    date: new Date().toISOString(),
    image: "https://i.imgur.com/xbKSm5n.png"
  };
}

export default class PostsView extends React.Component {
  constructor(props) {
    super(props);

    // Do API call for posts

    this.state = {
      posts: generatePosts(10),
      timeout: false,
      err: false
    };
  }

  async componentDidMount() {
    const url = "/api/posts/posts.json";

    const result = await get(url, {}, 5000).catch(err => {
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
        let routeTo = "/posts/" + post.id;
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
