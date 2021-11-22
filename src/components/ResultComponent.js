import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ResultComponent() {
  return (
    <div>
      <p>RESULT COMPONENT</p>
      <NavLink to="/design">Back to Design</NavLink>
    </div>
  )
}
