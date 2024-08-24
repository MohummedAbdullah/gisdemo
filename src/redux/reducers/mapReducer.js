import { SET_MAP_VIEW } from '../actions/mapActions';

const initialState = {
  mapView: {
    zoom: 1 // Initial zoom level, you can adjust this as needed
    // Include other map view properties if needed
  }
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP_VIEW:
      return { ...state, mapView: action.payload };
    default:
      return state;
  }
};

export default mapReducer;
