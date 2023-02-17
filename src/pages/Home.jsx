import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YouTubeEmbed from './media/YouTubeVids';
import "../fonts/Bulletto-Killa.ttf";
import PhotoOfBand from "../components/photo-of-band"


export default function Home() {
  return (
    <Container fluid>
      <Row className="Title">
        <h1>A Steel Band for Baseball Fans</h1>
      </Row>
      <Row>
        <PhotoOfBand />
      </Row>
      <Row className="Video">
        <Col>
          <YouTubeEmbed embedId="dOyEhaNnqZ8"/>
        </Col>
      </Row>
     
    </Container>
  );
}