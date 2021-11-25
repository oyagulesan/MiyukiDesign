import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CanvasComponent from './CanvasComponent';
import ColorComponent from './ColorComponent';
import { useAppContext } from '../context/appContext';
import { COLOR_LIST } from '../util/Constants';

export default function DesignComponent() {
  const { getDimensions, getSelectedColors, setDesign } = useAppContext();
  const [allSelected, setAllSelected] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    getSelectedColors().length > 0 ? getSelectedColors()[0] : null);
  const onRadioSelect = (clr) => {
    if (clr.name !== selectedColor.name) {
      setSelectedColor(clr);
    }
  }
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

  const onSelectAll = (event) => {
    setAllSelected(event.target.checked);
  }
  const onReset = () => {
    setDesign(initializeDesign());
  }

  return (
    <div className={'componentContainer'}>
      <div className={'horizontal'}>
        <div className={'verticalStyle'}>
          <CanvasComponent allSelected={allSelected} selectedColor={selectedColor}/>
          <button className={'buttonStyle'} onClick={onReset}>RESET</button>
          <label>Select all</label>
          <input type="checkbox" checked={allSelected} onChange={onSelectAll}></input>
        </div>
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
