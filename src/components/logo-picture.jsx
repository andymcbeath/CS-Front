import Card from 'react-bootstrap/Card';

export default function LogoPicture() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card className="shadow d-flex flex-column align-items-center" style={{width: "75%", color: 'white'}}>
        <Card.Img src="../src/assets/logo-picture.jpeg" alt="Card image" />
      </Card>
    </div>
  );
}