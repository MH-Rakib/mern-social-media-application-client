import React, { useState } from "react";
import "./leftSideBar.css";
import profileImage from "../../assets/person/1.jpeg";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import StorefrontIcon from "@material-ui/icons/Storefront";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ExploreIcon from "@material-ui/icons/Explore";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import PostAddIcon from "@material-ui/icons/PostAdd";

const LeftSideBar = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="leftSideBar px-md-3 py-md-3">
      <div className="leftSidebarUser d-flex align-items-center mb-3">
        <img src={profileImage} className="sidebarUserImage" alt="" srcset="" />
        <span>Dua Lipa</span>
      </div>
      <hr style={{ background: "#ebebeb" }} />
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <PeopleAltIcon className="leftSidebarIcons" />
        <span>Your Friends</span>
      </div>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <GroupWorkIcon className="leftSidebarIcons" />
        <span>Your Groups</span>
      </div>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <EventAvailableIcon className="leftSidebarIcons" />
        <span>Upcoming Events</span>
      </div>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <LocalHospitalIcon className="leftSidebarIcons" />
        <span>Covid 19 information's</span>
      </div>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <LiveTvIcon className="leftSidebarIcons" />
        <span>Facebook Watch</span>
      </div>
      {showMore && (
        <>
          <div className="leftSidebarOptions d-flex align-items-center my-3">
            <StorefrontIcon className="leftSidebarIcons" />
            <span>The Marketplace</span>
          </div>
          <div className="leftSidebarOptions d-flex align-items-center my-3">
            <EqualizerIcon className="leftSidebarIcons" />
            <span>Ads Manager</span>
          </div>
          <div className="leftSidebarOptions d-flex align-items-center my-3">
            <ExploreIcon className="leftSidebarIcons" />
            <span>Explore</span>
          </div>{" "}
        </>
      )}
      <div
        className="leftSidebarOptions d-flex align-items-center my-3"
        onClick={handleShowMore}
        style={{ background: "var(--blue)", color: "#fff" }}
      >
        {!showMore ? (
          <KeyboardArrowDownIcon className="leftSidebarIcons" />
        ) : (
          <KeyboardArrowUpIcon className="leftSidebarIcons" />
        )}
        <span>Show {showMore ? "Less" : "More"}</span>
      </div>
      <hr style={{ background: "#ebebeb" }} />
      <p style={{ fontSize: "18px" }}>Your Shortcuts</p>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <AssignmentIndIcon className="leftSidebarIcons" />
        <span>We Are Developers</span>
      </div>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <CodeIcon className="leftSidebarIcons" />
        <span>Programming Community</span>
      </div>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <WorkIcon className="leftSidebarIcons" />
        <span>CSE/EEE Jobs In BD</span>
      </div>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <PostAddIcon className="leftSidebarIcons" />
        <span>Your Page</span>
      </div>
      <div className="leftSidebarOptions d-flex align-items-center my-3">
        <LiveTvIcon className="leftSidebarIcons" />
        <span>Movie Lover Community</span>
      </div>
    </div>
  );
};

export default LeftSideBar;
