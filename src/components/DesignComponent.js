import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CanvasComponent from './CanvasComponent';
import ColorComponent from './ColorComponent';
import { useAppContext } from '../context/appContext';

export default function DesignComponent() {
  const { getSelectedColors } = useAppContext();
  const [selectedColor, setSelectedColor] = useState(
    getSelectedColors().length > 0 ? getSelectedColors()[0] : null);
  const onRadioSelect = (clr) => {
    if (clr.name !== selectedColor.name) {
      setSelectedColor(clr);
    }
  }
  return (
    <div className={'componentContainer'}>
      <div className={'horizontal'}>
        <CanvasComponent selectedColor={selectedColor}/>
        <div className={'verticalStyle'}>
        {
          getSelectedColors().map((clr, idx) => {
            return (
              <ColorComponent selectedColor={selectedColor && selectedColor.name === clr.name} key={idx} clr={clr} disabled={true} onRadioSelect={onRadioSelect}/>
            )
          })
        }
        </div>
      </div>
      <NavLink className={'navStyle'} to="/result">Show Result</NavLink>
    </div>
  )
}
