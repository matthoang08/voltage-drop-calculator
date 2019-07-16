import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import From from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';

export const VoltageDropCalculator: React.FunctionComponent = () => {
  return (
    <div>
      <Container className="justify-content-md-center">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>Col2</Col>
        </Row>
        <Row>
          <Form>
            <Form.Group controlId="formWireType">
              <Form.Label>Wire Type</Form.Label>
              <Form.Control as="select">
                <option>Copper</option>
                <option>Aluminum</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPhaseType">
              <Form.Label>Phase Type</Form.Label>
              <Form.Check type="radio" id="phase-check" label="Single-Phase" />
              <Form.Check type="radio" id="phase-check" label="Three-Phase" />
            </Form.Group>
            <Button variant="primary" type="submit">Calculate</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};
