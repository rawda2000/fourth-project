import { Container, Row, Col } from "react-bootstrap";
import logo from '../Images/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer p-5">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={4} sm={6}>
            <img src={logo} alt="Logo" width={60} height={70}/>
          </Col>
          <Col size={12} md={4} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href='#'><FaLinkedinIn className='imgicon'/> </a>
                <a href='#'><FaFacebookF className='imgicon'/> </a>
                <a href='#'><FaInstagram className='imgicon'/> </a>
            </div>
          </Col>
          <Col size={12} md={4} sm={6}>
            <p className="text-light">copy right &copy;2023 all reseved by rawda elsayed ahmed</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;