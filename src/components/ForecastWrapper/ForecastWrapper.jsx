import { ForecastText, Wrapper } from './ForecastWrapper.styles';

export const ForecastWrapper = ({ forecast }) => {
  return (
    <Wrapper>
      <ForecastText>{forecast.text}</ForecastText>
    </Wrapper>
  );
};
