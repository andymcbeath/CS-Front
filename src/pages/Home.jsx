import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../fonts/Bulletto-Killa.ttf";
import PhotoOfBand from "../components/photo-of-band";
import ReactPlayer from 'react-player'
import Card from "react-bootstrap/Card"
import Bio from "../pages/media/Bio"


export default function Home() {
  return (
    <Container fluid>
      <Row className="Title">
        <h1>A Steel Band for Baseball Fans</h1>
      </Row>
      <Row className="py-4">
        <PhotoOfBand />
      </Row>
      <Row className="py-4 Soundcloud justify-content-center">
        <Bio />
      </Row>
      <Row className="py-4 Soundcloud justify-content-center">
        <Card className="shadow d-flex flex-column align-items-center" style={{width: "75%", height: "150vh"}}>
          <ReactPlayer url="https://soundcloud.com/user-689447295-942243342?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width="100%" height="100%"/>
        </Card>
      </Row>
    </Container>
  );
}