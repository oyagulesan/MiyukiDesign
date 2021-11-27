import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../context/appContext';
import { PIXEL_SIZE, COLOR_LIST } from '../util/Constants';

export default function CanvasComponent(props) {
  const { getDimensions, setDesign, getDesign, isPeyote } = useAppContext();

  const canvasRef = useRef(null);
  const draw = () => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');
    const rect = canvasObj.getBoundingClientRect();
    const xCnt= isPeyote() ? parseInt(getDimensions()[0]) + 0.5 : parseInt(getDimensions()[0]);
    const xInt = Math.floor(canvasObj.width/xCnt);
    const yInt = Math.floor(canvasObj.height/parseInt(getDimensions()[1]));
    // yInt is assigned same value with xInt to make sure square shapes
    // const yInt = xInt;
    ctx.clearRect(0, 0, rect.width, rect.height);
    let design = getDesign();
    if (design && design.length === parseInt(getDimensions()[0]) && design[0].length === parseInt(getDimensions()[1])) {
      // Proceed
    } else {
      design = initializeDesign();  
    }

    for (let x = 0; x < parseInt(getDimensions()[0]); x++) {
      for (let y = 0; y < parseInt(getDimensions()[1]); y++) {
        let clr = COLOR_LIST[0];
        if (design.length > x && design[x].length > y) {
          clr = design[x][y];
        }
        if (clr.name === 'blank') {
          ctx.strokeStyle = 'white';
          ctx.lineWidth = '1';
          if (isPeyote() && y % 2 === 1) {
            ctx.fillStyle = 'rgb(68, 102, 170)';
            ctx.fillRect((x * xInt) + (xInt / 2), y * yInt, xInt, yInt);
            ctx.beginPath();
            ctx.rect((x * xInt) + (xInt / 2), y * yInt, xInt, yInt);
         } else {
            ctx.fillStyle = 'rgb(68, 102, 170)';
            ctx.fillRect((x * xInt), y * yInt, xInt, yInt);
            ctx.beginPath();
            ctx.rect(x * xInt, y * yInt, xInt, yInt);
          }
          ctx.stroke();
        } else {
          ctx.fillStyle = clr.name;
          if (isPeyote() && y % 2 === 1) {
            ctx.fillRect((x * xInt) + (xInt / 2), y * yInt, xInt, yInt);
          } else {
            ctx.fillRect(x * xInt, y * yInt, xInt, yInt);
          }
        }
      }  
    }
  }
  useEffect(() => {
    draw();
  });

  const initializeDesign = () => {
    const design = [];
    // Initialize design
    for (let x = 0; x < getDimensions()[0]; x++) {
      const tmp = [];
      for (let y = 0; y < getDimensions()[1]; y++) {
        tmp.push(COLOR_LIST[0]);
      }
      design.push(tmp);
    }
    return design;
  }

  const handleClick = (event) => {
    if (props.selectedColor === null) {
      return;
    }
    let design = getDesign();
    if (props.allSelected) {
      for (let i = 0; i < getDimensions()[0]; i++) {
        for (let j = 0; j < getDimensions()[1]; j++) {
          // Set selected color to all pixels
          design[i][j] = props.selectedColor;
        }
      }
    } else {
      const canvasObj = canvasRef.current;
      const rect = canvasObj.getBoundingClientRect();
      const xInt = Math.floor(rect.width/((isPeyote() ? 0.5 : 0) + parseInt(getDimensions()[0])));
      const yInt = Math.floor(rect.height/parseInt(getDimensions()[1]));

      let x1 = Math.floor((event.clientX - rect.left)/ xInt);
      const y1 = Math.floor((event.clientY - rect.top)/ yInt);
      if (isPeyote() && y1 % 2 === 1) {
        x1 = Math.floor((event.clientX - rect.left - (xInt/2))/ xInt);
      }
  
      if (x1 >= parseInt(getDimensions()[0]) || x1 < 0) {
        return;
      }
  
      if (design && design.length === parseInt(getDimensions()[0]) && design[0].length === parseInt(getDimensions()[1])) {
        // Proceed
      } else {
        design = initializeDesign();  
      }
      // Set selected color to the pixel
      design[x1][y1] = props.selectedColor;
    }
    setDesign(design);
    draw();
  }
  return (
    <div>
      <div className={'horizontal'}>
        {
          getDesign().map((arr, idx) => (
            <div style={{color: 'white', transform: "rotate(270deg)", width: `${props.selectedColor ? PIXEL_SIZE : (PIXEL_SIZE / 2)}px`}}>{idx}</div>
          ))
        }
      </div>
      <canvas className={'canvasStyle'}
        style={{border: 'solid', 
          width: `${((isPeyote() ? 0.5 : 0 ) + parseInt(getDimensions()[0])) * (props.selectedColor ? PIXEL_SIZE : (PIXEL_SIZE / 2))}px`, 
          height: `${(parseInt(getDimensions()[1]) * (props.selectedColor ? PIXEL_SIZE : (PIXEL_SIZE / 2)))}px`}} ref={canvasRef} onClick={handleClick}/>
    </div>
  )
  
}
