const { TwitterEmbed } = require('react-social-media-embed');
const Container = require("react-bootstrap/Container");
const { InstagramEmbed } = require('react-social-media-embed');
const Row = require("react-bootstrap/Row");
const Card = require('react-bootstrap/Card');

export default function SocialMedia() {
  return (
    <Container fluid>
      <h1>What's Happenin'</h1>
      <Row className="d-flex justify-content-center">
        <Card style={{ width: '50%', height: '75%', }} className="shadow mx-auto">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <TwitterEmbed url="https://twitter.com/caught_steelin/status/1625233270483853329" width={600}/>
          </div>
        </Card>
        <Card style={{ width: '50%', height: '75%',}} className="shadow mx-auto">
          <div style={{ display: 'flex', justifyContent: 'center',  alignItems: 'center', height: '100%' }}>
            <TwitterEmbed url="https://twitter.com/caught_steelin/status/1585717238476046336" width={600} />
          </div>
        </Card>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '50%', height: '75%' }} className="shadow mx-auto">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CnFtOjWPIk-/" width={600} />
          </div>
        </Card>
      </Row>
    </Container>
  );
}

