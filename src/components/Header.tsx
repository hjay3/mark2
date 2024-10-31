import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaBrain, FaLightbulb } from 'react-icons/fa';

export const Header = () => {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between mb-8"
    >
      <div className="flex items-center gap-4">
        <div className="bg-purple-600 p-3 rounded-lg">
          <FaBrain className="text-white text-2xl" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Research Notes</h1>
          <p className="text-gray-400">Your AI-powered research companion</p>
        </div>
      </div>
      <div className="flex gap-4">
        <IconStat icon={<FaBook />} label="Notes" value="42" />
        <IconStat icon={<FaLightbulb />} label="Insights" value="128" />
      </div>
    </motion.div>
  );
};

const IconStat = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
    <div className="text-purple-400 text-xl">
      {icon}
    </div>
    <div>
      <div className="text-white font-bold">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  </div>
);