import React from 'react'
import "./ProgressSlider.css"
/**
* @author
* @function ProgressSlider
**/

function ProgressSlider({title,value,showValue}){
  return(
    <><p className="progress-title text-grey">{title}</p>
          <div className="progress custom-progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={showValue ? value:""}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${value}%` }}
            >
             {showValue ? `${value}%` :""}
            </div>
          </div></>
   )
  }

  export default React.memo(ProgressSlider)
