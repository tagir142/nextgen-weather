import { StyledForecastBlock } from './Forecast.styles';
import { ForecastWrapper } from '../ForecastWrapper/ForecastWrapper';
// import { useDispatch } from 'react-redux';

export const Forecast = ({ forecast }) => {
  // const dispatch = useDispatch;
  // const [data, setData] = useState({});
  return (
    <StyledForecastBlock>
      <ForecastWrapper forecast={forecast}> </ForecastWrapper>
    </StyledForecastBlock>
  );
};
