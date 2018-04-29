import React from "react";

import { Link } from "react-router-dom";
import card_styles from "./css/card.css";
import style from "./css/postsview.css";

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
    datePublished: "yesterday",
    shortcontent: "This is the story of how I saved Dimension " + id,
    image: "https://i.imgur.com/xbKSm5n.png"
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
    let topbar = (
      <div>
        <Link to="/create/post">
          <button type="button">New Post</button>
        </Link>
        <h2>Previous posts:</h2>
      </div>
    );

    let cards = posts.map(post => {
      let routeTo = "/posts/" + post.id;
      return (
        <div className={card_styles.card} key={post.id + post.datePublished}>
          <img
            src={post.image}
            alt={"Post by " + post.author}
            className={card_styles.thumbnail}
          />
          <div className={card_styles.container}>
            <Link className={card_styles.title} to={routeTo}>
              {post.title}
            </Link>

            <p className={card_styles.description}>{post.shortcontent}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        {topbar}
        <div className={style.container}>{cards}</div>
      </div>
    );
  }
}
