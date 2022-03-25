// Create the buildChart function.
// Create a variable that holds the metadata array.
  var metadata = data.metadata;
// Create a variable that filters the metadata array for the object with the desired sample number.
  var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
// Create a variable that holds the first sample in the metadata array.
  var Result = resultArray[0];
// Create a variable that holds the washing frequency.
  var wFreq = parseFloat(Result.wfreq);
// Create the trace for the gauge chart.
  var gaugeData = {
    type: "indicator",
    value: wFreq,
    mode: "gauge+number",
    gauge: {
    axis: {range: [0,10], dtick: 2},
    bar: {color: "black"},
    steps: [
      {range: [0,2], color: "red"},
      {range: [2,4], color: "orange"},
      {range: [4,6], color: "yellow"},
      {range: [6,8], color: "yellowgreen"},
      {range: [8,10], color: "green"}
    ],
  }
};   
// Create the layout for the gauge chart.
  var gaugeLayout = { 
    title: {
      text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
      y: 0.75,
  },
  margin: {
    l: 50,
    r: 50,
    b: 0,
    t: 50,
    pad: 50
  },
};
// Use Plotly to plot the gauge data and layout.
Plotly.newPlot("gauge", [gaugeData], gaugeLayout);

