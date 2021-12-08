import React from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import userImage from "../../assets/person/1.jpeg";
import "./postStatus.css";

const PostStatus = () => {
  return (
    <div className="postStatusWrapper">
      <div className="postStatusTop d-flex align-items-center">
        <img src={userImage} className="postStatusUserImage img-fluid" alt="" />
        <input
          className="postStatusInput"
          type="text"
          placeholder="Whats On Your Mind..?"
        />
      </div>
      <hr />
      <div className="postStatusBottom d-flex align-items-center justify-content-around">
        <div className="photoOrVideo d-flex align-items-center">
          <FileCopyIcon style={{ marginRight: "10px", color: "#33b5e5" }} />
          <p style={{ margin: "0" }}>Photo Or Video</p>
        </div>
        <div className="photoOrVideo d-flex align-items-center">
          <LocalOfferIcon style={{ marginRight: "10px", color: "#aa66cc" }} />
          <p style={{ margin: "0" }}>Tag Others</p>
        </div>
        <div className="photoOrVideo d-flex align-items-center">
          <SentimentVerySatisfiedIcon
            style={{ marginRight: "10px", color: "#2BBBAD" }}
          />
          <p style={{ margin: "0" }}>Feeling/Activity</p>
        </div>
      </div>
      <div className="postStatusButton">
        <button>Post</button>
      </div>
    </div>
  );
};

export default PostStatus;
