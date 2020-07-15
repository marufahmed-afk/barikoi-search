import {
  GET_SUGGESTIONS,
  SUGGESTIONS_ERROR,
  SET_CURRENT,
  GET_NEARBY,
} from '../actions/types';

const initialState = {
  searching: false,
  suggestions: [],
  currentLocation: null,
  nearbyLocation: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUGGESTIONS:
      //   console.log('payload', action.payload);
      return {
        ...state,
        suggestions: action.payload,
        searching: true,
      };

    case GET_NEARBY:
      return {
        ...state,
        nearbyLocation: action.payload,
      };

    case SET_CURRENT:
      return {
        ...state,
        currentLocation: action.payload,
        searching: false,
      };

    case SUGGESTIONS_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
}
