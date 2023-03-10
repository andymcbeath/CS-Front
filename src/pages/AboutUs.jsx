import Bio from "../components/Bio";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PhotoOfBand from "../components/photo-of-band";
import Card from "react-bootstrap/Card"


export default function AboutUs() {
  return (
    <div className="container">
      <Card className="shadow d-flex flex-column align-items-center" style={{ marginTop: "1rem"}}>
        <Bio />
      </Card>
      <Row className="Logo-title" style={{ marginTop: "1rem"}}>
          <PhotoOfBand />
      </Row>
      <Row className="Logo-title" style={{ marginTop: "1rem"}}>
        <img src="/assets/logo-picture.png" alt="Caught-Steelin-Logo" style={{ width: "50%", height: "auto",  margin: "0 auto" }} />
      </Row>
    </div>
  );
}
