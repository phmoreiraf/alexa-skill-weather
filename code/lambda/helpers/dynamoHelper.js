const axios = require('axios');
const { WEATHER_API_KEY } = require('../config/config.json');

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
    const response = await axios.get(`${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric&lang=pt_br`);
    const { weather, main } = response.data;
    return `O clima em ${city} é ${weather[0].description} com temperatura de ${main.temp}°C.`;
};

module.exports = { getWeather };
