import React from 'react'
import { COLOR_LIST } from '../util/Constants';
import ColorComponent from './ColorComponent';

export default function SelectionComponent() {
  return (
    <div className={'componentContainer'}>
      <p className={'title'}>SELECTION COMPONENT</p>
      <div className={'columnStyle'}>
        {
          COLOR_LIST.map((clr, idx) => {
            return (
              <ColorComponent key={idx} clr={clr} />
            )
          })
        }
      </div>
    </div>
  )
}
