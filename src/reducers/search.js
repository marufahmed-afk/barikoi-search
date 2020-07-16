import {
  GET_SUGGESTIONS,
  SUGGESTIONS_ERROR,
  SET_CURRENT,
  GET_NEARBY,
  TOGGLE_SIDEBAR,
  CLEAR_ALL,
} from '../actions/types';

const initialState = {
  searching: false,
  closeSidebar: false,
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

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        closeSidebar: !state.closeSidebar,
      };

    case CLEAR_ALL:
    case SUGGESTIONS_ERROR:
      return {
        ...state,
        searching: false,
        closeSidebar: false,
        suggestions: [],
        currentLocation: null,
        nearbyLocation: [],
      };

    default:
      return state;
  }
}
