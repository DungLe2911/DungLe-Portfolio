import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PDFPreview from './PDFPreview';
import Button from '@mui/material/Button';

const RecommendationLetterCard = ({ 
    letter = {},
    index = 0,
    onClick = () => { }
}) => {
  
  const handleCardClick = () => {
    onClick(index);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full justify-between">
      {/* PDF Preview */}
      <div className="mb-4 flex-shrink-0">
        <div onClick={handleCardClick} className="relative border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-50 group cursor-pointer">
          <PDFPreview path={letter.filePath} />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center pointer-events-none">
            <RemoveRedEyeIcon 
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              sx={{ fontSize: 60 }}
            />
          </div>
        </div>
      </div>

      {/* Letter Information */}
      <div className="space-y-2 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{letter.author}</h3>
        <p className="text-gray-600 line-clamp-1">{letter.authorTitle}</p>
        <p className="text-gray-700 font-medium line-clamp-2">{letter.organization}</p>
        <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
            {letter.type}
          </span>
          <span>•</span>
          <span className="line-clamp-1">{letter.relationship}</span>
        </div>
        <p className="text-sm text-gray-500">{letter.dateGiven}</p>
        <div className="mt-auto pt-2">
          <Button variant="contained" color="primary" onClick={handleCardClick} fullWidth>
            View Letter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationLetterCard;