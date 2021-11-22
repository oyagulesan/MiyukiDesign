import React from 'react'
import { NavLink } from 'react-router-dom';
import CanvasComponent from './CanvasComponent';
import { COLOR_LIST } from '../util/Constants';
import ColorComponent from './ColorComponent';

export default function DesignComponent() {
  return (
    <div>
      <p>DESIGN COMPONENT</p>
      <CanvasComponent />
      <div className={'colorContainer'}>
      <p>SELECTION COMPONENT</p>
      {
        COLOR_LIST.map((clr, idx) => {
          return (
            <ColorComponent key={idx} clr={clr} disabled={true}/>
          )
        })
      }
    </div>
      <NavLink to="/result">Show Result</NavLink>
    </div>
  )
}
