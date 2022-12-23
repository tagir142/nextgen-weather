import { StyledForecastList, StyledWrapper } from './WeatherWrapper.styles';
import { Input } from '../Input/Input';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Forecast } from '../Forecast/Forecast';

export const WeatherWrapper = () => {
  const forecasts = useSelector((state) => state.forecasts);
  const arrForecasts = forecasts.weatherForecast;

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('forecasts', JSON.stringify(forecasts));
  });
  console.log(arrForecasts);

  return (
    <StyledWrapper>
      <Input />
      <StyledForecastList>
        {arrForecasts.map((item) => (
          <Forecast forecast={item} key={item.id} />
        ))}
      </StyledForecastList>
    </StyledWrapper>
  );
};
