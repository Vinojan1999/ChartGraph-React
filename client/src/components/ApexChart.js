import React,  { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function ApexChart() {

    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }];

    const options = {
        chart: {
            height: "auto",
            type: 'area',
            background: '#fff',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            },
            toolbar: {
                show: false,
            }
            
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            // dashArray: 3,    // dot dot line
            color: '#FF6D17',
        },
        xaxis: {
            // type: 'Numbers',
            min: 1,
            max: 7,
            categories: [1,2,3,4,5,6,7],
        },
        yaxis: {
            min: undefined,
            max: undefined
        },
    };

  return (
    <div>
        <h2>ApexChart</h2>
        <br/>
        <ReactApexChart 
            series={series}
            options={options}
            type="area"
            height={350}
        />
    </div>
  )
}

export default ApexChart