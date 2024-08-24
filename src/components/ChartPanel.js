import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ChartPanel = ({ selectedValue }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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

        const response = await axios.get(featureLayerUrl + "/query?where=+KPI_STATUS+IN+%28%27Unassigned%27%2C+%27Assigned%27%2C+%27Unattended%27%2C+%27Inprogress%27%2C+%27Resolved%27%2C%27Work+Complete%27%29&orderByFields=&groupByFieldsForStatistics=KPI_STATUS&outStatistics=%5B%7B%0D%0A++++%22statisticType%22%3A+%22count%22%2C%0D%0A++++%22onStatisticField%22%3A+%22KPI_STATUS%22%2C%0D%0A++++%22outStatisticFieldName%22%3A+%22status_count%22%0D%0A%7D%5D&f=pjson");
        
        const resultData = response.data.features.map(feature => ({
          label: feature.attributes.KPI_STATUS,
          value: feature.attributes.status_count,
          color: getColor(feature.attributes.KPI_STATUS), // Define getColor to map status to color
          cutout: '64%'
        }));

        setChartData(resultData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [selectedValue]);

  const getColor = (status) => {
    switch (status) {
      case 'Assigned': return '#68D2E0';
      case 'Inprogress': return '#087E92'; // fixed the label from 'In Progress' to 'Inprogress'
      case 'Resolved': return '#47BCF5';
      case 'Unassigned': return '#FBE66A';
      case 'Unattended': return '#F29157'; // updated to correct color
      case 'Work Complete': return '#C8501D'; // adjusted the color according to your previous input
      default: return '#000000';
    }
  };

  const options = {
    plugins: {
      legend: false,
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          }
        }
      },
      datalabels: {
        color: 'white',
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          weight: 'bold'
        },
        textAlign: 'center',
        anchor: 'end',
        align: 'start',
        offset: 15,
        clip: true
      },
      responsive: true,
    },
    cutout: chartData.map((item) => item.cutout),
  };

  const finalData = {
    labels: chartData.map((item) => item.label),
    datasets: [
      {
        data: chartData.map((item) => Math.round(item.value)),
        backgroundColor: chartData.map((item) => item.color),
        borderColor: chartData.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(chartData.length).fill(true),
      },
    ],
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(33vh)',
      width: '250px',
      alignItems: 'center',
      justifyContent: 'center',
      outline: '1px solid #cfcfcf',
      padding: '50px',
      outlineOffset: '-2px',
      backgroundColor: '#022130',
    }}>
      <Doughnut data={finalData} options={options} />
    </div>
  );
};

export default ChartPanel;
