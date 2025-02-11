import React, { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
);

const BarChartAPI = () => {
// API data

const [items, setItems] = useState([]);
var baseURL = "http://vending.us-east-1.elasticbeanstalk.com/items";

useEffect(() => {
  const fetchItems = async () => {
    await fetch(baseURL,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
  }).then(response => {
      response.json().then((json) => {
        setItems(json);
        console.log(json);
      })
    }).catch(err => {
      console.log(err);
    });
  };  
    fetchItems();
}, [baseURL]);

const data = {
    labels: items.map(item => item.name),
  datasets: [{
    label: 'Vending Machine Dataset',
    data: items.map(item => item.price),
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
}

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


    return (
        <div className="chart-container">
        <h1>Bar Chart Dynamic API Data</h1>
        <Bar 
            data={data}
            height={100}
            options={config}
        />
        </div>
    );
}

export default BarChartAPI;