import React, { useRef, useEffect } from "react";
import "../App.css";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import LayersList from "@arcgis/core/widgets/LayerList";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Home from "@arcgis/core/widgets/Home";
import Search from "@arcgis/core/widgets/Search";

import { useDispatch } from 'react-redux';
import { setMapView } from '../redux/actions/mapActions'; // Import the action creator
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import { AddLayersToMap } from "../popuptemplate.js";

function MapPanel() {
    const mapDiv = useRef(null);
    const dispatch = useDispatch(); // Hook to dispatch actions

    useEffect(() => {
        const webmap = new WebMap({
            portalItem: {
                id: "f2e9b762544945f390ca4ac3671cfa72"
            }
        });

        const mapView = new MapView({
            map: webmap,
            container: mapDiv.current,
            popup: {
                actions: [],
                dockEnabled: true,
                dockOptions: {
                    buttonEnabled: true,
                    breakpoint: false,
                },
            },
            center: [51.4722187431, 25.3083643999],
            zoom: 5
        });

        AddLayersToMap(webmap);

        mapView.when(() => {
            const layerList = new LayersList({
                view: mapView,
                collapsed: true,
                visibleElements: {
                    closeButton: false,
                    collapseButton: true,
                    errors: true,
                    filter: true,
                    heading: true,
                    statusIndicators: true,
                },
            });

            layerList.collapsed = false;

            const layerExpand = new Expand({
                view: mapView,
                content: layerList
            });
            mapView.ui.add(layerExpand, "top-left");

            const search = new Search({ mapView });
            mapView.ui.add(search, "top-right");

            const homeBtn = new Home({ mapView: mapView });
            mapView.ui.add(homeBtn, "top-left");

            const basemapGallery = new BasemapGallery({ view: mapView });
            const baseMapExpand = new Expand({
                view: mapView,
                content: basemapGallery
            });
            mapView.ui.add(baseMapExpand, "top-left");

            let legend = new Legend({ view: mapView });
            const legendExpand = new Expand({
                view: mapView,
                content: legend
            });
            mapView.ui.add(legendExpand, "top-left");

            mapView.popupEnabled = true;

            mapView.watch('zoom', (newZoom) => {
                console.log("MapView Zoom level is changed.");
                dispatch(setMapView(mapView)); // Dispatch mapView state
            });

            reactiveUtils.watch(
                (layerVisibitlyChange) => mapView.map.layers.filter((layer) => layer.visible),
                (OnLayerVisibiltyChange) => {
                  console.log("MapLayer visibility is changed.");
                }
            );
        });

    }, [dispatch]);

    return (
        <div className="mapDiv" ref={mapDiv} style={{ height: 'calc(70vh)' }}></div>
    );
}

export default MapPanel;
