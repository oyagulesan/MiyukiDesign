import React, { useEffect, useState, useRef } from 'react';

export default function CanvasComponent() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');
    ctx.clearRect(0, 0, 300, 150);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 250, 100);
    ctx.fillStyle = 'blue';
    ctx.fillText('test!!!', 30, 80);


    const handleResize = (event) => {
      console.log('resize', event);
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize, false);
  });


  const handleClick = (event) => {
    console.log('...handleClick', event.screenX, event.screenY);
  }
  return (
    <canvas className={'canvasStyle'} ref={canvasRef} onClick={handleClick}/>
  )
}
