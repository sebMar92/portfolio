import React, { useEffect, useState } from 'react';
import './scrollSign.css';
const ScrollSign = () => {
  const [vanish, setVanish] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVanish(true);
    }, 3000);
  });
  return <div className={`sign-container tags ${vanish && 'vanish'}`}>Scroll down ↓</div>;
};
export default ScrollSign;
