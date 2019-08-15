import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const VoltageDropCalculator: React.FunctionComponent = () => {
  return (
    <div>
      <Container className="justify-content-md-center">
        <Form>
          <Row>
            <Form.Group as={Col} controlId="formWireType">
              <Form.Label>Wire Type</Form.Label>
              <Form.Control as="select">
                <option>Copper</option>
                <option>Aluminum</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formPhaseType">
              <Form.Label>Phase Type</Form.Label>
              <Form.Check type="radio" id="phase-check" label="Single-Phase" />
              <Form.Check type="radio" id="phase-check" label="Three-Phase" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Calculate
            </Button>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
