import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import WeatherCardLarge from '../../components/cards/WeatherCardLarge';
import { getWeatherbyLocation } from '../../repositories/weather';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { weatherResponse } from '../../utils/globalFunctions';

export default function DetailPage() {
  const { city } = useParams();
  const [loading, setLoading] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [error, setError] = useState('');

  const temperatureObj = weatherDetails?.items[0]?.temperature;
  const avgTemperature = (temperatureObj?.min + temperatureObj?.max) / 2;
  const temperature = avgTemperature?.toString();

  const windObj = weatherDetails?.items[0]?.wind;
  const avgWind = (windObj?.min + windObj?.max) / 2;
  const wind = avgWind?.toString();

  const rainObj = weatherDetails?.items[0]?.prec;
  const rain = rainObj?.probability?.toString();

  const getCityWeather = async () => {
    setError('');
    setLoading(true);
    try {
      const response = await getWeatherbyLocation(city);
      setWeatherDetails(response?.forecast);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('Details not available !')
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!!city) {
      getCityWeather();
    }
  }, [city]);

  return (
    <div className="weather-details-container">
      <WeatherCardLarge
        city={city}
        temperature={temperature}
        error={error}
        id={city}
        loading={loading}
        onClick={() => { }}
      />

      <div className="small-cards-container">
        <div className="small-card">
          <h4 className="card-title">Wind</h4>
          <p className="card-value">{wind} km/h</p>
        </div>
        <div className="small-card">
          <h4 className="card-title">Rain Probability</h4>
          <p className="card-value">{rain} %</p>
        </div>
      </div>

      <div className='mt-4'>
        <h3 className='w-full text-center'>Weather Forecast</h3>
        {weatherDetails?.items?.length > 0 ? (
          <div className='flex flex-wrap items-center justify-center gap-5'>
            {weatherDetails?.items?.slice(0,6).map((item) => (
              <div key={item?.date} className="forecast-card">
                <h2 className="date">{item?.date}</h2>
                <p className="temperature">Min Temperature: {item?.temperature?.min}</p>
                <p className="temperature">Min Temperature: {item?.temperature?.max}</p>
                <p className="condition">Rain Probability: {item?.prec?.probability}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No forecast available</p>
        )}
      </div>
    </div>
  )
}