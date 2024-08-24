import { SET_MAP_VIEW } from '../actions/mapActions';

const initialState = {
  zoom: null,
  center: null,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP_VIEW:
      return {
        ...state,
        zoom: action.payload.zoom,
        center: action.payload.center,
      };
    default:
      return state;
  }
};

export default mapReducer;
