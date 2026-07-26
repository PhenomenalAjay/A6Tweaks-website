import logo from '/A6Tweaks.png';
import '../css/App.css';
import { youtubelink } from '../Redirect handler/youtube_redirect';
import { discordlink } from '../Redirect handler/discord_redirect';
import Download from '../pages/Download.jsx';
import About from '../pages/About.jsx';

function App() {
    const handleDownload = () => {
        // Create popup container
        const popup = document.createElement('div');
        popup.className = 'popup-overlay';

        // Create popup content
        const popupContent = document.createElement('div');
        popupContent.className = 'popup-content';

        // Create message
        const message = document.createElement('p');
        message.textContent = 'Coming Soon';
        message.className = 'popup-message';

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.className = 'popup-close';
        closeButton.onclick = function() {
            document.body.removeChild(popup);
        };

        // Append elements
        popupContent.appendChild(message);
        popupContent.appendChild(closeButton);
        popup.appendChild(popupContent);

        // Append to body
        document.body.appendChild(popup);
    };

  return (
    <>
      <div>
        <nav>
          <div className="nav-left">
            <img src={logo} alt="Logo" className="logo" />
            <h2>A6Tweaks</h2>
          </div>
          <div className="nav-right">
            <Download />
          </div>
        </nav>
      </div>
      <div className="app-content">
        <div className="hero">
          <p><strong>Windows PC Optimization Tool</strong></p>
          <p><em>Boost performance, clean up clutter, and tweak your system — all from one desktop app.</em></p>
          <p><b>Windows 10</b> &nbsp;|&nbsp; <b>Windows 11</b></p>
        </div>

        <hr />

        <div className="section">
          <h2>Overview</h2>
          <p>A6Tweaks is an desktop application that helps you optimize Windows PCs for better performance. It offers a clean, user-friendly interface to apply system tweaks, delete temporary files, manage power settings, disable background services, and much more.</p>
          <p>The app works in <strong>two modes</strong>:</p>
          <ul>
            <li><strong>Basic mode</strong> — No token required. Covers general, memory, and performance optimizations.</li>
            <li><strong>Pro Tweaks (Advanced) mode</strong> —  Unlocks advanced registry-based tweaks for deeper system customization , Requires access token to use pro tweaks (get access token from youtube video description).</li>
          </ul>
        </div>

        <hr />

        <div className="section">
            <h2>Features</h2>
            <h3>General Optimization</h3>
            <ul>
                <li>Delete temporary files </li>
                <li>Delete user temporary files </li>
                <li>Run Disk Cleanup utility </li>
                <li>Disable Windows Update services </li>
            </ul>

            <h3>Memory Optimization</h3>
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Win 10</th>
                        <th>Win 11</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Disable startup apps</td><td>✅</td><td>✅</td></tr>
                    <tr><td>Turn off transparency</td><td>✅</td><td>✅</td></tr>
                    <tr><td>Disable background apps</td><td>✅</td><td>✅</td></tr>
                    <tr><td>Turn off animations</td><td>❌</td><td>✅</td></tr>
                    <tr><td>Core Isolation / Memory Integrity</td><td>❌</td><td>✅</td></tr>
                    <tr><td>Disable Recall</td><td>❌</td><td>✅</td></tr>
                </tbody>
            </table>

            <h3>Performance Boost</h3>
            <ul>
                <li>Apply <strong>Ultimate Performance</strong> power plan</li>
                <li>Enable <strong>Game Mode</strong></li>
                <li>Disable <strong>Game Bar</strong> (background recording / overlay)</li>
                <li>Turn off privacy features (advertising ID, tailored experiences)</li>
                <li>Adjust for <strong>best performance</strong> (visual effects)</li>
                <li>Turn off all notifications</li>
            </ul>

            <h3>Advanced Tweaks <i>(Pro mode only)</i></h3>
            <p>Apply registry tweaks to fine-tune your system.</p>
        </div>

        <hr />

        {/* <div className="section">
            <h2>Contact</h2>
            <ul>
                <li><strong>YouTube:</strong> <a href="#" onClick={(e) => {e.preventDefault(); youtubelink();}}>@a6tweaks</a></li>
                <li><strong>Discord:</strong> <a href="#" onClick={(e) => {e.preventDefault(); discordlink();}}>Join our server</a></li>
            </ul>
        </div> */}

        <hr />

        <div className="section disclaimer">
            <h2>Disclaimer</h2>
            <p>Use this application <strong>at your own risk</strong>. While designed to optimize system performance, some tweaks may cause system instability, overheating, or require manual reversion. Always <strong>backup your system</strong> and <strong>create a restore point</strong> before applying changes — especially advanced registry tweaks.</p>
        </div>

      </div>

      <About />

    </>
  );
}

export default App;
