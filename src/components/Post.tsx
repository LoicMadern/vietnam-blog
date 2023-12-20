import React from "react";
import "./Post.css";
import MyImage from "../assets/vietnam.jpg";
import { formatDate } from "../lib/utils";

export default function Post() {
  const title = "Parc naturel";
  const tag = "paysage";
  const author = "Loïc";
  const dateStr = formatDate();
  return (
    <div className="Post">
      <div className="head">
        <h2 className="title">{title}</h2>
        <h3 className="tag">{tag}</h3>
      </div>
      <img src={MyImage} alt="vietnam" />
      <div className="edit">
        <span>By</span>
        <span className="author">{author} </span>
        <span>|</span>
        <span>{dateStr}</span>
      </div>
    </div>
  );
}
