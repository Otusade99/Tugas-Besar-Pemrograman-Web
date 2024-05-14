import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">FILM KITO</Navbar.Brand>
          <Nav>
            <Nav.Link href="/semualist">SEMUA</Nav.Link>
            <Nav.Link href="/trending">TRENDING</Nav.Link>
            <Nav.Link href="/superhero">SUPERHERO</Nav.Link>
            <Nav.Link href="/login">LOGIN</Nav.Link>
            <Nav.Link href="/register">REGISTER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar