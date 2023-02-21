import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../fonts/Bulletto-Killa.ttf";
import PhotoOfBand from "../components/photo-of-band";
import ReactPlayer from 'react-player';
import Card from "react-bootstrap/Card";
import YoutubeVids from './YoutubeVids';

export default function Home() {
  return (
    <Container fluid style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row className="d-flex justify-content-center">
        <img src="/assets/logo.png" alt="Caught-Steelin-Logo" width= "auto" height="auto"/>
      </Row>
      <Row className="Title">
        <h1>A Steel Band of Baseball Fans</h1>
      </Row>
      <Row className="py-4">
        <PhotoOfBand />
      </Row>
      <Row className="d-flex justify-content-center">
        <Card className="shadow" style={{ width: '800px', height: '450px' }}>
          <ReactPlayer url="https://soundcloud.com/user-689447295-942243342/sets/caught-steelin-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width={800} height={450} />
        </Card>
      </Row>
    </Container>
  );
}

