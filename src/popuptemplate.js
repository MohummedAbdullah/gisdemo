
import MapImageLayer from "@arcgis/core/layers/MapImageLayer"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"


function getDefaultPopupContent(feature) {
    const div = document.createElement("div");
    const attributes = feature.graphic.attributes;

    // Create a table
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginBottom = "20px";

    // Function to format date
    function formatDate(timestamp) {
      const date = new Date(timestamp);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    }

    // Create table rows for each attribute
    for (const key in attributes) {
      const row = document.createElement("tr");

      const cell1 = document.createElement("td");
      cell1.style.border = "1px solid #ddd";
      cell1.style.padding = "8px";
      cell1.style.textAlign = "left";
      cell1.style.width = "150px";
      cell1.textContent = key;

      const cell2 = document.createElement("td");
      cell2.style.border = "1px solid #ddd";
      cell2.style.padding = "8px";
      cell2.style.textAlign = "left";
      cell2.style.backgroundColor = "#f9f9f9";

      if (
        key === "insertedOn" ||
        key === "updateOn" ||
        key === "CHANGEDATE" ||
        key === "REPORTDATE" ||
        key === "AFFECTEDDATE" ||
        key === "STATUSDATE" ||
        key === "SR_REPORTDATE"
      ) {
        cell2.textContent = formatDate(attributes[key]);
      } else {
        cell2.textContent = attributes[key];
      }

      row.appendChild(cell1);
      row.appendChild(cell2);
      table.appendChild(row);
    }

    

    //const button = document.createElement("button");
    //button.textContent = "Operations";
    //button.style.backgroundColor = "#022130"; // Dark blue background
    //button.style.color = "white"; // White text
    //button.style.padding = "10px 20px";
    //button.style.marginTop = "10px";
    //button.style.border = "none";
    //button.style.cursor = "pointer";

    //button.addEventListener("click", () => {
    //  handleButtonClick(attributes);
    //});

    //button.addEventListener("mouseover", () => {
    //  button.style.backgroundColor = "#0076ce"; // Lighter blue on hover
    //});

    //button.addEventListener("mouseout", () => {
    //  button.style.backgroundColor = "#022130"; // Dark blue background
    //});

    //div.appendChild(button);
    div.appendChild(document.createElement("br"));
    div.appendChild(table);

    return div;
  }


function getPopupContent(feature) {
    const div = document.createElement("div");
    const attributes = feature.graphic.attributes;

    // Create a table
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginBottom = "20px";

    // Function to format date
    function formatDate(timestamp) {
      const date = new Date(timestamp);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    }

    // Create table rows for each attribute
    for (const key in attributes) {
      const row = document.createElement("tr");

      const cell1 = document.createElement("td");
      cell1.style.border = "1px solid #ddd";
      cell1.style.padding = "8px";
      cell1.style.textAlign = "left";
      cell1.style.width = "150px";
      cell1.textContent = key;

      const cell2 = document.createElement("td");
      cell2.style.border = "1px solid #ddd";
      cell2.style.padding = "8px";
      cell2.style.textAlign = "left";
      cell2.style.backgroundColor = "#f9f9f9";

      if (
        key === "insertedOn" ||
        key === "updateOn" ||
        key === "CHANGEDATE" ||
        key === "REPORTDATE" ||
        key === "AFFECTEDDATE" ||
        key === "STATUSDATE" ||
        key === "SR_REPORTDATE"
      ) {
        cell2.textContent = formatDate(attributes[key]);
      } else {
        cell2.textContent = attributes[key];
      }

      row.appendChild(cell1);
      row.appendChild(cell2);
      table.appendChild(row);
    }

    

    const button = document.createElement("button");
    button.textContent = "Operations";
    button.style.backgroundColor = "#022130"; // Dark blue background
    button.style.color = "white"; // White text
    button.style.padding = "10px 20px";
    button.style.marginTop = "10px";
    button.style.border = "none";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
      handleButtonClick(attributes);
    });

    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#0076ce"; // Lighter blue on hover
    });

    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#022130"; // Dark blue background
    });

    div.appendChild(button);
    div.appendChild(document.createElement("br"));
    div.appendChild(table);

    return div;
  }

  function getComplaintsPopupContent(feature) {
    const div = document.createElement("div");
    const attributes = feature.graphic.attributes;
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginBottom = "20px";

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    }

    for (const key in attributes) {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.style.border = "1px solid #ddd";
        cell1.style.padding = "8px";
        cell1.style.textAlign = "left";
        cell1.style.width = "150px";
        cell1.textContent = key;

        const cell2 = document.createElement("td");
        cell2.style.border = "1px solid #ddd";
        cell2.style.padding = "8px";
        cell2.style.textAlign = "left";
        cell2.style.backgroundColor = "#f9f9f9";

        if (
            key === "insertedOn" ||
            key === "updateOn" ||
            key === "CHANGEDATE" ||
            key === "REPORTDATE" ||
            key === "AFFECTEDDATE" ||
            key === "STATUSDATE" ||
            key === "SR_REPORTDATE"
        ) {
            cell2.textContent = formatDate(attributes[key]);
        } else {
            cell2.textContent = attributes[key];
        }

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }

    

    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";
    buttonContainer.style.marginTop = "10px";
    buttonContainer.style.alignItems = "center"; // Ensures buttons and text are vertically aligned

    const operationsButton = document.createElement("button");
    operationsButton.textContent = "Operations";
    operationsButton.style.backgroundColor = "#022130";
    operationsButton.style.color = "white";
    operationsButton.style.padding = "10px 20px";
    operationsButton.style.border = "none";
    operationsButton.style.cursor = "pointer";

    operationsButton.addEventListener("click", () => {
        handleOperationsButtonClick(attributes);
    });

    operationsButton.addEventListener("mouseover", () => {
        operationsButton.style.backgroundColor = "#0076ce";
    });

    operationsButton.addEventListener("mouseout", () => {
        operationsButton.style.backgroundColor = "#022130";
    });

    buttonContainer.appendChild(operationsButton);

    // Check if KPI_Status is 'Duplicate'
    if (attributes.KPI_Status === 'Duplicate') {
        const duplicateText = document.createElement("p");
        duplicateText.textContent = "Duplicate SRs";
        duplicateText.style.color = "red";
        buttonContainer.appendChild(duplicateText);
    } 
    // Check if WONUM is null or empty and KPI_Status is not 'Duplicate'
    else if (!attributes.WONUM) {
        const createWOButton = document.createElement("button");
        createWOButton.textContent = "Create WO";
        createWOButton.style.backgroundColor = "#022130";
        createWOButton.style.color = "white";
        createWOButton.style.padding = "10px 20px";
        createWOButton.style.border = "none";
        createWOButton.style.cursor = "pointer";

        createWOButton.addEventListener("click", () => {
            handleCreateWOButtonClick(attributes);
        });

        createWOButton.addEventListener("mouseover", () => {
            createWOButton.style.backgroundColor = "#0076ce";
        });

        createWOButton.addEventListener("mouseout", () => {
            createWOButton.style.backgroundColor = "#022130";
        });

        buttonContainer.appendChild(createWOButton);
    }

    
    div.appendChild(buttonContainer);
    div.appendChild(document.createElement("br"));
    div.appendChild(table);

    return div;
}

// Button click handler
function handleButtonClick(attributes) {
    // Access the selected feature's attributes
    //alert(`Feature selected: ${attributes.KPI_Status}`);

    var url = "https://10.154.30.31/giswebapp/CRMSComplaintDetail?ID=" + attributes.EXT_CRMSRID;// + "&User="; // + Logged In Username

    window.open(url, "myWindow", "toobar = no, width=800,height=600");
  }

  function handleCreateWOButtonClick(attributes) {
      var url = "https://10.154.30.31/giswebapp/CreateWorkOrder?ID=" + attributes.EXT_CRMSRID;
      window.open(url, "myWindow", "toolbar=no, width=800,height=600");
    }

    function handleOperationsButtonClick(attributes) {
      var url = "https://10.154.30.31/giswebapp/CRMSComplaintDetail?ID=" + attributes.EXT_CRMSRID;
      window.open(url, "myWindow", "toolbar=no, width=800,height=600");
    }

export function AddLayersToMap(webMap) {

    var SGWLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/SGW_Network/MapServer",
        title: 'Network - Surface Ground Water - OnLine',
        visible: false,
        sublayers: [
            {
                title: "SGW Valve Chamber Polygon",
                id: 34,
                popupTemplate: {
                    title: "SGW Valve Chamber Polygon",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Trench polygon",
                id: 33,
                popupTemplate: {
                    title: "SGW Trench polygon",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Culvert",
                id: 32,
                popupTemplate: {
                    title: "SGW Culvert",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Culvert Wall",
                id: 31,
                popupTemplate: {
                    title: "SGW Culvert Wall",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Swale",
                id: 30,
                popupTemplate: {
                    title: "SGW Swale",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Pond",
                id: 29,
                popupTemplate: {
                    title: "SGW Pond",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Ditch",
                id: 28,
                popupTemplate: {
                    title: "SGW Ditch",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Chute",
                id: 27,
                popupTemplate: {
                    title: "SGW Chute",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Stub Pipe",
                id: 26,
                popupTemplate: {
                    title: "SGW Stub Pipe",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Trench",
                id: 25,
                popupTemplate: {
                    title: "SGW Trench",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Culvert Pipes",
                id: 24,
                popupTemplate: {
                    title: "SGW Culvert Pipes",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Duct",
                id: 23,
                popupTemplate: {
                    title: "SGW Duct",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Rising Main",
                id: 22,
                popupTemplate: {
                    title: "SGW Rising Main",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Gully Connection",
                id: 21,
                popupTemplate: {
                    title: "SGW Gully Connection",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Gully Connection Stub Pipe",
                id: 20,
                popupTemplate: {
                    title: "SGW Gully Connection Stub Pipe",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Micro Tunnel Sewer",
                id: 19,
                popupTemplate: {
                    title: "SGW Micro Tunnel Sewer",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Sewer",
                id: 18,
                popupTemplate: {
                    title: "SGW Sewer",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Rising Main Flow Direction",
                id: 17,
                popupTemplate: {
                    title: "SGW Rising Main Flow Direction",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Sewer Flow Direction",
                id: 16,
                popupTemplate: {
                    title: "SGW Sewer Flow Direction",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Micro Tunnel Sewer Flow Direction",
                id: 15,
                popupTemplate: {
                    title: "SGW Micro Tunnel Sewer Flow Direction",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Valve Chamber Point",
                id: 14,
                popupTemplate: {
                    title: "SGW Valve Chamber Point",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Valve",
                id: 13,
                popupTemplate: {
                    title: "SGW Valve",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Catchbasin",
                id: 12,
                popupTemplate: {
                    title: "SGW Catchbasin",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Internal Backdrop",
                id: 11,
                popupTemplate: {
                    title: "SGW Internal Backdrop",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Micro Tunnel Manhole",
                id: 10,
                popupTemplate: {
                    title: "SGW Micro Tunnel Manhole",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Fittings",
                id: 9,
                popupTemplate: {
                    title: "SGW Fittings",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Deep Injection well",
                id: 8,
                popupTemplate: {
                    title: "SGW Deep Injection well",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Borehole",
                id: 7,
                popupTemplate: {
                    title: "SGW Borehole",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Holding Tanks",
                id: 6,
                popupTemplate: {
                    title: "SGW Holding Tanks",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Outfall Chamber",
                id: 5,
                popupTemplate: {
                    title: "SGW Outfall Chamber",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Stub End Cap",
                id: 4,
                popupTemplate: {
                    title: "SGW Stub End Cap",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Cover",
                id: 3,
                popupTemplate: {
                    title: "SGW Cover",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Gully",
                id: 2,
                popupTemplate: {
                    title: "SGW Gully",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Manhole",
                id: 1,
                popupTemplate: {
                    title: "SGW Manhole",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "SGW Pumping Station",
                id: 0,
                popupTemplate: {
                    title: "SGW Pumping Station",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    var TSELayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/TSE_Network/MapServer",
        title: 'Network - Treated Water - OnLine',
        visible: false,
        sublayers: [
            {
                title: "TSE Sample Points",
                id: 16,
                popupTemplate: {
                    title: "TSE Sample Points",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Deep Injection Well",
                id: 15,
                popupTemplate: {
                    title: "TSE Deep Injection Well",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Sewage Treatment Works",
                id: 14,
                popupTemplate: {
                    title: "Sewage Treatment Works",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Lagoon and Tank",
                id: 13,
                popupTemplate: {
                    title: "TSE Lagoon and Tank",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Flow Meter Chamber",
                id: 12,
                popupTemplate: {
                    title: "TSE Flow Meter Chamber",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Water Tower",
                id: 11,
                popupTemplate: {
                    title: "TSE Water Tower",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Fire Hydrant",
                id: 10,
                popupTemplate: {
                    title: "Fire Hydrant",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Valve Chamber",
                id: 9,
                popupTemplate: {
                    title: "TSE Valve Chamber",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Chamber",
                id: 8,
                popupTemplate: {
                    title: "TSE Chamber",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Valve",
                id: 7,
                popupTemplate: {
                    title: "TSE Valve",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Distribution Chamber",
                id: 6,
                popupTemplate: {
                    title: "TSE Distribution Chamber",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Duct",
                id: 5,
                popupTemplate: {
                    title: "TSE Duct",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Pipe",
                id: 4,
                popupTemplate: {
                    title: "TSE Pipe",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Fittings",
                id: 3,
                popupTemplate: {
                    title: "TSE Fittings",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Cover",
                id: 2,
                popupTemplate: {
                    title: "TSE Cover",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Sump",
                id: 1,
                popupTemplate: {
                    title: "TSE Sump",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Pump Station",
                id: 0,
                popupTemplate: {
                    title: "TSE Pump Station",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    var FSLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/Foul_Sewer_Network/MapServer",
        title: 'Network - Foul Water - OnLine',
        visible: false,
        sublayers: [
            {
                title: "FS Blockage Maintenance Chamber",
                id: 27,
                popupTemplate: {
                    title: "FS Blockage Maintenance Chamber",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Septic Tank",
                id: 26,
                popupTemplate: {
                    title: "FS Septic Tank",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Greese Trap",
                id: 25,
                popupTemplate: {
                    title: "FS Greese Trap",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Sewage Treatment Works",
                id: 24,
                popupTemplate: {
                    title: "Sewage Treatment Works",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Flow Direction - Micro Tunnel Sewer",
                id: 23,
                popupTemplate: {
                    title: "Flow Direction - Micro Tunnel Sewer",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Foul Sewer Line",
                id: 22,
                popupTemplate: {
                    title: "Foul Sewer Line",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Flow Direction - Rising Main",
                id: 21,
                popupTemplate: {
                    title: "Flow Direction - Rising Main",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Valve Chamber Polygon",
                id: 19,
                popupTemplate: {
                    title: "FS Valve Chamber Polygon",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Micro Tunnel Manhole",
                id: 18,
                popupTemplate: {
                    title: "FS Micro Tunnel Manhole",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Stub Pipe",
                id: 17,
                popupTemplate: {
                    title: "FS Stub Pipe",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Rising Main",
                id: 16,
                popupTemplate: {
                    title: "FS Rising Main",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Micro Tunnel Sewer",
                id: 15,
                popupTemplate: {
                    title: "FS Micro Tunnel Sewer",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS House Connection Stub Pipe",
                id: 14,
                popupTemplate: {
                    title: "FS House Connection Stub Pipe",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS House Connection Line",
                id: 13,
                popupTemplate: {
                    title: "FS House Connection Line",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Flow Direction - Foul Sewer Line",
                id: 12,
                popupTemplate: {
                    title: "Flow Direction - Foul Sewer Line",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Pipe EndCap",
                id: 11,
                popupTemplate: {
                    title: "FS Pipe EndCap",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Pump Station",
                id: 10,
                popupTemplate: {
                    title: "FS Pump Station",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Valve Chamber Point",
                id: 9,
                popupTemplate: {
                    title: "FS Valve Chamber Point",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Valve",
                id: 8,
                popupTemplate: {
                    title: "FS Valve",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Odour control unit",
                id: 7,
                popupTemplate: {
                    title: "FS Odour control unit",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Manhole One",
                id: 6,
                popupTemplate: {
                    title: "FS Manhole One",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Lagoon Tank",
                id: 5,
                popupTemplate: {
                    title: "FS Lagoon Tank",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Manhole",
                id: 4,
                popupTemplate: {
                    title: "FS Manhole",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS House Connection Pipe EndCap",
                id: 3,
                popupTemplate: {
                    title: "FS House Connection Pipe EndCap",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Fittings",
                id: 2,
                popupTemplate: {
                    title: "FS Fittings",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Discharge Chamber",
                id: 1,
                popupTemplate: {
                    title: "FS Discharge Chamber",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Cover",
                id: 0,
                popupTemplate: {
                    title: "FS Cover",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    var SGWSchematicLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/SGW_Schematic/MapServer",
        title: 'Schematics SGW - OnLine',
        visible: false,
        sublayers: [
            {
                title: "Schematic Network",
                id: 11,
                popupTemplate: {
                    title: "Schematic Network",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Controls",
                id: 10,
                popupTemplate: {
                    title: "Controls",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Tank Lagoons",
                id: 7,
                popupTemplate: {
                    title: "Tank Lagoons",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Injection Well",
                id: 5,
                popupTemplate: {
                    title: "Injection Well",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Outfall",
                id: 4,
                popupTemplate: {
                    title: "Outfall",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Pump Station",
                id: 2,
                popupTemplate: {
                    title: "Pump Station",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Underpasses",
                id: 1,
                popupTemplate: {
                    title: "Underpasses",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "UP Pumpstation",
                id: 0,
                popupTemplate: {
                    title: "UP Pumpstation",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });


    var TSESchematicsLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/TSE_Schematics/MapServer",
        title: 'Schematics TSE - OnLine',
        visible: false,
        sublayers: [
            {
                title: "TSE Schematics",
                id: 13,
                popupTemplate: {
                    title: "TSE Schematics",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Customers",
                id: 2,
                sublayers: [
                    {
                        title: "TSE Top 10 Customers Qatar North",
                        id: 3,
                        popupTemplate: {
                            title: "TSE Top 10 Customers Qatar North",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Top 10 Customers Qatar South",
                        id: 4,
                        popupTemplate: {
                            title: "TSE Top 10 Customers Qatar South",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Top 10 Customers Qatar West New",
                        id: 5,
                        popupTemplate: {
                            title: "TSE Top 10 Customers Qatar West New",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Top 10 Customers Qatar West Old",
                        id: 6,
                        popupTemplate: {
                            title: "TSE Top 10 Customers Qatar West Old",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Customers FIFA Stadiums",
                        id: 7,
                        popupTemplate: {
                            title: "TSE Customers FIFA Stadiums",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Customers Cooling Plants",
                        id: 8,
                        popupTemplate: {
                            title: "TSE Customers Cooling Plants",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Customers Palaces",
                        id: 9,
                        popupTemplate: {
                            title: "TSE Customers Palaces",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Customers Prominent",
                        id: 10,
                        popupTemplate: {
                            title: "TSE Customers Prominent",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Customers Corniche Al Bidda Park",
                        id: 11,
                        popupTemplate: {
                            title: "TSE Customers Corniche Al Bidda Park",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    },
                    {
                        title: "TSE Customers Museums",
                        id: 12,
                        popupTemplate: {
                            title: "TSE Customers Museums",
                            outFields: ["*"],
                            content: getPopupContent,
                        }
                    }
                ]
            },
            {
                title: "TSE Closed Valves",
                id: 1,
                popupTemplate: {
                    title: "TSE Closed Valves",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "TSE Pump Station",
                id: 0,
                popupTemplate: {
                    title: "TSE Pump Station",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    var FSSchematicLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/FS_Schematic/MapServer",
        title: 'Schematics FS - OnLine',
        visible: false,
        sublayers: [
            {
                title: "FS Schematics",
                id: 4,
                popupTemplate: {
                    title: "FS Schematics",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Dishcharge Chambers",
                id: 3,
                popupTemplate: {
                    title: "FS Dishcharge Chambers",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Schematic MH",
                id: 2,
                popupTemplate: {
                    title: "FS Schematic MH",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS STW",
                id: 1,
                popupTemplate: {
                    title: "FS STW",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FS Pumpstation",
                id: 0,
                popupTemplate: {
                    title: "FS Pumpstation",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });


    var SGWTakamulCatchmentLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/SGW_Takamul_Catchment_Boundary/MapServer",
        title: 'Takamul Catchment Boundary - SGW',
        visible: false,
        sublayers: [
            {
                title: "Excluded",
                id: 4,
                popupTemplate: {
                    title: "Excluded",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar West",
                id: 3,
                popupTemplate: {
                    title: "Qatar West",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar North",
                id: 2,
                popupTemplate: {
                    title: "Qatar North",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar South",
                id: 1,
                popupTemplate: {
                    title: "Qatar South",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    var TSETakamulCatchmentLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/TSE_Takamul_Catchment_Boundary/MapServer",
        title: 'Takamul Catchment Boundary - TSE',
        visible: false,
        sublayers: [
            {
                title: "Excluded",
                id: 4,
                popupTemplate: {
                    title: "Excluded",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar West",
                id: 3,
                popupTemplate: {
                    title: "Qatar West",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar North",
                id: 2,
                popupTemplate: {
                    title: "Qatar North",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar South",
                id: 1,
                popupTemplate: {
                    title: "Qatar South",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    var FSTakamulCatchmentLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/FS_Takamul_Catchment_Boundary/MapServer",
        title: 'Takamul Catchment Boundary - FS ',
        visible: false,
        sublayers: [
            {
                title: "Excluded",
                id: 4,
                popupTemplate: {
                    title: "Excluded",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar West",
                id: 3,
                popupTemplate: {
                    title: "Qatar West",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar North",
                id: 2,
                popupTemplate: {
                    title: "Qatar North",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Qatar South",
                id: 1,
                popupTemplate: {
                    title: "Qatar South",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    

    var WeatherStation = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/FS_Hotspots/MapServer",
        title: 'Weather Stations',
        visible: false,
        sublayers: [
            {
                title: "Weather Stations",
                id: 0,
                popupTemplate: {
                    title: "FS Hotspots - OnLine",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },

        ]
    });


    var UnderpassLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/Underpass/MapServer",
        title: 'Underpass',
        visible: false,
        sublayers: [
            {
                title: "Viaduct",
                id: 9,
                popupTemplate: {
                    title: "Viaduct",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Vehicle Underpass",
                id: 8,
                popupTemplate: {
                    title: "Vehicle Underpass",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Vehicle Tunnel",
                id: 7,
                popupTemplate: {
                    title: "Vehicle Tunnel",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Vehicle Overpass",
                id: 6,
                popupTemplate: {
                    title: "Vehicle Overpass",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Vehicle Flyover",
                id: 5,
                popupTemplate: {
                    title: "Vehicle Flyover",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Vehicle Braiding Bridge",
                id: 4,
                popupTemplate: {
                    title: "Vehicle Braiding Bridge",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Bicycle Underpass",
                id: 3,
                popupTemplate: {
                    title: "Bicycle Underpass",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Camel Underpass",
                id: 2,
                popupTemplate: {
                    title: "Camel Underpass",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Pedestrian Underpass",
                id: 1,
                popupTemplate: {
                    title: "Pedestrian Underpass",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });


    var AdministrativeAreasLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/CGIS/Administrative_Areas/MapServer",
        visible: false,
        sublayers: [
            {
                title: "PWA Area Boundary",
                id: 5,
                popupTemplate: {
                    title: "PWA Area Boundary",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Muncipal Area",
                id: 4,
                popupTemplate: {
                    title: "Muncipal Area",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "MOI Election Zone - CMC",
                id: 3,
                popupTemplate: {
                    title: "MOI Election Zone - CMC",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Election District Area",
                id: 2,
                popupTemplate: {
                    title: "Election District Area",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "Zone Area",
                id: 1,
                popupTemplate: {
                    title: "Zone Area",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "District Area",
                id: 0,
                popupTemplate: {
                    title: "District Area",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    
    var RoadNetworkLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/Road_Network/MapServer",
        visible: true,
        sublayers: [
            {
                title: "Road Network by Operation Status",
                id: 1,
                popupTemplate: {
                    title: "Road Network by Operation Status",
                    outFields: ["*"],
                    content: getDefaultPopupContent,
                }
            },
            {
                title: "Road Network by Class",
                id: 0,
                popupTemplate: {
                    title: "Road Network by Class",
                    outFields: ["*"],
                    content: getDefaultPopupContent,
                }
            }
        ]
    });


    var FS_Hotspots = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/FS_Hotspots/MapServer",
        title: "FS Hotspots - OnLine",
        visible: false,
        sublayers: [
            {
                title: "FS Hotspots",
                id: 2,
                popupTemplate: {
                    title: "FS Hotspots",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },

        ]
    });

    var FM21_Equipment = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/FM21_Equipment/MapServer",
        title: "FM21 Equipment - OnLine",
        visible: false,
        sublayers: [
            {
                title: "FM21 Equipment",
                id: 2,
                popupTemplate: {
                    title: "FM21 Equipment",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },

        ]
    });


    var FM23_Hotspots = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/FMP_Hotspot/MapServer",
        title: "Ashghal Flood Mitigation Plan - OnLine",
        visible: false,
        sublayers: [
            {
                title: "PWA FMP Hotspots",
                id: 3,
                popupTemplate: {
                    title: "PWA FMP Hotspots",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },

        ]
    });

    var FMPActiveProjectsLayer = new MapImageLayer({
        url: "https://agis.ashghal.gov.qa/gisserver/rest/services/DNMC/FMP_ActiveProjects/MapServer",
        title: 'Project Affair Boundaries - OnLine',
        visible: false,
        sublayers: [
            {
                title: "RPD",
                id: 5,
                popupTemplate: {
                    title: "RPD",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "HPD",
                id: 4,
                popupTemplate: {
                    title: "HPD",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FRP",
                id: 3,
                popupTemplate: {
                    title: "FRP",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "FPS",
                id: 2,
                popupTemplate: {
                    title: "FPS",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "DNPD",
                id: 1,
                popupTemplate: {
                    title: "DNPD",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            },
            {
                title: "BC",
                id: 0,
                popupTemplate: {
                    title: "BC",
                    outFields: ["*"],
                    content: getPopupContent,
                }
            }
        ]
    });

    webMap.add(FMPActiveProjectsLayer);
    webMap.add(FM23_Hotspots);
    webMap.add(FM21_Equipment);
    webMap.add(FS_Hotspots);
    webMap.add(RoadNetworkLayer);
    webMap.add(AdministrativeAreasLayer);
    webMap.add(UnderpassLayer);
    webMap.add(WeatherStation);
    webMap.add(FSTakamulCatchmentLayer);
    webMap.add(TSETakamulCatchmentLayer);
    webMap.add(SGWTakamulCatchmentLayer);
    webMap.add(FSSchematicLayer);
    webMap.add(TSESchematicsLayer);
    webMap.add(SGWSchematicLayer);
    webMap.add(FSLayer);
    webMap.add(TSELayer);
    webMap.add(SGWLayer);

}