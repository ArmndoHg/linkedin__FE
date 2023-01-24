import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProfileDetails } from "./MainContent/ProfileDetails";
import { ProfileSideBar } from "./RightSideBar/ProfileSideBar";

const Profile = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={8}>
          <ProfileDetails />
        </Col>
        <Col xs={12} sm={12} md={4}>
          <ProfileSideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
