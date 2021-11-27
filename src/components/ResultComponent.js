import React, { useRef } from 'react'
import { exportComponentAsJPEG } from 'react-component-export-image';
import { NavLink } from 'react-router-dom';
import CanvasComponent from './CanvasComponent';
import { useAppContext } from '../context/appContext';

export default function ResultComponent() {
  const { getDesign, isPeyote } = useAppContext();
  const jpegRef = useRef(null);

  const DesignAsText = () => {
    return getDesign().map((line, idx) => {
      return (
        <div className="horizontal" style={{ margin: '0px', alignItems: 'center', border: 'dashed', borderWidth: '1px', borderColor: 'white' }} key={idx}>
          <p style={{ fontWeight: 'normal', color: 'black' }}>line-{idx}</p>
          {
            line.map((cell, idx2) => {
              return <div key={idx2} className="horizontal" style={{ margin: '0px', border: 'dashed', borderWidth: '1px', borderColor: 'white', alignItems: 'center' }}>
                <p style={{ fontWeight: 'normal', fontSize: '12px', width: '30px' }}>{cell.name}</p>
                {
                  cell.name === 'blank'
                    ? <div style={{ marginRight: '10px', border: 'solid', borderColor: 'white', borderWidth: '1px', width: '15px', height: '15px' }}></div>
                    : <div style={{ marginRight: '10px', backgroundColor: cell.name, width: '15px', height: '15px' }}></div>
                }
              </div>
            })
          }
        </div>
      )
    });
  }
  const saveAsJpeg = () => {
    exportComponentAsJPEG(jpegRef);
  }
  const DesignAsTextForPeyote = () => {
    return getDesign().map((line, idx) => {
      return (
        <div className="horizontal" style={{ margin: '0px', alignItems: 'center', border: 'dashed', borderWidth: '1px', borderColor: 'white' }} key={idx}>
          <p style={{ fontWeight: 'normal', color: 'black' }}>line-{idx}</p>
          <div className={'verticalStyle'}>          
            <div className="horizontal" style={{ margin: '0px', alignItems: 'center', border: 'dashed', borderWidth: '1px', borderColor: 'white' }}>
              {
                line.map((cell, idx2) => {
                  return idx2 % 2 === 0 ? (
                    <div key={idx2} className="horizontal" style={{ margin: '0px', border: 'dashed', borderWidth: '1px', borderColor: 'white', alignItems: 'center' }}>
                      <p style={{ fontWeight: 'normal', fontSize: '12px', width: '30px' }}>{cell.name}</p>
                      {
                        cell.name === 'blank'
                          ? <div style={{ marginRight: '10px', border: 'solid', borderColor: 'white', borderWidth: '1px', width: '15px', height: '15px' }}></div>
                          : <div style={{ marginRight: '10px', backgroundColor: cell.name, width: '15px', height: '15px' }}></div>
                      }
                    </div>
                    ) : null
                })
              }
            </div>
            <div className="horizontal" style={{flexDirection: 'row-reverse', margin: '0px', alignItems: 'center', border: 'dashed', borderWidth: '1px', borderColor: 'white' }}>
              {
                line.map((cell, idx2) => {
                  return idx2 % 2 === 1 ? (
                    <div key={idx2} className="horizontal" style={{ margin: '0px', border: 'dashed', borderWidth: '1px', borderColor: 'white', alignItems: 'center' }}>
                      <p style={{ fontWeight: 'normal', fontSize: '12px', width: '30px' }}>{cell.name}</p>
                      {
                        cell.name === 'blank'
                          ? <div style={{ marginRight: '10px', border: 'solid', borderColor: 'white', borderWidth: '1px', width: '15px', height: '15px' }}></div>
                          : <div style={{ marginRight: '10px', backgroundColor: cell.name, width: '15px', height: '15px' }}></div>
                      }
                    </div>
                    ) : null
                })
              }
            </div>
          </div>          
        </div>
      )
    });
  }

  return (
    <div className={'componentContainer'}>
      <div className={'componentContainer'} ref={jpegRef}>
        <CanvasComponent />
        {isPeyote()
          ? <DesignAsTextForPeyote />
          : <DesignAsText />
        }      
      </div>
      <button className={'saveButtonStyle'} onClick={saveAsJpeg}>Save Result</button>
      <NavLink to="/design">Back to Design</NavLink>
    </div>
  )
}
