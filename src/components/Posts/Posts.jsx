import React, { useState } from "react";
import "./posts.css";
import userImage from "../../assets/person/1.jpeg";
import postImage from "../../assets/post/7.jpeg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InsertCommentIcon from "@material-ui/icons/InsertComment";

const Posts = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="postsWrapper">
      <div className="postsTop d-flex align-items-center justify-content-between">
        <div className="left d-flex align-items-center">
          <img src={userImage} className="userImage img-fluid" alt="" />
          <span className="username">Dua Lipa</span>
        </div>
        <div className="right d-flex align-items-center">
          <span className="time">Posted 13 minutes ago</span>
          <div className="icon">
            <MoreVertIcon />
          </div>
        </div>
      </div>

      <div className="postText mt-4">
        <p>This is my First Post..... :)</p>
      </div>
      <div className="postImage mt-3">
        <img src={postImage} className="img-fluid" alt="" />
      </div>
      <div className="postsBottom mt-3 d-flex align-items-center justify-content-between">
        <div className="left d-flex align-items-center">
          {!liked ? (
            <FavoriteBorderIcon
              className="icon"
              onClick={() => setLiked(!liked)}
            />
          ) : (
            <FavoriteIcon className="icon" onClick={() => setLiked(!liked)} />
          )}
          <span>13 People loved it.</span>
        </div>
        <div className="right d-flex align-items-center">
          <InsertCommentIcon className="icon" />
          <span>5 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
