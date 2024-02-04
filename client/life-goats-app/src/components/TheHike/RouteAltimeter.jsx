import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const RouteAltimeter = ({ routeTimelineData, totalData, title }) => {
    // Extract altitude data from routeTimelineData
    const altitudes = routeTimelineData.map(data => data.altitude);
  
    // Create labels for the chart
    const labels = routeTimelineData.map(data => data.location); 
  
    // Define the chart data
    const data = {
      labels: labels,
      datasets: [
        {
          label: title,
          data: altitudes,
          borderColor: '#4D3D11',
          backgroundColor: '#7BA862',
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
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const altitude = context.parsed.y;
  
              return [
                `Altitude: ${altitude}`,
              ];
            }
          }
        }
      },
      pointStyle: 'circle',
        radius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#c8f2b1',
        pointBorderColor: '#4D3D11',
        pointHoverBackgroundColor: '#c8f2b1',
        pointHoverBorderColor: '#4D3D11',
        pointHoverBorderWidth: 3,
        pointBorderWidth: 2,

    };
  
    return (
      <div className="flex flex-col items-center justify-center w-full pb-10">
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default RouteAltimeter;
