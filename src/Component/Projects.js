import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import img1 from "../Images/1 (1).png"
import img2 from "../Images/1 (2).png"
import FirstSection from "./FirstSection";
import Connect from "./Connect";
import ThirdSection from "./ThirdSection";


const Projects = () => {
    const projects = [
        {
          title: " information gallery",
          description: "pharaohs",
          imgUrl: img1,
        },
        {
          title: " information gallery",
          description: "pharaohs",
          imgUrl: img1,
        },
        {
          title: " information gallery",
          description: "pharaohs",
          imgUrl: img1,
        },
        {
          title: "e-commerce website",
          description: "gifts & decors",
          imgUrl: img2,
        },
        {
          title: "e-commerce website",
          description: "gifts & decors",
          imgUrl: img2,
        },
        {
          title: "e-commerce website",
          description: "gifts & decors",
          imgUrl: img2,
        },
      ];
                
  return (
    <section  className="project" id="projects">
      <Container>
        <Row>
           <Col size={12}>
          <h2 className="mb-5">my projects</h2>
      
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Nav variant="pills" className="flex-row">
                  <Nav.Item>
                    <Nav.Link eventKey="first" >1st section</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">2nd section</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">3rd section</Nav.Link>
                  </Nav.Item>
                </Nav>
            </Row>
            <Row className="pt-5">
              <Tab.Content>
                  <Tab.Pane eventKey="first">
                  <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <FirstSection
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second"><Connect /></Tab.Pane>
                  <Tab.Pane eventKey="third"><ThirdSection /></Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </Col>       
        </Row>
      </Container>
    </section>
      );
}

export default Projects;