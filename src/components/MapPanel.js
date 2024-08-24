import "../App.css";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import LayersList from "@arcgis/core/widgets/LayerList";
import Expand from "@arcgis/core/widgets/Expand"
import Legend from "@arcgis/core/widgets/Legend.js";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"
import esriConfig from "@arcgis/core/config";
import Home from "@arcgis/core/widgets/Home";
import Search from "@arcgis/core/widgets/Search"
import React, { useRef, useEffect } from "react";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import { AddLayersToMap } from "../popuptemplate.js";

function MapPanel() {
    const mapDiv = useRef(null);

    //useEffect is doing initializations for the first time load
    //Passing the empty dependency array because we don't want to rerender on every change. this will be called only on refresh.
    useEffect( () => {
        const webmap = new WebMap({
            portalItem: {
              // autocasts as new PortalItem()
              id: "f2e9b762544945f390ca4ac3671cfa72"
            }
          });

        // Create a MapView
        var mapView = new MapView({
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

        AddLayersToMap(webmap)


        mapView.when(() => {

            //Add widgets when mapview is loaded

            //Create Layer List Widget
            const layerList = new LayersList({
                view: mapView,
                collapsed: true,
                //The below is commented for time being, it will actually add the legend in the layerlist. 
                /*listItemCreatedFunction: (event) => {
                    const item = event.item;
                    if (item.layer.type !== "group") {
                        // don't show legend twice
                        item.panel = {
                            content: "legend",
                            open: false,
                        };
                    }
                },
                */
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

            //Create Expand Widget, add Layer List Widget to it and then add the expand widget to mapView UI
            const layerExpand = new Expand({
                view: mapView,
                content: layerList
            });
            mapView.ui.add(layerExpand, "top-left");

            //Create Search Widget and add it to mapView UI
            const search = new Search({ mapView });
            mapView.ui.add(search, "top-right");

            //Create Home Widget and add it to mapView UI
            const homeBtn = new Home({
                mapView: mapView
            });
            mapView.ui.add(homeBtn, "top-left");


            //Create BaseMap Gallery Widget, create Expand widget, add BasMap Gallery widget to it and add Expand widget to mapView UI
            const basemapGallery = new BasemapGallery({
                view: mapView
            });
            const baseMapExpand = new Expand({
                view: mapView,
                content: basemapGallery
            });
            mapView.ui.add(baseMapExpand, "top-left");


            //Create Legend Widget, create Expand widget, add Legend widget to it and add Expand widget to mapView UI
            let legend = new Legend({
                view: mapView
            });
            const legendExpand = new Expand({
                view: mapView,
                content: legend
            });
            mapView.ui.add(legendExpand, "top-left");

            
            mapView.popupEnabled = true;

            console.log("******   ****** i am here ****** *******");

            mapView.watch('zoom', (OnZoom) => {
                console.log("MapView Zoom level is changed.");

            });

            reactiveUtils.watch(
                (layerVisibitlyChange) => mapView.map.layers.filter((layer) => layer.visible) ,
                (OnLayerVisibiltyChange) => {
                  console.log("MapLayer visibility is changed.");
                }
              );
        });

    }, []);

    return (
        <div className="mapDiv" ref={mapDiv} style={{ height: 'calc(70vh)' }}></div>
    );
}

export default MapPanel;
