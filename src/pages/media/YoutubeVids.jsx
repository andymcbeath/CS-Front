import React from 'react';
import { YouTubeEmbed } from 'react-social-media-embed';

export default function YoutubeVids() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <YouTubeEmbed url="https://www.youtube.com/watch?v=S5vXaIzwCQ8" width={"75%"} height={1100}/>
      </div>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <YouTubeEmbed url="https://www.youtube.com/watch?v=dOyEhaNnqZ8" width={"75%"} height={1100}/>
      </div>
    </div>
  );
}
