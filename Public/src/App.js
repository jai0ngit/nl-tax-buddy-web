import React, { useState } from 'react';
import LandingPage from './LandingPage';
import MainApp from './MainApp';
export default function App(){
  const [started, setStarted] = useState(false);
  return started ? <MainApp /> : <LandingPage onStart={() => setStarted(true)} />;
}
