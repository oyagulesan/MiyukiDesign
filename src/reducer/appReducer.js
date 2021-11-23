import {
  SET_PEYOTE,
  SET_DIMENSIONS,
  SET_SELECTED_COLORS,
  SET_DESIGN
} from '../action/actions'

const appReducer = (state, action) => {
  if (action.type === SET_PEYOTE) {
    return { ...state, isPeyote: action.payload};
  }
  if (action.type === SET_DIMENSIONS) {
    return { ...state, dimensions: action.payload};
  }
  if (action.type === SET_SELECTED_COLORS) {
    return { ...state, selectedColors: action.payload};
  }
  if (action.type === SET_DESIGN) {
    return { ...state, design: action.payload};
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default appReducer
