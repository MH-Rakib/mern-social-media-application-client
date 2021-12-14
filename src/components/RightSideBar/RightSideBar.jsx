import React from "react";
import "./rightSideBar.css";
import { Row, Col } from "react-bootstrap";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HouseIcon from "@material-ui/icons/House";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import birthdatImage from "../../assets/gift.png";
import sponsoredImage from "../../assets/ad.png";
import userImage11 from "../../assets/person/11.jpg";
import userImage101 from "../../assets/person/101.jpg";
import userImage12 from "../../assets/person/12.jpg";
import userImage13 from "../../assets/person/13.jpg";
import userImage14 from "../../assets/person/14.jpg";
import { Link } from "react-router-dom";

const RightSideBar = ({ profile }) => {
  return (
    <div className="rightBarWrapper">
      <div className="aboutUser">
        <p className="aboutUserheader">Intro</p>

        <div className="informations d-flex align-items-center">
          <HouseIcon className="informationsIcon" />
          <span>Lives In: Mohammodpur</span>
        </div>
        <div className="informations d-flex align-items-center">
          <LocationOnIcon className="informationsIcon" />
          <span>City: Dhaka,Bangladesh</span>
        </div>
        <div className="informations d-flex align-items-center">
          <RssFeedIcon className="informationsIcon" />
          <span>Followed By: 499 Peoples</span>
        </div>
        <div className="informations d-flex align-items-center">
          <FavoriteIcon className="informationsIcon" />
          <span>Relationship Status: Single</span>
        </div>
      </div>
      <hr />
      <div className="allFriendslist">
        <p className="friendslistHeader">Followers</p>
        <Row>
          <Col sm={4} className="friendsContainer">
            <div className="friends">
              <img src={userImage11} className="img-fluid  w-100" alt="" />
            </div>
          </Col>
          <Col sm={4} className="friendsContainer">
            <div className="friends">
              <img src={userImage101} className="img-fluid  w-100" alt="" />
            </div>
          </Col>
          <Col sm={4} className="friendsContainer">
            <div className="friends">
              <img src={userImage12} className="img-fluid  w-100" alt="" />
            </div>
          </Col>
          <Col sm={4} className="friendsContainer">
            <div className="friends">
              <img src={userImage13} className="img-fluid  w-100" alt="" />
            </div>
          </Col>
          <Col sm={4} className="friendsContainer">
            <div className="friends">
              <img src={userImage14} className="img-fluid  w-100" alt="" />
            </div>
          </Col>
          <Col sm={4} className="friendsContainer">
            <div className="friends">
              <img src={userImage11} className="img-fluid  w-100" alt="" />
            </div>
          </Col>
        </Row>
      </div>
      <hr />

      <div className="birthdayUpdate d-flex align-items-center mb-3">
        <img className="image img-fluid" src={birthdatImage} alt="" />
        <p className="text">
          <span className="person">Mehedi Hasan </span>
          And
          <span className="person"> 3 Other Friends </span>
          Have a Birthday Today!
        </p>
      </div>
      {!profile && (
        <>
          {" "}
          <hr />
          <p className="sponsoredHeading">Sponsored!</p>
          <div className="sponsored">
            <img src={sponsoredImage} className="w-100 img-fluid" alt="" />
          </div>{" "}
        </>
      )}

      <hr />
      {profile && (
        <>
          <p className="contactsHeading">Conversations</p>
          <Link to={"/profile/username"} style={{ textDecoration: "none" }}>
            <div className="allContacts d-flex align-items-center mb-4">
              <img className="image img-fluid" src={userImage11} alt="" />
              <p className="contactName">Mahmudul Hasan</p>
            </div>
          </Link>
          <Link to={"/profile/username"} style={{ textDecoration: "none" }}>
            <div className="allContacts d-flex align-items-center mb-4">
              <img className="image img-fluid" src={userImage101} alt="" />
              <p className="contactName">Mehedi Hasan</p>
            </div>
          </Link>
          <Link to={"/profile/username"} style={{ textDecoration: "none" }}>
            <div className="allContacts d-flex align-items-center mb-4">
              <img className="image img-fluid" src={userImage12} alt="" />
              <p className="contactName">Ibrahim Abdullah</p>
            </div>
          </Link>
          <Link to={"/profile/username"} style={{ textDecoration: "none" }}>
            <div className="allContacts d-flex align-items-center mb-4">
              <img className="image img-fluid" src={userImage13} alt="" />
              <p className="contactName">Moinul Hasan</p>
            </div>
          </Link>
          <Link to={"/profile/username"} style={{ textDecoration: "none" }}>
            <div className="allContacts d-flex align-items-center mb-4">
              <img className="image img-fluid" src={userImage14} alt="" />
              <p className="contactName">Borhan Uj Jamil</p>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default RightSideBar;
