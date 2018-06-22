import React, { Component } from "react";
import PropTypes from "prop-types";
const constants = require("constants");
// import PostIcons from "../components/PostIcons";

// import { rhythm } from "../utils/typography";

import Helmet from "react-helmet";
import Img from "gatsby-image";

class PageTemplate extends Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata;
    const currentPage = this.props.data.wordpressPage;

    return (
      <div>
        <h1
          dangerouslySetInnerHTML={{
            __html: currentPage.title,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: currentPage.content,
          }}
        />
      </div>
    );
  }
}

export default PageTemplate;
