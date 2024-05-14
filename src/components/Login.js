import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Lakukan validasi login
    if (username === 'admin' && password === 'password') {
      alert('Login berhasil!');
      // Redirect ke halaman baru setelah login berhasil
      navigate('/');
    } else {
      alert('Login gagal. Silakan coba lagi.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-white">LOGIN</h1>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername">
              <Form.Label className="text-white">Username:</Form.Label>
              <Form.Control type="text" name="username" required />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-white">Password:</Form.Label>
              <Form.Control className="mb-2" type="password" name="password" required />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
