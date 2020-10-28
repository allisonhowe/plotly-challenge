// Use the D3 library to read in `samples.json`.
d3.json("samples.json").then(function(bellybuttondata) {

  // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  console.log(bellybuttondata)
  var trace1 = {
    x: bellybuttondata.samples[0].otu_ids.slice(0, 9).map(x => `OTU ${x}`),
    y: bellybuttondata.samples[0].sample_values.slice(0, 9),
    type: "bar"
  };
  
  var data = [trace1];
  
  var layout = {
    title: "'Bar' Chart"
  };
  
  Plotly.newPlot("bar", data, layout);

  //   // Use D3 to select the dropdown menu
  //   var dropdownMenu = d3.select("#selDataset");
  //   // Assign the value of the dropdown menu option to a variable
  //   var dataset = dropdownMenu.node().value;
});

