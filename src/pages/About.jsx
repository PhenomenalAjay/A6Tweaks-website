import React from 'react';
import '../css/About.css';
import { youtubelink } from '../Redirect handler/youtube_redirect';
import { discordlink } from '../Redirect handler/discord_redirect';

function About() {
  return (
    <div>
      <footer className="footer">
        <p>Support me on  <span onClick={youtubelink}>YouTube</span> and i request you to put feedbacks on comments / Join <span onClick={discordlink}>Discord</span> for futhur updates</p>
      </footer>
    </div>
  );
}

export default About;