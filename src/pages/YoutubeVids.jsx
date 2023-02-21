import React from 'react';
import { YouTubeEmbed } from 'react-social-media-embed';
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";

export default function YoutubeVids() {
  return (
   <Container fluid justifyContent="center" style={{ width: "75%", paddingTop: "3rem", paddingBottom: "3rem" }}>
      <Card className="shadow d-flex flex-column align-items-center">
        <YouTubeEmbed url="https://www.youtube.com/watch?v=S5vXaIzwCQ8" width={"100%"} height={800}/>
      </Card>
      <Card className="shadow d-flex flex-column align-items-center" style={{ marginTop: "3rem"}}>
        <YouTubeEmbed url="https://www.youtube.com/watch?v=dOyEhaNnqZ8" width={"100%"} height={800}/>
      </Card>
    </Container>
  );
}
