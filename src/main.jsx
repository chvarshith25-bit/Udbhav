import IntroController from './intro/IntroController';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import App from './App';
import './styles/index.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><MotionConfig reducedMotion="user"><BrowserRouter><IntroController><App /></IntroController></BrowserRouter></MotionConfig></React.StrictMode>);
