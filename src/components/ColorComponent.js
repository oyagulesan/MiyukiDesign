import React from 'react'

export default function ColorComponent(props) {
  // Needs prod clr with name & code
  const style = {
    minHeight: '40px',
    minWidth: '40px',
    display: 'block',
    margin: '10px',
  }
  if (props.disabled) {
    style.minHeight = '15px';
    style.minWidth = '15px';
    style.margin = '5px';
  }
  const onSelect = (event) => {
    props.onSelect(props.clr, event.target.checked);
  }
  const onRadioSelect = () => {
    props.onRadioSelect(props.clr);
  }
  const initialSelection = () => {
    if (props.getSelectedColors().find(c => c.name === props.clr.name)) {
      return true;
    }
    return false;
  }
  return (
    <div className={props.disabled ? 'listColorStyle' : 'colorStyle'}>
      <p>{props.clr.name}</p>
      <div style={style} className={props.clr.name + 'Style'}/>
      {props.disabled
        ? <input type='radio' checked={props.selectedColor} onChange={onRadioSelect}></input> 
        : <input type='checkbox' defaultChecked={initialSelection()} onClick={onSelect}></input>}
    </div>
  )
}
