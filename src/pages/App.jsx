import logo from '/A6Tweaks.png';
import '../css/App.css';

function App() {
    function premium(){
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
    }
  return (
    <>
      <div>
        <nav>
          <div className="nav-left">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Pc-Optimization</h2>
          </div>
          <div className="nav-right">
            <a href="#" onClick={(e) => { e.preventDefault(); premium(); }}>Get Premium Version</a>
          </div>
        </nav>
      </div>
      <div className="app-content">
        <h1>A6Tweaks</h1>
        <p>
          A6Tweaks is an Electron.js application designed to optimize Windows PCs for better performance. It provides a user-friendly interface to apply various system tweaks, clean up temporary files, manage power settings, and more. The app supports both Windows 10 and Windows 11.
        </p>
        <h2>Usage :</h2>
        <h3>Running the App</h3>
        <ol>
          <li>Launch the application</li>
          <li>Get Access Token to access the app( where to get token : the access token mentioned in youtube video )</li>
          <li>Select your Windows version (10 or 11)</li>
          <li>Choose from the available optimization categories:
            <ul>
              <li>General Optimization</li>
              <li>Memory Optimization</li>
              <li>Performance Boost</li>
              <li>Advanced Tweaks</li>
            </ul>
          </li>
          <li>Apply the desired optimizations</li>
        </ol>
        <p><strong>Caution:</strong> Some tweaks may require administrator privileges and can significantly change system behavior. Always create a system restore point before applying advanced tweaks.</p>
      </div>
    </>
  );
}

export default App;