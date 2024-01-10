import React from "react";
import "./Post.css";
import { getDateAndHour } from "../../lib/utils";

//interface for props Post for DOM
export interface PostProps {
  post: {
    id: number;
    title: string;
    description: string;
    author: string;
    image: string;
  };
}

export default function Post({ post }: PostProps) {
  const dateStr = getDateAndHour();
  console.log("post content : " + JSON.stringify(post));
  return (
    <div className="Post">
      <div className="head">
        <h1 className="title">{post.title}</h1>
      </div>
      {/* help webpackage get image dynamically */}
      <img
        className="post-image"
        src={require("../../assets/" + post.image + ".jpg")}
        alt={post.image}
      />
      <h3>{post.description}</h3>
      <div className="edit">
        <span>By</span>
        <span className="author">{post.author} </span>
        <span>|</span>
        <span>{dateStr}</span>
      </div>
    </div>
  );
}
