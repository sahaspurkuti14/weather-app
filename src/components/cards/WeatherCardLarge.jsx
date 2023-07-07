import React from 'react'
import { getCurrentDate, getCurrentTime } from '../../utils/globalFunctions'

export default function WeatherCardLarge(props) {
  const currentDate = getCurrentDate();
  const currentTime = getCurrentTime();
  return (
    <div
      className="large-card cursor-pointer"
      id={props.id}
      style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1669562720277-b12b71e55a63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)` }}
      onClick={props.onClick}
    >
      <div className="overlay">
        {!props.loading ?
          <>
            <h2 className="location">{props.city}</h2>
            {props.error ? <span className="time">{props.error}</span> :
              <>
                <span className="temperature">{props.temperature}°C</span>
                <span className="time">Time: {currentTime}</span>
                <span className="time">Date: {currentDate}</span>
              </>
            }
          </>
          :
          <span className="time">Fetching Data...</span>
        }
      </div>
    </div>
  )
}
