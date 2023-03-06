import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import projectImg1 from '../assets/images/project-img1.png';
// import 'animate.css';
import enote from '../assets/images/IMG_0207.png';
import TrackVisibility from 'react-on-screen';
import '../assets/css/Project.css'

export default function Projects() {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projectImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <div class="wrapper">
          <a className="box-1 box-hover" href="https://github.com/Nico-T-Ihle/Enote" >
            <div >
              <img className="enote" src={enote} />
            </div>
          </a>

          <div class="box-2 box-hover">Coming Soon</div>
          <div class="box-3 box-hover">Coming Soon</div>
          <div class="box-4 box-hover">Coming Soon</div>
          <div class="box-5 box-hover">Coming Soon</div>
          <div class="box-6 box-hover">Coming Soon</div>
        </div>
        {/* <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row> */}
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
