import React from 'react';
import '../css/About.css';
import { youtubelink } from '../Redirect handler/youtube_redirect';
import { discordlink } from '../Redirect handler/discord_redirect';

function About() {
  return (
    <div>
      <footer className="footer">
        <p>Check for further updates on: <span style={{color:'red'}} onClick={youtubelink}>YouTube</span> / <span style={{color:'blue'}} onClick={discordlink}>Discord</span></p>
      </footer>
    </div>
  );
}

export default About;