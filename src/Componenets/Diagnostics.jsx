import React,{useState,useEffect} from 'react'
import Graph from '../Assets/graph.png'

const Diagnostics = () => {
    const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [downloadEnabled, setDownloadEnabled] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + (100 / timer));
        console.log("Progress",progress);
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timer]);

  useEffect(() => {
    if (timer <= 0) {
      setIsRunning(false);
      setDownloadEnabled(true);
    }
  }, [timer]);

  const startTimer = () => {
    setIsRunning(true);
    setProgress(0);
    setDownloadEnabled(false);
    setTimer(120); // Reset timer to 2 minutes
  };

  const stopTimer = () => {
    setIsRunning(false);
    setProgress(0);
    setDownloadEnabled(true);
  };

  const downloadGraph = () => {
    // Replace this with actual logic to download the graph image
    alert('Download the graph image here');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl  bg-white p-6 mb-4 flex flex-col items-center">
        <div>
          <p class="max-w-2xl mb-6 font-regular text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">You can start your graph by Clicking on the <span className='font-bold text-green-700'>Start button</span> below once the graph is generated you will be able to download it by clicking on <span className='font-bold text-blue-500'>Download button</span> below.<br/><span className='font-bold'>Note:</span>You can generate the graph upto 2 minutes only. If multiple graphs needed you can repeat the same process.</p>
        </div>
      <div className="mb-5 text-2xl">
          Timer: {Math.floor(timer / 60)}:{timer % 60}
        </div>
        <div className="w-full h-4 mx-auto mb-4 relative rounded bg-teal-200">
          <div
            style={{ width: `${progress*0.187}%` }}
            className="h-full bg-teal-500"
          ></div>
        </div>
        <div className="w-full h-full bg-white  mb-4 flex items-center justify-center">
          {/* Replace with your graph display content */}
          <img
            src={Graph}
            alt="Graph"
            className="max-w-full max-h-full"
          />
        </div>
        <div className="flex justify-center space-x-4">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
            >
              Start
            </button>
          ) : (
            <button
              onClick={stopTimer}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              Stop
            </button>
          )}
          <button
            onClick={downloadGraph}
            disabled={!downloadEnabled}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${downloadEnabled ? 'hover:bg-blue-600 focus:ring focus:ring-blue-300' : 'cursor-not-allowed opacity-50'}`}
          >
            Download
          </button>
        </div>
      </div>
    </div>

  )
}

export default Diagnostics
