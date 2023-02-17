import Card from 'react-bootstrap/Card';

export default function PhotoOfBand() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card className="shadow d-flex flex-column align-items-center" style={{width: "75%", color: 'white'}}>
        <Card.Img src="../src/assets/Photo1.jpeg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{fontSize: "8rem", textAlign: "center", justifyContent: "center", alignItems: "center"}}>Caught Steelin'</Card.Title>
          <Card.Text style={{fontFamily: "Baseball", fontSize: "2rem", position: 'absolute', bottom: 0, left: 0, color: 'white'}}>
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
