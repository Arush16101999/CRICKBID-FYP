import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbarCustom.css";

function MainNavbar() {
  

  function pageRedirect(redirect: string) {

    if (redirect === "home") {
      window.location.href = "/";
    } else if (redirect === "rec") {
      window.location.href = "/Rec";
    } else if (redirect === "stat") {
      window.location.href = "/Stat";
    } 
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="custom-navbar"
      >
        <Container fluid className="p-4">
          <Navbar.Brand href="#home">
            <img
              src="src/assets/logo.svg"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => pageRedirect("home")} className="me-0">
                Home
              </Nav.Link>
              
              <Nav.Link onClick={() => pageRedirect("rec")}>
                Recommendation
              </Nav.Link>
              <Nav.Link onClick={() => pageRedirect("stat")} className="ms-0">
                Statistics
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
