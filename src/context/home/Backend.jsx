import React from 'react';
import './backend.css'
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  Title,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from 'chart.js'

ChartJS.register(
  LineElement,
  Title,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
)

// Create Component
function Backend() {
  const data = {
    labels: ["00:05","00:15","00:30","00:45", "06:15","07:00","10:00","12:00","12:15","12:30","13:00","13:45","14:15","14:30","14:45","15:00","15:30","15:45","16:00","16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00","18:15","18:30","19:00","19:15","19:30","19:45","20:00","20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:15","22:30","22:45","23:06","23:15","23:30","23:45"],
    datasets: [{
      label: "Cases",
      data: [1858999, 1859451, 1859174, 1859315, 1859323, 1859361,1859597,1859693,1859709,1859772,1859772,1860613,1860626,1861474,1861474,1862096,1862097,1862347,1862879,1865459,1865504,1865866,1865902,1866650,1866727,1867288,1868500,1868721,1869129,1869190,1869389,1870236,1870238,1872396,1873009,1873653,1874268,1874731,1875287,1876086,1876502,1878985,1879264,1879534,1879647,1879665,1880131,1880297],
      backgroundColor: 'transparent',
      borderColor: 'rgba(33, 71, 238, 1)',
      pointBorderWidth: 4,
      tension: 0.5,
    },{
      label: "Deaths",
      data: [106921, 106923, 106923, 106925, 106925, 106925,106927,106927,106927,106929,106929,106944,106945,106990,106992,107061,107061,107068,107135,107290,107314,107350,107352,107370,107426,107468,107530,107534,107580,107583,107620,107620,107620,107763,107783,107841,107846,107846,107855,107891,107907,108004,108009,108026,108029,108003,108048,108050],
      backgroundColor: 'transparent',
      borderColor: 'red',
      pointBorderWidth: 4,
      tension: 0.5, 
    },{
      label: "Tests",
      data: [18148683, 18150053, 18150053, 18150053, 18150053, 18150053,18154215,18154215,18154510,18154510,18154510,18155363,18162929,18162929,18162929,18173575,18182361,18182361,18192664,18214101,18214101,18227114,18227114,18227114,18227114,18289496,18311607,18311607,18323004,18323004,18323004,18323004,18323004,18323004,18399716,18406453,18443243,18466841,18486461,18492863,18492863,18501541,18561974,18561974,18565386,18566731,18571231,18587037],
      backgroundColor: 'transparent',
      borderColor: 'green',
      pointBorderWidth: 4,
      tension: 0.5, 
    }],
  };

  const options = {
    type: 'line',
    data: data,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 16
          }
        },
      },
      title: {
        display:true,
        text: 'USA',
        font: {
          size: 24
        }
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        title: {
          display:true,
          text: 'hours of the day',
          font: {
            size: 24
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
          /*callback: (value) => value + 'K'*/
        },
        grid: {
          borderDash: [10]
        },
        title: {
          text: 'cases, deaths and tests',
          display: true,
          font: {
            size: 24
          }
        }
      }
    }
  };
  return (
    <div className="graph">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Backend