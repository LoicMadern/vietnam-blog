import React from "react";
import "./Post.css";
import { getDateAndHour } from "../../lib/utils";
import ImageContainer from "../image/ImageContainer";

//interface for props Post for DOM
interface PostProps {
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
      <ImageContainer name={post.image}></ImageContainer>
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
