import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Login1 from './Login1';
import Landing from './Componenets/Landing';
import Header from './Componenets/Header';
import Hero from './Componenets/Hero';

// import{
//   Chart as ChartJs,
//   LineElemencdt,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip
// }from 'chart.js';

// ChartJs.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement
// )

function App() {
  // const [chartData, setChartData] = useState({
  //   labels: [],
  //   datasets: [
  //     {
  //       label: 'Angle',
  //       data: [],
  //       fill: false,
  //       borderColor: 'blue', // Customize color
  //     },
  //   ],
  // });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentTimeInSeconds = chartData.labels.length;
  //     const newAngleValue = Math.random() * 90; // Generate a random angle value (replace with your data source)

  //     setChartData(prevChartData => ({
  //       labels: [...prevChartData.labels, currentTimeInSeconds],
  //       datasets: [
  //         {
  //           ...prevChartData.datasets[0],
  //           data: [...prevChartData.datasets[0].data, newAngleValue],
  //         },
  //       ],
  //     }));
  //   }, 1000); // Update every one second

  //   return () => clearInterval(interval); // Cleanup the interval on component unmount
  // }, [chartData]);

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     x: {
  //       title: {
  //         display: true,
  //         text: 'Time (seconds)',
  //       },
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: 'Angle',
  //       },
  //     },
  //   },
  // };
 
  return (

    <BrowserRouter>
   
    
    <Routes>
    <Route path="/" element={ <Header/>} />
      <Route path="/login" element={<Login1 />} />
      <Route path="/home" element={<Landing />}  />
    </Routes>
    </BrowserRouter>
  );

}

export default App;
