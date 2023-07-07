// Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../../components/search/SearchBox';
import WeatherCardLarge from '../../components/cards/WeatherCardLarge';
import { getWeatherbyLocation } from '../../repositories/weather';

export default function Home() {
  const navigate = useNavigate();

  const [city, setCity] = useState({ value: 'kathmandu', label: 'Kathmandu' });
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [error, setError] = useState('');

  const getCityWeather = async () => {
    setError('');
    setLoading(true);
    try {
      const response = await getWeatherbyLocation(city?.value);
      const temperatureObj = response?.forecast?.items[0]?.temperature;
      const avgTemperature = (temperatureObj?.min + temperatureObj?.max) / 2;
      setTemperature(avgTemperature?.toString());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError('Details not available !')
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!!city?.value) {
      getCityWeather();
    }
  }, [city?.value]);

  return (
    <div className="home-container">
      <h2 className="title">Weather App</h2>
      <SearchBox city={city} setCity={(value) => setCity(value)} />
      <WeatherCardLarge
        city={city?.label}
        temperature={temperature}
        error={error}
        id={city?.value}
        loading={loading}
        onClick={() => navigate(`/weather/${city?.value}`)}    
        />
    </div>
  );
};

