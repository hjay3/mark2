import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaGoogle, FaUpload, FaFolder } from 'react-icons/fa';

export const StorageIntegration = () => {
  const [isDragging, setIsDragging] = React.useState(false);

  /* 
  // S3 Integration Example
  const uploadToS3 = async (file: File) => {
    // AWS S3 configuration
    // const s3 = new AWS.S3({
    //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //   region: process.env.AWS_REGION
    // });
  };

  // Google Drive Integration Example
  const uploadToGDrive = async (file: File) => {
    // Google Drive API configuration
    // const auth = new google.auth.GoogleAuth({
    //   keyFile: 'path/to/credentials.json',
    //   scopes: ['https://www.googleapis.com/auth/drive.file'],
    // });
  };
  */

  return (
    <div className="mb-8">
      <div className="flex gap-4 mb-4">
        <StorageButton 
          icon={<FaAws />}
          label="Connect to S3"
          color="blue"
        />
        <StorageButton 
          icon={<FaGoogle />}
          label="Connect to Drive"
          color="green"
        />
      </div>
      
      <motion.div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600 hover:border-purple-400'
        }`}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDrop={() => setIsDragging(false)}
        animate={{ scale: isDragging ? 1.02 : 1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="bg-gray-700 p-4 rounded-full">
            <FaUpload className="text-2xl text-purple-400" />
          </div>
          <p className="text-gray-300">
            Drag and drop your markdown files here or{' '}
            <button className="text-purple-400 hover:text-purple-300">browse</button>
          </p>
          <p className="text-sm text-gray-500">
            Supports .md and .txt files
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const StorageButton = ({ 
  icon, 
  label, 
  color 
}: { 
  icon: React.ReactNode;
  label: string;
  color: 'blue' | 'green';
}) => {
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700'
  };

  return (
    <motion.button 
      className={`flex items-center gap-2 px-4 py-2 text-white rounded ${colorClasses[color]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {label}
    </motion.button>
  );
};