import React, { useState, useEffect } from 'react';
import { Chart, Bubble } from "react-chartjs-2";
import BubbleChart from '@weknow/react-bubble-chart-d3';
  
const Trending = (props) => {

  return (
	  <>
	  <div className="bubble-chart">
    <div className="bubble x1"></div>
    <div className="bubble x2"></div>
    <div className="bubble x3"></div>
    <div className="bubble x4"></div>
	<div className="bubble-negative x11"></div>
</div>
	  </>
  )
}

export default Trending