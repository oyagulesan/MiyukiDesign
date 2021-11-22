import React from 'react'
import { COLOR_LIST } from '../util/Constants';
import ColorComponent from './ColorComponent';

export default function SelectionComponent() {
  return (
    <div className={'colorContainer'}>
      <p>SELECTION COMPONENT</p>
      {
        COLOR_LIST.map((clr, idx) => {
          return (
            <ColorComponent clr={clr} />
          )
        })
      }
    </div>
  )
}
