import React from 'react'
import { NavLink } from 'react-router-dom';

export default function HomeComponent() {
  return (
    <div className={'componentContainer'}>
      <div className={'verticalStyle'}>
        <label>Start with selections</label>
        <NavLink className={'navStyle'} to="/selection">Selections</NavLink>
      </div>
    </div>
  )
}
