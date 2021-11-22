import React from 'react'

export default function ColorComponent(props) {
  // Needs prod clr with name & code
  const style = {
    'background-color': 'orange',
    width: 40,
    height: 40,
    flex: 1,
  }
  const onSelect = (event) => {
    console.log('...on select', event.target.checked);
  }
  const onRadioSelect = (event) => {
    console.log('...on onRadioSelect', event);
  }
  return (
    <div style={{backgroundColor: 'orange', flexDirection: 'row'}}>
      <p style={{flex: 1}}>{props.clr.name + '....'}</p>
      <div className={'colorStyle'} style={style}>
      </div>
      {props.disabled
        ? <input type='radio' onClick={onRadioSelect}></input> 
        : <input type='checkbox' onClick={onSelect}></input>}
    </div>
  )
}
