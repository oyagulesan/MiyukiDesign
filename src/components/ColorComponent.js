import React from 'react'
import Checkbox from 'rc-checkbox';

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
        ? <Checkbox checked={props.selectedColor} onChange={onRadioSelect}></Checkbox> 
        : <Checkbox defaultChecked={initialSelection()} onChange={onSelect}></Checkbox>}
    </div>
  )
}
