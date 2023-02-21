import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../fonts/Bulletto-Killa.ttf";
import PhotoOfBand from "../components/photo-of-band";
import ReactPlayer from 'react-player'
import Card from "react-bootstrap/Card"
import { YouTubeEmbed } from 'react-social-media-embed';


export default function Home() {
  return (
    <Container fluid justifyContent="center" style={{ width: "75%", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Row className="Logo-title">
        <img src="/assets/logo.png" alt="Caught-Steelin-Logo" />
      </Row>
      <Row className="Title">
        <h1>A Steel Band of Baseball Fans</h1>
      </Row>
      <Row className="py-4">
        <PhotoOfBand />
      </Row>
      <Card className="shadow d-flex flex-column align-items-center" style={{ marginTop: "1rem"}}>
        <YouTubeEmbed url="https://www.youtube.com/watch?v=dOyEhaNnqZ8" width={"100%"} height={1100}/>
      </Card>
      <Card className="shadow d-flex flex-column align-items-center" style={{ marginTop: "3rem"}}>
        <YouTubeEmbed url="https://www.youtube.com/watch?v=S5vXaIzwCQ8" width={"110%"} height={1100}/>
      </Card>
      <Card className="shadow d-flex flex-column align-items-center" style={{ marginTop: "3rem"}}>
        <ReactPlayer url="https://soundcloud.com/user-689447295-942243342/sets/caught-steelin-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" width={"100%"} height={1600}/>
      </Card>
    </Container>

  );
}