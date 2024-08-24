import React, { useEffect, useState } from 'react';

const KPIPanel = ({ selectedValue }) => {
  const [kpiCounts, setKpiCounts] = useState({
    Unassigned: 0,
    Assigned: 0,
    Dispatched: 0,
    'In Progress': 0,
    'Work Complete': 0,
    Resolved: 0,
    Total: 0,
  });

  useEffect(() => {
    const fetchKpiCounts = async () => {
      try {
        let featureLayerUrl = '';

        switch (selectedValue) {
          case "ECC Complaints":
            featureLayerUrl = 'https://arcdev01.dnom.local/server/rest/services/ODW_Services/ECC_Complaints/FeatureServer/4';
            break;
          case "BAU RW Complaints":
            featureLayerUrl = 'https://arcdev01.dnom.local/server/rest/services/ODW_Services/BAU_Rain_Water/FeatureServer/1';
            break;
          case "BAU NRW Complaints":
            featureLayerUrl = 'https://arcdev01.dnom.local/server/rest/services/ODW_Services/BAU_Non_Rain_Water/FeatureServer/4';
            break;
          default:
            featureLayerUrl = '';
        }

        const queryString = featureLayerUrl + "/query?where=+KPI_STATUS+IN+%28%27Unassigned%27%2C+%27Assigned%27%2C+%27Unattended%27%2C+%27Inprogress%27%2C+%27Resolved%27%2C%27Work+Complete%27%29&orderByFields=&groupByFieldsForStatistics=KPI_STATUS&outStatistics=%5B%7B%0D%0A++++%22statisticType%22%3A+%22count%22%2C%0D%0A++++%22onStatisticField%22%3A+%22KPI_STATUS%22%2C%0D%0A++++%22outStatisticFieldName%22%3A+%22status_count%22%0D%0A%7D%5D&f=pjson";
        const response = await fetch(queryString);

        const data = await response.json();

        const counts = data.features.reduce((acc, feature) => {
          const status = feature.attributes.KPI_STATUS;
          const count = feature.attributes.status_count;

          if (status === 'Unattended') {
            acc['Dispatched'] = (acc['Dispatched'] || 0) + count;
          } else if (status === 'Inprogress') {
            acc['In Progress'] = (acc['In Progress'] || 0) + count;
          } else {
            acc[status] = (acc[status] || 0) + count;
          }

          acc['Total'] += count;
          return acc;
        }, { Total: 0 });

        setKpiCounts({
          Unassigned: counts.Unassigned || 0,
          Assigned: counts.Assigned || 0,
          Dispatched: counts.Dispatched || 0,
          'In Progress': counts['In Progress'] || 0,
          'Work Complete': counts['Work Complete'] || 0,
          Resolved: counts.Resolved || 0,
          Total: counts.Total || 0,
        });
      } catch (error) {
        console.error('Error fetching KPI counts:', error);
      }
    };

    fetchKpiCounts();
    const interval = setInterval(fetchKpiCounts, 6000); // Fetch every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedValue]);

  return (
    <div style={{ width: '200px', height: 'calc(100vh)', float: 'right', display: 'flex', flexDirection: 'column' }}>
      {['Unassigned', 'Assigned', 'Dispatched', 'In Progress', 'Work Complete', 'Resolved', 'Total'].map((status, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: '1px solid #cfcfcf',
            padding: '5px',
            outlineOffset: '-2px',
            backgroundColor: '#022130',
          }}
        >
          <div>
            <p style={{ textAlign: 'left', color: '#faffcb', fontSize: '16px', margin: 0 }}>{status}</p>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '32px', margin: 0 }}>{kpiCounts[status]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPIPanel;
