import React from 'react';
import { useSelector } from 'react-redux';

const StatusBar = () => {
    const mapView = useSelector((state) => state.map.mapView);
    const zoomLevel = mapView ? mapView.zoom : 'N/A';

    return (
        <div className="status-bar">
            <span>Current Zoom Level: {zoomLevel}</span>
        </div>
    );
};

export default StatusBar;
