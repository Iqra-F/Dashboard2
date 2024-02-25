import React from 'react';
import ReactECharts from 'echarts-for-react';

const ColChart = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: [ 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday','Monday', 'Tuesday'],
      axisLabel: {
        rotate: 45, // Rotate labels by 45 degrees
        textStyle: {
          color: function (value, index) {
            // Define colors for each weekday here
            const colors = ['bronze', 'teal', 'purple', 'orange', 'green', 'red', 'blue'];
            return colors[index];
          }
        }
      }
      
    },
    yAxis: {
      type: 'value',
      min: 0, // Optional: Set minimum value for Y-axis
      max: 5, // Optional: Set maximum value for Y-axis
    },
    series: [{
      data: [0, 2, 0, 0, 5, 0, 0], // Example data for the chart
      type: 'bar', // Use 'bar' for column/bar chart
      itemStyle: {
        color: 'coral',
        // Change the color of the bars here (e.g., red)
      }
    }]
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ColChart;