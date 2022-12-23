import { InputWrapper, StyledButton, StyledInput } from './Input.styles';
import { useState } from 'react';
import { enterCity } from '../../store/weather/actions';
import { useDispatch } from 'react-redux';
// import axios from 'axios';

export const Input = () => {
  const [location, setLocation] = useState('');
  // const [data, setData] = useState({});

  const dispatch = useDispatch();
  // text=location

  /* const searchLocation = () => {
    axios.get(url).then((response) => {
      if (location.trim().length) {
        setData(response.data);
        console.log(response.data);
        setLocation('');
      }
    });
  };
  */

  const searchLocation = () => {
    if (location.trim().length) {
      dispatch(enterCity(location));
      setLocation('');
    }
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      searchLocation();
    }
  };

  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={location}
        placeholder="Введите город"
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <StyledButton onClick={searchLocation}>⚡</StyledButton>
    </InputWrapper>
  );
};
