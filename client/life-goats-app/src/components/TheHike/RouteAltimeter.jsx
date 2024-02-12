import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const RouteAltimeter = ({ routeTimelineData, totalAltitude, title, difference }) => {
    // Extract altitude data from routeTimelineData
    const altitudes = routeTimelineData.map(data => data.altitude);
  
    // Create labels for the chart
    const labels = routeTimelineData.map(data => data.location); 
  
    // Define the chart data
    const data = {
      labels: labels,
      datasets: [
        {
          label: title + ' altitude ' + difference + ': ' + totalAltitude,
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
          title: {
            display: true,
            text: 'Altimeter (m)',
            color: '#7BA862',
            font: {
              size: 18,
              family: 'Neucha',
              weight: 'bold',
            }
          },
          ticks: {
            color: '#303848',
            font: {
              size: 14,
              family: 'Catamaran',
              style: 'normal',
              weight: 'bold',
            }
          }
        },
        x: {
            ticks: {
              color: '#303848',
              font: {
                size: 14,
                family: 'Catamaran',
                style: 'normal',
                weight: 'bold',
              }
            }
          },
        },
      plugins: {
        title: {
            display: true,
            text: 'The ' + title,
            color: '#4D3D11',
            font: {
              size: 50,
              family: 'Luckiest Guy',
              weight: 'bold',
            }
          },
        tooltip: {
            titleFont: {
                size: 14,
                family: 'Cinzel',
                style: 'normal',
                weight: 'bold',
                color: '#e6ecf0',
              },
              bodyFont: {
                size: 12,
                family: 'Catamaran',
                style: 'normal',
                weight: 'normal',
                color: '#e6ecf0',
              },
              backgroundColor: '#607DFA',
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
      <div className="flex flex-col items-center justify-center w-full lg:w-[50%] xl:w-[60%] h-[350px] pb-10">
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default RouteAltimeter;
