import { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Fragment>
      <div>
        <h2>Login</h2>
        <p>Login to get started</p>
      </div>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Email" type="email"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Password" type="password"></Form.Control>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </Fragment>
  );
};

export default Login;
