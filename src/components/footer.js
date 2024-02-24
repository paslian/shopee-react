import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar className="bg-body-secondary">
      <Container>
        <Navbar.Brand style={{ fontSize: "14px" }}>
          © Paslian Sahat Rafael
        </Navbar.Brand>
        <Navbar.Brand style={{ fontSize: "14px" }}>
          Negara: Indonesia
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Footer;
