import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div>
      <div className="bodyContentWrapper">
        <NavigationBar></NavigationBar>
        <Row>
          <Col sm={3}>
            <div>
              <LeftSideBar></LeftSideBar>
            </div>
          </Col>
          <Col sm={5}>
            <div>
              <NewsFeed></NewsFeed>
            </div>
          </Col>
          <Col sm={4}>
            <div>
              <RightSideBar></RightSideBar>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
