'use client';

import { useState, useEffect, useRef } from 'react';
import { lifeGoatsLogo } from '@/src/assets';
import Image from 'next/image';
import propTypes from 'prop-types';
import "@/src/scss/components/Loaders/PreLoaderWrapper.scss";

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
        <div className="preloader">
          <Image 
            src={lifeGoatsLogo} 
            alt="logo"
            width={100}
            height={100}
            priority
            />
          <h1 className="preloader__text">Loading...</h1>
        </div>
      ) : (
        children
      )}
    </>
  );
}

PreLoaderWrapper.propTypes = {
  children: propTypes.node.isRequired,
};