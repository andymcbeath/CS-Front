import React from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Container from "react-bootstrap/Container";

export default function YoutubeVids() {
  const videoWidth = 800;
  const videoHeight = (9 / 16) * videoWidth; // assuming 16:9 aspect ratio

  return (
    <Container fluid alignContent="center" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <iframe
          width={videoWidth}
          height={videoHeight}
          src="https://www.youtube.com/embed/dOyEhaNnqZ8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ marginBottom: "1rem" }}
        ></iframe>
        <iframe
          width={videoWidth}
          height={videoHeight}
          src="https://www.youtube.com/embed/S5vXaIzwCQ8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ marginBottom: "1rem" }}
        ></iframe>
      </div>
    </Container>
  );
}
