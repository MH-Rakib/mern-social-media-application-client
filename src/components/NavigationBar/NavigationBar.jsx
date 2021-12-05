import React from "react";
import "./NavigationBar.css";
import profileImage from "../../assets/person/1.jpeg";
import { Col, Container, Row } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const NavigationBar = () => {
  return (
    <div className="navabrContainer">
      {/* <Container> */}
      <Row className="d-flex align-items-center">
        <Col sm={3}>
          <div className="brandLogo text-left">
            <h2>Social App</h2>
          </div>
        </Col>
        <Col sm={5}>
          <div className="search text-left">
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Search friends" />
          </div>
        </Col>
        <Col sm={4}>
          <div className="navbarRightSide d-flex align-items-center justify-content-around">
            <div className="">
              <p style={{ margin: "0px", color: "#fff", fontSize: "18px" }}>
                Timeline
              </p>
            </div>
            <div className="">
              <div className="navbarIcons">
                <PersonIcon className="icon" />
                <div className="notificationNumber">
                  <span>1</span>
                </div>
              </div>
              <div className="navbarIcons">
                <MessageIcon className="icon" />
                <div className="notificationNumber">
                  <span>12</span>
                </div>
              </div>
              <div className="navbarIcons">
                <NotificationsActiveIcon className="icon" />
                <div className="notificationNumber">
                  <span>6</span>
                </div>
              </div>
            </div>
            <div className="userProfile">
              <span>Dua Lipa</span>
              <img
                src={profileImage}
                className="profileImage"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default NavigationBar;
