import {React} from "react";
import { Col } from "react-bootstrap";


const FirstSection = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} id="firstsection">
        <div className="proj-imgbx">
            <img src={imgUrl} alt=""/>
            <div className="proj-txtx">
                <h4 className="fw-bolder">{title}</h4>
                <span className="fst-italic">{description}</span>
            </div>
        </div>
    </Col>
  )
}
    
export default FirstSection;