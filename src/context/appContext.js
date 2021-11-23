import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducer/appReducer'
import {
  SET_PEYOTE,
  SET_SELECTED_COLORS,
  SET_DIMENSIONS,
  SET_DESIGN,
} from '../action/actions.js'
import { COLOR_LIST } from '../util/Constants';

const getLocalStorage = () => {
  let miyukiDesign = localStorage.getItem('miyukiDesign')
  if (miyukiDesign) {
    return JSON.parse(localStorage.getItem('miyukiDesign'))
  } else {
    return initialState;
  }
}

const initialState = {
  isPeyote: true,
  selectedColors: COLOR_LIST, // All colors selected by default
  dimensions: [20, 10],
  design: [
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      }
    ],
    [
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      }
    ],
    [
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "black",
        "code": 5
      },
      {
        "name": "blue",
        "code": 3
      },
      {
        "name": "aqua",
        "code": 11
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "white",
        "code": 2
      },
      {
        "name": "blank",
        "code": 1
      },
      {
        "name": "blank",
        "code": 1
      }
    ]
  ]
}

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const storedStateText = localStorage.getItem('miyukiDesign')
  let storedState = initialState;
  if (storedStateText) {
    storedState = JSON.parse(localStorage.getItem('miyukiDesign'))
  }

  const [state, dispatch] = useReducer(reducer, storedState);

  const setPeyote = (isPeyote) => {
    dispatch({ type: SET_PEYOTE, payload: isPeyote });
  }
  const isPeyote = () => {
    return state.isPeyote;
  }
  const setDesign = (design) => {
    dispatch({ type: SET_DESIGN, payload: design });
  }
  const getDesign = () => {
    return state.design;
  }
  const setSelectedColors = (colors) => {
    dispatch({ type: SET_SELECTED_COLORS, payload: colors });
  }
  const getSelectedColors = () => {
    return state.selectedColors;
  }

  const setDimensions = (dimensions) => {
    dispatch({ type: SET_DIMENSIONS, payload: dimensions });
  }
  const getDimensions = () => {
    return state.dimensions;
  }
  useEffect(() => {
    getLocalStorage();
  })

  useEffect(() => {
    localStorage.setItem('miyukiDesign', JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider
      value={{
        ...state,
        setPeyote, isPeyote,
        setSelectedColors, getSelectedColors,
        setDimensions, getDimensions,
        setDesign, getDesign
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useAppContext = () => {
  return useContext(AppContext)
}
