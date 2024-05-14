import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    // Lakukan validasi sign up
    if (username && email && password) {
      // Proses sign up berhasil
      alert('Sign up berhasil!');
      // Redirect ke halaman login setelah sign up berhasil
      navigate('/login');
    } else {
      alert('Harap lengkapi semua kolom untuk sign up.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-white">SIGN UP</h1>
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formUsername">
              <Form.Label className="text-white">Username:</Form.Label>
              <Form.Control type="text" name="username" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-white">Email:</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-white">Password:</Form.Label>
              <Form.Control className="mb-2" type="password" name="password" required />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
