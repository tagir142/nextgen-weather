import { ENTER_CITY, REMOVE_CITY } from './types';
import { nanoid } from 'nanoid';

const getInitialState = () => {
  const localWeather = JSON.parse(localStorage.getItem('forecasts'));
  if (!localWeather) {
    return {
      weatherForecast: []
    };
  }
  return localWeather;
};

export const weatherReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case ENTER_CITY: {
      const forecast = {
        id: nanoid(),
        date: new Date().toLocaleString(),
        text: action.text
      };
      const addValue = [forecast, ...state.weatherForecast];
      return {
        ...state,
        weatherForecast: addValue
      };
    }
    case REMOVE_CITY:
      return {
        ...state,
        weatherForecast: []
      };
    default:
      return state;
  }
};
