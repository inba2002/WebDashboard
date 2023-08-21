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
  // const [data1,setData]=useState([]);
  // const [sdata,setSdata]=useState([]);
  // const [seqdata,setSeqdata]=useState([])
  // const [datametrics, setdatametrics] = useState([]);
  // const [arr,setArr]=useState([]);
  // const [garr,setGArr]=useState([]);
  // var count=0,ct,fcount=0,st=0;
  // const [gdata,setGdata]=useState([
  //   {angle:0,time:0}
  // ]);
  // const [gr,setGr]=useState([1.5,2,5,2.5,3.8,10,11]);
  // const [dr,setDr]=useState([8,7.8,2.3,5,6,10,24]);

  // const chartRef = useRef(null);


  // async function fetchMetrics(data) {
  //   const response = await fetch("https://api-h5zs.onrender.com/metrics", {
  //     method: "POST",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // }
  // useEffect(() => {
  // fetch(`https://api-h5zs.onrender.com/get-user/patient/test123`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log("Response",data);
  //       // sereiesMetrics(data.data).then((metrics) => {
  //       //   setMetrics(metrics);
  //       // });
  //       fetchMetrics(data.data).then((sdata) => {
  //         setSdata(sdata);
  //         console.log("Sdata",sdata);
  //         console.log("length",sdata.length);
  //         console.log("Name",sdata.attibutename);
  //         setGArr([]);
  //         //for (var i = 0; i < sdata.length; i++) {
  //           console.log("Data",0);
  //           if (sdata[5].series.length>0){
  //              console.log("Entered",sdata[5].series.length);
  //              for(var j=0;j<100;j++){
  //               //console.log("Data",j,sdata[i].series[j]);
  //               //seqdata.push(parseInt(sdata[i].series[j]))
  //               arr.push((sdata[5].series[j]));
  //              }
  //             //console.log("Array",arr);
  //             for(var k=0;k<arr.length;k++){
  //               garr.push(arr[k]);
  //             }
  //             fcount=ct;
  //             st=st+ct;
  //             console.log("Final Array",garr)
  //             setArr([]);
              
  //           }
  //         //}
  //         // setSeqdata(seqdata)
  //         // setdatametrics(sdata.map((item)=>item.data_id))
  //       });
  //       setInterval(() => {
  //         fetchMetrics(data.data).then((sdata) => {
  //           setData(sdata);
  //         });
  //       }, 5000);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   return () => {
  //     clearInterval();
  //   };
  // }, [gdata]);



  // const downloadAsPdf = async () => {
  //   try {
  //     const chartContainer = chartRef.current;

  //     const canvas = await html2canvas(chartContainer, {
  //       scale: 2,
  //     });

  //     const imgData = canvas.toDataURL('image/jpeg');

  //     const pdf = new jsPDF();
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
  //     pdf.save('chart.pdf');
  //   } catch (error) {
  //     console.error('Error generating PDF:', error);
  //   }
  // };

  // const addNumberToArray = () => {
  //   // const randomNumber1 = Math.floor(Math.random() * 10);
  //   // const randomNumber2 = new Date().getSeconds();
  //   // console.log(randomNumber2);
  //   // setGr(prevArray => [...prevArray, randomNumber1]);
  //   // setDr(prevArray => [...prevArray, randomNumber2]);
  // };

  // const graphdata={
  //   labels:dr,
  //   datasets:[{
  //     data: gr,
  //     backgroundColor: 'transparent',
  //     borderColor: "#26c6d",
  //     pointBorderColor: 'transparent',
  //     pointBorderWidth:4,
  //     tension:0.5,
  //   }]
  // };

  // const options={
  //   plugins: {
  //     legend: false,
  //     tooltip: {
  //       callbacks: {
  //         label: context => `Angle: ${context.formattedValue}`,
  //       },
  //     },
  //   },
  //   scales:{
  //     x:{
  //       min:0,
  //       max:10,
  //       max: gr.length-1,
  //       ticks:{
  //         stepsize:10
  //       },
  //       grid:{
  //         display:false
  //       }
  //     },
  //     y:{
  //       min:0,
  //       max:30,
  //       ticks:{
  //         stepsize:10,
  //       },
  //       grid:{
  //         borderDash:[10]
  //       }
  //     }
  //   }
  // };

  //const interval= setInterval(addNumberToArray,10000);


  
  // useEffect(()=>{
  //   const token="True";
  //   console.log("token",token);
  //   if(token){
  //     const axiosConfig={
  //       headers:{
  //           Accept: "application/json",
  //           Authorization: `Bearer ${token}`
  //       }
  //     };
  //     axios.get('https://api-h5zs.onrender.com/get-user/patient/a',axiosConfig).then((res)=>{
  //       setData(res.data.data)
  //       console.log("Response",res);
  //     })
  //       console.log("Data1",data1);
  //       console.log(data1.length);
  //     if(data1.length>0){
  //       {
  //         console.log("Entered");
  //         data1.filter((item)=>{
  //           if(item=="checksamp")
  //           return item
  //         })
  //         .map((item)=>{
  //           console.log("Item type",typeof(item));
  //           fetchMetrics(item).then((sdata)=>{
  //             setSdata(sdata)
  //           })
  //           console.log(sdata);
  //       });
  //     }
  //   }
  // }},[])
  // async function fetchMetrics(data) {
  //   const response = await fetch("https://api-h5zs.onrender.com/metrics", {
  //     method: "POST",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // }
  return (
    // <div className='w-full h-[500px] pr-[5rem]'>
    //   <div ref={chartRef}>
    //   <Line data={graphdata} options={options} ></Line>
    //   </div>
    //   <button onClick={addNumberToArray}>Click to add data</button>
    //   <button onClick={downloadAsPdf}>Download Chart as PDF</button>
    // </div>
    <>
    <Landing/>
    </>
  );

}

export default App;
