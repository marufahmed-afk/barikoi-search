import axios from 'axios';

import {
  GET_SUGGESTIONS,
  SUGGESTIONS_ERROR,
  SET_CURRENT,
  GET_NEARBY,
  TOGGLE_SIDEBAR,
  CLEAR_ALL,
} from './types';

export const getSuggestions = (value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://barikoi.xyz/v1/api/search/autocomplete/MTc0OTpBVjZNOFo2MzFJ/place?q=${value}`
    );

    dispatch({
      type: GET_SUGGESTIONS,
      payload: res.data.places,
    });
  } catch (err) {
    dispatch({
      type: SUGGESTIONS_ERROR,
    });
  }
};

export const getCurrent = (value) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://barikoi.xyz/v1/api/search/geocode/MTc0OTpBVjZNOFo2MzFJ/place/${value}`
    );

    dispatch({
      type: SET_CURRENT,
      payload: res.data.place,
    });
  } catch (err) {
    dispatch({
      type: SUGGESTIONS_ERROR,
    });
  }
};

export const getNearby = (longitude, latitude, pType) => async (dispatch) => {
  console.log(longitude, latitude, pType);
  try {
    const res = await axios.get(
      `https://barikoi.xyz/v1/api/search/nearby/category/MTc0OTpBVjZNOFo2MzFJ/0.5/10?longitude=${longitude}&latitude=${latitude}&ptype=${pType}`
    );

    dispatch({
      type: GET_NEARBY,
      payload: res.data.Place,
    });
  } catch (err) {
    dispatch({
      type: SUGGESTIONS_ERROR,
    });
  }
};

export const toggleSidebar = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR,
  });
};

export const clearAll = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ALL,
  });
};
