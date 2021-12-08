import React from "react";
import coverPhoto from "../../assets/post/1.jpeg";
import profilePhoto from "../../assets/person/1.jpeg";
import { Col, Row } from "react-bootstrap";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <div className="bodyContentWrapper">
        <NavigationBar></NavigationBar>
        <div className="mx-sm-5">
          <Row>
            <Col sm={3}>
              <LeftSideBar></LeftSideBar>
            </Col>
            <Col sm={9}>
              <div className="profileSection">
                <Row>
                  <Col sm={12} className="mx-auto">
                    <div>
                      <div className="coverPhoto">
                        <img src={coverPhoto} className=" img-fluid" alt="" />
                      </div>
                      <div className="profilePhoto">
                        <img src={profilePhoto} className=" img-fluid" alt="" />
                        <p className="userName">Dua Lipa</p>
                        <p className="userBio">I Am Papa Ki Pari!</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={8}>
                    <NewsFeed></NewsFeed>
                  </Col>
                  <Col sm={4}>
                    <RightSideBar profile={true}></RightSideBar>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Profile;
