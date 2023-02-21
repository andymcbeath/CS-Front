import Card from "react-bootstrap/Card"

export default function PhotoOfBand() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card className="shadow d-flex flex-column align-items-center" style={{width: 1200, color: "rgb(13, 42, 74)"}}>
        <Card.Img src="/assets/Photo1.jpeg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{fontSize: "5vw", textAlign: "center", alignItems: "center", position: "top"}}>Caught Steelin'</Card.Title>
          <Card.Text style={{fontFamily: "Gil Sans MT", fontSize: "1.5vw", position: "inherit", bottom: 0, left: 0, color: "rgb(248, 249, 250)"}}>
            Caught Steelin' is:
            <br />
            Tim Berg - Lead
            <br />
            Robbie McBeath - Double Seconds
            <br />
            Andy McBeath - Keyboards 
            <br />
            Erik Opland - Bass 
            <br />
            Justin Peters - Drum Set
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}