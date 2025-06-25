import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Annasetu from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import WalletTracker from "../../Assets/Projects/Wallet.png";
import SNR from "../../Assets/Projects/SNRjewels.png";
import suicide from "../../Assets/Projects/suicide.png";
import SchoolMonitor from "../../Assets/Projects/blog.png";

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
              imgPath={SNR}
              isBlog={false}
              title="SNR Jewels"
              description="Developed a modern jewelry e-commerce platform using React.js, Tailwind CSS, and MongoDB.
Implemented dynamic product filtering, real-time cart updates, and a secure checkout system.
Designed RESTful APIs and ensured responsive, cross-device user experience."
              ghLink="https://github.com/prashantklp/Modern_Ecomm"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SchoolMonitor}
              isBlog={false}
              title="SchoolMonitor"
              description="Developed SchoolMonitor, a full-stack school management system to streamline attendance, grading, and communication.
Led the frontend using React.js, Redux, and Material UI, and built secure APIs with Node.js, Express, and MongoDB.
Overcame complex user role challenges and delivered a responsive, role-based platform that improved school operations.

"
              ghLink="https://github.com/prashantklp/School_monitor"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WalletTracker}
              isBlog={false}
              title="WalletTracker"
              description="Built WalletTracker, a personal finance management tool to track income and expenses with real-time data visualization.
Designed an intuitive UI with React and Chart.js, and developed RESTful APIs using Node.js, Express, and MongoDB.
Enabled users to manage their cash flow efficiently, overcoming challenges in date filtering and dynamic chart rendering."
              ghLink="https://github.com/prashantklp/WalletTracker"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Annasetu}
              isBlog={false}
              title="ANNASETU"
              description="ANNASETU is a Food Donation Management System designed to facilitate the collection and distribution of surplus food to those in need. Our goal is to minimize food waste and help feed the hungry by connecting donors with food banks and shelters."
              ghLink="https://github.com/prashantklp/ANNASETU"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}
         {/* { 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> } */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
