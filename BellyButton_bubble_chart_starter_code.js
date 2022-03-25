// Bar and Bubble charts
var bubbleData = {
  x: otuID,
  y: sampleValue,
  type: "bubble",
  text: otuLabel,
  hoverinfo: "x+y+text",
  mode: "markers",
  marker: {size: sampleValue, color: otuID, colorscale: "Earth"}
};
// Create the layout for the bubble chart.
var bubbleLayout = {
  title: {
    text: "<b>Bacteria Cultures Per Sample</b>",
    y:0.95,
  },
  xaxis: {title: "OTU ID"},
  margin: {
    l: 75,
    r: 50,
    b: 60,
    t: 60,
    pad: 10
  },
  hovermode: "closest"
};
// Use Plotly to plot the data with the layout.
Plotly.newPlot("bubble", [bubbleData], bubbleLayout);

