import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import './App.css';
import MapPanel from './components/MapPanel';
import KPIPanel from './components/KPIPanel';
import TablePanel from './components/TablePanel';
import AnalyisPanel from './components/AnalysisPanel';
import ChartPanel from './components/ChartPanel';
import Auth from './components/Auth';
import Navbar from './components/Navbar';

function App() {
  const [selectedValue, setSelectedValue] = React.useState("ECC Complaints");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const zoom = useSelector((state) => state.map.zoom); // Get zoom from the state

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    "ECC Complaints",
    "BAU RW Complaints",
    "BAU NRW Complaints"
  ];

  if (!isAuthenticated) {
    return <Auth />;
  }

  return (
    <div className="App">
      <Navbar selectedValue={selectedValue} handleChange={handleChange} options={options} />
      <div style={{ display: "flex", position: "relative" }}>
        {/* Zoom level display */}
        <div 
          style={{ 
            position: "absolute", 
            top: 20, 
            left: 50, 
            backgroundColor: "rgba(0, 0, 0, 0.7)", 
            color: "white", 
            padding: "5px 10px", 
            borderRadius: "5px",
            zIndex: 1000 
          }}
        >
           Zoom Level: {zoom}
        </div>
        <div style={{ flex: 1 }}>
          <MapPanel />
          <TablePanel />
        </div>
        <div>
          <KPIPanel selectedValue={selectedValue} />
        </div>
        <div>
          <ChartPanel selectedValue={selectedValue} />
          <AnalyisPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
