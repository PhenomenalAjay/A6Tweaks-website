import axios from 'axios';

export const fetchDownloadUrl = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/PhenomenalAjay/A6Tweaks-App/main/A6Tweaks-App.rar', {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    return url;
  } catch (error) {
    console.error('Download failed:', error);
    return null;
  }
};
