import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import MapPanel from './components/MapPanel';
import KPIPanel from './components/KPIPanel';
import TablePanel from './components/TablePanel';
import AnalysisPanel from './components/AnalysisPanel';
import ChartPanel from './components/ChartPanel';
import Auth from './components/Auth';
import Navbar from './components/Navbar';

const GOOGLE_CLIENT_ID = 'your-google-client-id.apps.googleusercontent.com'; // Replace with your client ID

function App() {
  const [selectedValue, setSelectedValue] = useState("ECC Complaints");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    "ECC Complaints",
    "BAU RW Complaints",
    "BAU NRW Complaints"
  ];

  if (!isAuthenticated) {
    // Show login page if the user is not authenticated
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Auth />
      </GoogleOAuthProvider>
    );
  }

  return (
    <div className="App">
      <Navbar selectedValue={selectedValue} handleChange={handleChange} options={options} />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <MapPanel />
          <TablePanel />
        </div>
        <div>
          <KPIPanel selectedValue={selectedValue} />
        </div>
        <div>
          <ChartPanel selectedValue={selectedValue} />
          <AnalysisPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
