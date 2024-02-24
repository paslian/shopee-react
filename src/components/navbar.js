import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Brand from "./../assets/brand-shopee.png";

const Navigation = () => {
  return (
    <Navbar sticky="top" className="border bg-body">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img alt="" src={Brand} className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="https://www.linkedin.com/in/paslian-sahat-rafael-417361244/">
              Pizsahat
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
