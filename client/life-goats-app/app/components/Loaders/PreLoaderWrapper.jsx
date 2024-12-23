'use client';

import { useState, useEffect, useRef } from 'react';
import { lifeGoatsLogo } from '@/public/assets';
import Image from 'next/image';

export default function PreLoaderWrapper({ children }) {
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
        <div className="preloader flex flex-col items-center justify-center h-screen w-screen fixed top-0 left-0 bg-background z-50">
          <Image 
            src={lifeGoatsLogo} 
            alt="logo"
            width={100}
            height={100}
            priority
            />
          <h1 className="mt-2">Loading...</h1>
        </div>
      ) : (
        children
      )}
    </>
  );
}