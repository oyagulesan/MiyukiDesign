import React from 'react'

export default function ColorComponent(props) {
  // Needs prod clr with name & code
  const style = {
    minHeight: '40px',
    width: '40px',
    display: 'block',
  }
  const onSelect = (event) => {
    console.log('...on select', event.target.checked);
  }
  const onRadioSelect = (event) => {
    console.log('...on onRadioSelect', event);
  }
  return (
    <div className={'colorStyle'}>
      <p>{props.clr.name}</p>
      <div style={style} className={props.clr.name + 'Style'}/>
      {props.disabled
        ? <input type='radio' onClick={onRadioSelect}></input> 
        : <input type='checkbox' onClick={onSelect}></input>}
    </div>
  )
}
