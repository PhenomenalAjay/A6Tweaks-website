import React from 'react';
import '../css/About.css';
import { youtubelink } from '../Redirect handler/youtube_redirect';
import { discordlink } from '../Redirect handler/discord_redirect';

function About() {
  return (
    <div>
      <footer className="footer">
        <p>Check video on  <span onClick={youtubelink}>YouTube</span> and put feedbacks on comments / Join <span onClick={discordlink}>Discord</span> for futhur updates</p>
      </footer>
    </div>
  );
}

export default About;