import React, { Component } from "react";
import PropTypes from "prop-types";
const constants = require("constants");
// import PostIcons from "../components/PostIcons";

// import { rhythm } from "../utils/typography";

import Helmet from "react-helmet";
import Img from "gatsby-image";

class PostTemplate extends Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata;
    const currentPost = this.props.data.wordpressPost;

    return (
      <div>
        <h1
          dangerouslySetInnerHTML={{
            __html: currentPost.title,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: currentPost.content,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: currentPost.author.name,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: currentPost.date,
          }}
        />
      </div>
    );
  }
}

export default PostTemplate;
