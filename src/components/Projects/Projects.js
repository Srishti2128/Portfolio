import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DigiDen"
              description="Developed an E-Commerce platform with shopping cart functionality along with payments integration. Integrated with an Admin portal to manage and modify customers, products and orders. Customers can give product
              reviews and up to 5 star ratings. Deployed Bcrypt library to hash and salt passwords before storing in the database to ensure user data privacy."
              ghLink="https://github.com/Srishti2128/DigiDen"
              demoLink="https://digiden.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Krypt"
              description="Krypt is a Real World Web 3.0 React application that is connected to the Blockchain network and implements Web 3.0 concepts by interacting with Smart Contracts, using Solidity and MetaMask Pairing. The main feature of this web application is to send Ethereum to other people by their wallet address across the world through the blockchain network."
              ghLink="https://github.com/Srishti2128/Krypt"
              demoLink="https://krypt28.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Live Share"
              description="Live Share is a real time document editor editing using Web Sockets, NodeJS, ExpressJS, ReactJS, Socket-IO which enables multiple people to work on a particular document at the same time and every user can see people’s changes as they make them where the user can create and edit text documents right in the Web Browser. MongoDB database is used to automatically save the changes made in the document."
              ghLink="https://github.com/Srishti2128/Live-Share"
              demoLink="https://liveshare-a3e99.web.app"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
