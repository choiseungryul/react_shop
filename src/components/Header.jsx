import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return(
    <Navbar  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=> navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate(-1)}>뒤로가기</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link onClick={() => navigate('/test')}>테스트</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header;