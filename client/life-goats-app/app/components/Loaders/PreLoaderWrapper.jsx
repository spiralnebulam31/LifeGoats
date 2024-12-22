'use client';

import { useState, useEffect, useRef } from 'react';
import { lifeGoatsLogo } from '../../../public/assets';

export default function PreloaderWrapper({ children }) {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(2);
  const id = useRef(null);

  useEffect(() => {
    id.current = setInterval(() => setTimer((time) => time - 1), 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const clear = () => {
    clearInterval(id.current);
    setPreloader(false);
  };

  return (
    <>
      {preloader ? (
        <div className="preloader">
          <img src={lifeGoatsLogo} alt="logo" />
          <h1>Loading...</h1>
        </div>
      ) : (
        children
      )}
    </>
  );
}