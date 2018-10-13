import React from "react";

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>404</h1>
        <p>
          <i>Oops!</i> You dropped your pocket.
        </p>
      </div>
    );
  }
}
