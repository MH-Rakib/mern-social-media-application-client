import React from "react";
import Posts from "../Posts/Posts";
import PostStatus from "../PostStatus/PostStatus";
import "./newsFeed.css";

const NewsFeed = () => {
  return (
    <div className="newsFeed">
      <div className="newsFeedWrapper">
        <PostStatus></PostStatus>
        <Posts></Posts>
        <Posts></Posts>
        <Posts></Posts>
        <Posts></Posts>
      </div>
    </div>
  );
};

export default NewsFeed;
