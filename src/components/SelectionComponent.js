import React from 'react';
import { COLOR_LIST } from '../util/Constants';
import ColorComponent from './ColorComponent';
import { useAppContext } from '../context/appContext';
import { NavLink } from 'react-router-dom';

export default function SelectionComponent() {
  const { setPeyote, isPeyote,
    setDimensions, getDimensions,
    setSelectedColors, getSelectedColors
  } = useAppContext();
  const onSelect = (event) => {
    setPeyote(event.target.checked);
  }
  const onSetHeight = (event) => {
    setDimensions([event.target.value, getDimensions()[1]]);
  }
  const onSetWidth = (event) => {
    setDimensions([getDimensions()[1], event.target.value]);
  }
  const onColorSelectionChange = (clr, selected) => {
    const clrs = getSelectedColors().filter( c => c.name !== clr.name);
    if (selected) {
      clrs.push(clr)
    }
    setSelectedColors(clrs);
  }
  return (
    <div className={'componentContainer'}>
      <div className={'verticalStyle'}>
        <label>Check if you will use PEYOTE design: </label>
        <input type='checkbox' defaultChecked={isPeyote()} onChange={onSelect}></input>
      </div>
      <div>
        <label>Enter width: </label>
        <input type='number' min={1} max={30} defaultValue={getDimensions()[0]} onChange={onSetHeight}></input>
        <label className={'warning'}>* Min: 1, Max: 30</label>
      </div>
      <div>
        <label>Enter height: </label>
        <input type='number' min={1} max={30} defaultValue={getDimensions()[1]} onChange={onSetWidth}></input>
        <label className={'warning'}>* Min: 1, Max: 30</label>
      </div>
      <div>
        <label>Select colors</label>
      </div>
      <div className={'columnStyle'}>
        {
          COLOR_LIST.map((clr, idx) => {
            return (
              <ColorComponent key={idx} clr={clr} getSelectedColors={getSelectedColors} onSelect={onColorSelectionChange}/>
            )
          })
        }
      </div>

      <NavLink className={'navStyle'} to="/design">Design</NavLink>

    </div>
  )
}
