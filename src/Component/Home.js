import React from "react";
import mainimg from "../Images/logo.png"
import TypeWriter from "./TypeWriter";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Container, Row, Col, Nav } from "react-bootstrap";


const Home = ()=>{
    return(
        <section className="main" id="home">
            <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                    <div className="data">
                        <div className="data-div">
                        <div className="data-div1">
                            <p className="tagline">welcome all in my portfolio</p>
                        </div>
                        <div className="data-div2 my-5 p-auto">
                            <h1>hi! i’m rawda elsayed ahmed &hearts;</h1> <h2>{<TypeWriter />}</h2>
                        </div>
                        </div>
                        <div className="data-div3">
                            <p className="mb-5">hello everyone ,I have 2 years of experience in graphics design and web development.
                                Currently, I love to work on web application using technologies like
                                javascript, bootstrap and React.</p>
                            <div className="mb-3 d-flex"><span>let’s connect </span>
                            <Nav.Link href="#connect" className="mx-2 text-light"> <FaArrowAltCircleRight/></Nav.Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <div className="img">
                        <img src={mainimg} alt="" className="mainimg"/>
                    </div> 
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;
