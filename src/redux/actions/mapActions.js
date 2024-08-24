// Action types
export const SET_MAP_VIEW = 'SET_MAP_VIEW';

// Action creator
export const setMapView = (mapView) => {
  return {
    type: SET_MAP_VIEW,
    payload: mapView
  };
};
