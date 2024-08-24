export const SET_MAP_VIEW = 'SET_MAP_VIEW';
export const setMapView = (mapView) => ({
  type: SET_MAP_VIEW,
  payload: {
    zoom: mapView.zoom,
    center: mapView.center,
   
  },
});