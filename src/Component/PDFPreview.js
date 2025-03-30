import React, { useState, useEffect } from 'react';

function PDFPreview({ googleDriveUrl }) {
  const [embedUrl, setEmbedUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (googleDriveUrl) {
      try {
        // Extract file ID from Google Drive URL
        let fileId = '';
        if (googleDriveUrl.includes('/file/d/')) {
          fileId = googleDriveUrl.split('/file/d/')[1].split('/')[0];
        } else if (googleDriveUrl.includes('id=')) {
          fileId = googleDriveUrl.split('id=')[1].split('&')[0];
        } else if (googleDriveUrl.includes('/d/')) {
          fileId = googleDriveUrl.split('/d/')[1].split('/')[0];
        }
        if (!fileId) {
          throw new Error('Could not extract file ID from the provided Google Drive URL');
        }
        // Set the Google Drive embed URL
        setEmbedUrl(`https://drive.google.com/file/d/${fileId}/preview`);
        setLoading(false);
      } catch (err) {
        console.error('Error processing Google Drive URL:', err);
        setError('Failed to process the Google Drive URL. Please check the URL format.');
        setLoading(false);
      }
    }
  }, [googleDriveUrl]);

  if (loading) {
    return <div>Loading PDF viewer...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="pdf-container" style={{ 
      width: "fit-content", 
      height: "fit-content",
      border: '1px solid #ccc',
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      {embedUrl ? (
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          title="PDF Viewer"
          frameBorder="0"
          loading="lazy"
        />
      ) : (
        <div>No PDF URL provided</div>
      )}
    </div>
  );
}

export default PDFPreview;