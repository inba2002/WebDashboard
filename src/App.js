import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Login1 from './Login1';
import Landing from './Componenets/Landing';
import{
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
}from 'chart.js';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function App() {
 
  return (

    <>
    <Landing/>
    </>
  );

}

export default App;
