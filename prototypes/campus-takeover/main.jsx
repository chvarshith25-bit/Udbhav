import React from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import CampusPrototype from './src/CampusPrototype';
import '../../src/styles/index.css';
import './src/campus.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <CampusPrototype />
    </MotionConfig>
  </React.StrictMode>,
);
