import React,  { useState, useEffect } from 'react';
import Axios  from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function LineChart() {

  const data = {
    labels: [],   // X graph line 
    datasets: [
      {
        label: 'Sales in K',
        data: [],   // Y graph line

        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if(!chartArea) {
            return null
          };
          if (context.dataIndex === 0) {
            return getGradient(chart);
          } else {
            // return 'red';
            return getGradient(chart);
          }
        },

        borderColor: ['#FF6D17'],
        pointBackgroundColor: ['#FF6D17'],
        pointBorderColor: ['#FF6D17'],
      }
    ]
  }

  const [dataList, setDataList] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get')
      .then((response) => {
        var years = [];
        var amount = [];
        var temp = data

        var yearString = response.data[0].years_x;
        var amountString = response.data[0].amount_y;

        // to split string to array
        yearString.split(/\s*,\s*/).forEach(function(myString) {
          years.push(parseInt(myString));   // to convert to Integer
        });
        amountString.split(/\s*,\s*/).forEach(function(myString) {
          amount.push(parseInt(myString));
        });
        
        temp.labels = years;
        temp.datasets[0].data = amount;   // datasets is an array so here using [0] syntax
        setDataList(temp);
        console.log(temp);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    console.log(dataList)
  }, [dataList]);

  const options = {
    fill: true,
    // tension: 0.4,   //For the curve of graph
    plugins: {
      // legend: false      // for Remove header catogery
    },
    borderWidth: 1,
    title: {
      display: true,
      text: 'Line Chart'
    },
    scales: {
      x: {
        grid: {
          display: true,    // for Remove grid line
        }
      },
      y: {
        min: 0,
        max: 200,
        ticks: {
          stepSize: 50,
          callback: (value) => value + ' K'   // for add 'K' with the amount
        }
      }
    }
  }

  function getGradient(chart) {
    const { ctx, chartArea: {top, bottom, left, right} } = chart;
    const gradientSegment = ctx.createLinearGradient(0, bottom, 0, top);  //xS, yS, xE, yE
    gradientSegment.addColorStop(0, 'rgba(256,256,256,0.2)');
    // gradientSegment.addColorStop(0.5, '#FF6D17');
    gradientSegment.addColorStop(1, '#FF6D17');
    return gradientSegment;
  }

  return (
    <div>
      <h1>Line chart 1</h1>
      {dataList?.labels.length>0?
        <Line data={dataList} options={options}/>
      : <h1>No Data to be displayed</h1>
      }
    </div>
  )
}

export default LineChart