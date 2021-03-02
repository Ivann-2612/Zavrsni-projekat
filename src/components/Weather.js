import React,{useState, useEffect} from "react"
import {StyledWeather} from '../styledComponents/StyledWeather'

const Weather = () => {
   
    const [maxTemp,setMaxTemp] = useState('')
    const [mainTemp,setMainTemp] = useState('')
    const [minTemp,setMinTemp] = useState('')
    const [main,setMain] = useState('')
    const [cityName,setCityName] = useState('')
    

    useEffect(()=> {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=6f9f3c22febc914f1639e706d22918db&units=metric')
        .then((res) => res.json())
        .then((data) => {
           // console.log(data)
            setMaxTemp(data.main.temp_max)
            setMinTemp(data.main.temp_min)
            setMainTemp(data.main.temp)
            setMain(data.wind.speed)
            setCityName(data.name)
           
        })
},[])
return (
    <StyledWeather>
    <h2>City: {cityName}</h2>
    <h3>Temp : {Math.round(mainTemp)} °C</h3>
    <h3>Min-temp: {minTemp} °C</h3>
    <h3>Max-temp: {Math.round(maxTemp)} °C</h3>
    <h3>Wind: {main} m/s</h3>
     <p> W <br />E <br />A <br />T <br />H <br />E <br />R</p>
    </StyledWeather>
)
}
export default Weather
