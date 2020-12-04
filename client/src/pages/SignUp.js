import { React, setValue, useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userId, setUserId] = useState();
  const [email, setEmail] = useState();
  const [characterName, setCharacterName] = useState();

  console.log(email);

  return (
    <>
      <Card className="container">
        <Card.Body>
          <h2 className="text-center">Sign Up</h2>
          <Form>
            <Form>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={0}>
                  Email
                </Form.Label>

                <Col sm={10}>
                  <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={0}>
                  Character Name
                </Form.Label>

                <Col sm={10}>
                  <Form.Control
                    type="characterName"
                    placeholder="Character Name"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPassword">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>

                <Col sm={10}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  {/* <Link to="/profile"> */}
                    <Button onClick={() => console.log(email)}type="submit">Sign in</Button>
                  {/* </Link> */}
                </Col>
              </Form.Group>
            </Form>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center label">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </>
  );
};

export default SignUp;
