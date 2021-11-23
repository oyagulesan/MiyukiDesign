import React from 'react'
import { NavLink } from 'react-router-dom';
import CanvasComponent from './CanvasComponent';
import { COLOR_LIST } from '../util/Constants';
import ColorComponent from './ColorComponent';

export default function DesignComponent() {
  return (
    <div className={'componentContainer'}>
      <p className={'title'}>DESIGN COMPONENT</p>
      <div className={'columnStyle'}>
      {
        COLOR_LIST.map((clr, idx) => {
          return (
            <ColorComponent key={idx} clr={clr} disabled={true}/>
          )
        })
      }
      </div>
      <CanvasComponent />
      <NavLink className={'navStyle'} to="/result">Show Result</NavLink>
    </div>
  )
}
