// import React from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


interface chartdata  {
  label :string[] ,
  number: number[] ,
  color :string [] ,
}

interface charttype {
  chartdata :chartdata
}



const BarChart = ({chartdata}:charttype) => {
  console.log(chartdata);
  
  const data = {
    labels: chartdata.label,
    datasets: [
      {
        label: '',
        data: chartdata.number,
        backgroundColor:chartdata.color,
        borderRadius: 8,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#444',
          font: { size: 14 },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#444',
        },
      },
      y: {
        ticks: {
          color: '#444',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <motion.div

    className='barsizeset h-[350px] lg:w-[400px] rounded-xl'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{width: '100%', maxWidth: '800px', margin: 'auto' }}
    >
      <Bar data={data} options={options} />
    </motion.div>
  );
};

export default BarChart;