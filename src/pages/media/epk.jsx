import Bio from "./Bio";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function EPK() {
  return (
    <div className="container">
      <Row>
        <Col>
          <h1 className="text-center">About Us</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 22, offset: 2 }} md={{ span: 18, offset: 2 }} lg={{ span: 14, offset: 2 }}>
          <Bio />
        </Col>
      </Row>
    </div>
  );
}
