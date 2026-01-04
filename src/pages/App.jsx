import logo from '/A6Tweaks.png';
import '../css/App.css';

function App() {
  return (
    <>
      <div>
        <nav>
          <div className="nav-left">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Pc-Optimization</h2>
          </div>
          <div className="nav-right">
            <a href="/">Home</a>
            <a href="/Download">Download</a>
            <a href="/about">About</a>
          </div>
        </nav>
      </div>
      <div className="app-content">
        <h1>A6Tweaks</h1>
        <p>
          A6Tweaks is an Electron.js application designed to optimize Windows PCs for better performance. It provides a user-friendly interface to apply various system tweaks, clean up temporary files, manage power settings, and more. The app supports both Windows 10 and Windows 11.
        </p>
        <h2>Usage</h2>
        <h3>Running the App</h3>
        <ol>
          <li>Launch the application</li>
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