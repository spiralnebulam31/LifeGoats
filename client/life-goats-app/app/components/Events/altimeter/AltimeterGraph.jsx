import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, Title, Tooltip, PointElement, LineElement, Filler } from 'chart.js';
import PropTypes from 'prop-types';

Chart.register(LinearScale, CategoryScale, Title, Tooltip, PointElement, LineElement, Filler);

// const AltimeterGraph = ({ points, title, difference, totalAltitude, totalAltitudeLoss = null, distanceCovered, isCircular = false }) => {
  const AltimeterGraph = ({ points, title, difference, totalAltitude, totalAltitudeLoss = null, distanceCovered, isCircular = false }) => {
  // Extract altitude data from points
  const altitudes = points.map(point => point.altitude);
  
  // Create labels for the chart
  const labels = points.map(point => point.location); 
  
  // Define the chart data
  const data = {
    labels: labels,
    datasets: [
      {
        label: isCircular ? `${title} altitude profile` : `${title} altitude ${difference}: ${totalAltitude}`,
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
        color: '#7BA862',
        font: {
          size: 35,
          family: 'Cinzel',
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
            return [`Altitude: ${altitude}m`];
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
    <div className="flex flex-col items-center justify-center w-full">
      {/* Graph */}
      <div className="w-full h-[350px] pb-5">
        <Line data={data} options={options} />
      </div>
      
      {/* Totals */}
      {/* <div className={`flex flex-row ${isCircular ? 'gap-8' : 'gap-8'} justify-center items-center bg-earth/10 rounded-lg p-6 w-full mt-4 shadow-md`}>
        {isCircular ? (
          <>
            <div className="flex flex-col items-center">
              <span className="text-secondary font-subtitle text-[12px] md:text-[14px] uppercase tracking-wider">
                Altitude Difference
              </span>
              <span className="text-primary font-body text-[24px] md:text-[28px] font-bold">
                {totalAltitude}m
              </span>
            </div>
            <div className="h-12 w-[2px] bg-earth/30"></div>
            <div className="flex flex-col items-center">
              <span className="text-secondary font-subtitle text-[12px] md:text-[14px] uppercase tracking-wider">
                Distance Covered
              </span>
              <span className="text-primary font-body text-[24px] md:text-[28px] font-bold">
                {distanceCovered}km
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <span className="text-secondary font-subtitle text-[12px] md:text-[14px] uppercase tracking-wider">
                Altitude {difference === 'gain' ? 'Gain' : 'Loss'}
              </span>
              <span className="text-primary font-body text-[24px] md:text-[28px] font-bold">
                {totalAltitude}m
              </span>
            </div>
            <div className="h-12 w-[2px] bg-earth/30"></div>
            <div className="flex flex-col items-center">
              <span className="text-secondary font-subtitle text-[12px] md:text-[14px] uppercase tracking-wider">
                Distance Covered
              </span>
              <span className="text-primary font-body text-[24px] md:text-[28px] font-bold">
                {distanceCovered}km
              </span>
            </div>
          </>
        )}
      </div> */}
    </div>
  );
};
AltimeterGraph.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    altitude: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired
  })).isRequired,
  title: PropTypes.string.isRequired,
  difference: PropTypes.string.isRequired,
  totalAltitude: PropTypes.number.isRequired,
  totalAltitudeLoss: PropTypes.number,
  distanceCovered: PropTypes.number.isRequired,
  isCircular: PropTypes.bool
};
export default AltimeterGraph;