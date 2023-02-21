// import { InstagramEmbed } from 'react-social-media-embed';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

export default function SocialMedia() {
  return (
    <Container fluid>
      <h1>What's Happenin'</h1>
      <Row className="d-flex justify-content-center">
        <Card style={{ width: '50%', height: '75%', }} className="shadow mx-auto">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="caught_steelin"
              options={{height: 400}}
            />
          </div>
        </Card>
      </Row>
      {/* <Row className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '50%', height: '75%' }} className="shadow mx-auto">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CnFtOjWPIk-/" width={600} />
          </div>
        </Card>
      </Row> */}
      <Row className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '50%', height: '75%' }} className="shadow mx-auto">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <TwitterFollowButton
            screenName={'caught_steelin'}
            />
          </div>
        </Card>
      </Row>
    </Container>
  );
}
