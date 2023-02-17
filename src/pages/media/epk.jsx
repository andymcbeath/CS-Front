import Bio from "./Bio";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function EPK() {
  return (
    <div className="container">
      <Row className="my-5">
        <Col>
          {/* <h1 className="text-center">About Us</h1> */}
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card className="shadow mb-5">
            <Card.Body>
              <Bio />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
