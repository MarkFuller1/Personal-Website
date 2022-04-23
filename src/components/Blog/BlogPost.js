import React, { useEffect, useState } from "react";
import { Interweave, Node } from "interweave";
import { Chip, Typography } from "@material-ui/core";

const isTextComponent = (node) => {
  return (
    [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "caption",
      "button",
      "overline",
      "srOnly",
      "inherit",
    ].indexOf(node.tagName.toLowerCase()) > -1
  );
};

export const BlogPost = (props) => {
  // console.log("BlogPost props:", props);

  const transformText = (node, children) => {
    node.style.font = "Comfortaa";

    if (isTextComponent(node)) {
      return (
        <Typography
          variant={node.tagName.toLowerCase()}
          style={{ padding: "20px" }}
        >
          {children}
        </Typography>
      );
    }

    if (node.tagName.toLowerCase() === "img") {
      return (
        <img
          src={node.getAttribute("src")}
          style={{ width: "80%", height: "auto" }}
        />
      );
    }

    if (
      node.tagName.toLowerCase() === "pre" ||
      node.tagName.toLowerCase() === "code"
    ) {
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <Interweave
        transform={transformText}
        style={{ FontFace: "Comfortaa" }}
        content={props.state.post_content}
      />
      <center>
        {props.state.tags.map((tag) => (
          <Chip label={tag.value} variant="outlined" key={tag.tag_id} />
        ))}
      </center>
    </div>
  );
};