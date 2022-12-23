import { combineReducers } from '@reduxjs/toolkit';
import { weatherReducer } from './weather/reducers';

export const rootReducer = combineReducers({
  forecasts: weatherReducer
});
