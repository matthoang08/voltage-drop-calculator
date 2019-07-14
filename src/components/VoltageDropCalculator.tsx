import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
          <Col>Col3</Col>
          <Col>Col4</Col>
        </Row>
      </Container>
    </div>
  );
};
