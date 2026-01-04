import React, { useState } from 'react';
import { fetchDownloadUrl } from '../download handler/github_download';
import { telegramlink } from '../download handler/telegram_download';
import '../css/Download.css';

function Download() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    const url = await fetchDownloadUrl();
    if (url) {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'A6Tweaks-App.rar';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } else {
      alert('Download failed. Please try again.');
    }
    setIsDownloading(false);
  };

  return (
    <div className="download-container">
      <div className="download-group">
        <button className="download-button" onClick={handleDownload} disabled={isDownloading}>
          {isDownloading ? 'Downloading...' : 'Direct Download'}
        </button>
      </div>
      <button className="telegram-button" onClick={telegramlink}>
        Telegram Download 
      </button>
    </div>
  );
}

export default Download;