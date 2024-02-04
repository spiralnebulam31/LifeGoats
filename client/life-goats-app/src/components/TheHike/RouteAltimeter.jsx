import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const RouteAltimeter = ({ routeTimelineData, totalData, title }) => {
    // Extract altitude data from routeTimelineData
    const altitudes = routeTimelineData.map(data => data.altitude);
  
    // Create labels for the chart
    const labels = routeTimelineData.map((data, index) => `Point ${index + 1}`);
  
    // Define the chart data
    const data = {
      labels: labels,
      datasets: [
        {
          label: title,
          data: altitudes,
          borderColor: 'rgba(0, 0, 0, 0.5)',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          fill: true,
        },
      ],
    };
  
    // Define chart options
    const options = {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default RouteAltimeter;
  
