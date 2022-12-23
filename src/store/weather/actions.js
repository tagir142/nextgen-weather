import { ENTER_CITY, REMOVE_CITY } from './types';

export const enterCity = (text) => ({
  type: ENTER_CITY,
  text
});
export const removeCity = (id) => ({
  type: REMOVE_CITY,
  id
});
