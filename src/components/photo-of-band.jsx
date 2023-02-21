import Card from "react-bootstrap/Card"

export default function PhotoOfBand() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card className="shadow d-flex flex-column align-items-center" style={{width: 1200, color: "rgb(13, 42, 74)"}}>
        <Card.Img src="/assets/Photo1.jpeg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{textAlign: "center", alignItems: "center", position: "top"}}><img src="/assets/logo.png" width= "48%" height="auto" alt="Caught Steelin" /></Card.Title>
          <Card.Text style={{fontFamily: "Chicago", fontSize: "1.6vw", position: "inherit", bottom: 0, left: 0, color: "white"}}>
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