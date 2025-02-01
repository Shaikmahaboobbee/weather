import React, { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const[city, setCity] = useState('')
  const[tcity, setTcity] = useState('')
  const[icon, setIcon] = useState('')
  const[temperature, setTemperature] = useState('')
  const[wind, setWind]= useState('')
  const[humidity, setHumidity] = useState('')

  const checkWeather = async ()=>{
    
   await axios.get(`http://api.weatherapi.com/v1/current.json?key=9df6c7e7a69640aba70104409253101&q=${city}`)
    .then((response)=>{
      setIcon(response.data.current.condition.icon)
      setTemperature("Temperate: "+response.data.current.temp_c +" C")
      setWind("Wind Speed: "+response.data.current.wind_kph +" km/hr")
      setHumidity("Humidity: "+response.data.current.humidity)
      console.log(response.data)
    })
    setTcity(city)
    setCity('')
    
  }

  return (
    <>
      <div className='main'>
          <div className='weather'>
              <h1>Weather App</h1>

              <input
              placeholder='search for your city'
              value={city}
              onChange={
                (e)=>setCity(e.target.value)
              }
              />

              <button onClick={checkWeather}>Check Weather</button>

              <h1>{tcity}</h1>
              <img src={icon} width="120"/>
              <h1>{temperature}</h1>
              <h1>{wind}</h1>
              <h1>{humidity}</h1>
          </div>
      </div>
    </>
  )
}

export default App