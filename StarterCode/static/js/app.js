// Use the D3 library to read in `samples.json`.
d3.json("samples.json").then(function(bellybuttondata) {

  // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  console.log(bellybuttondata)
  var trace1 = {
    y: bellybuttondata.samples[0].otu_ids.slice(0, 9).reverse().map(x => `OTU ${x}`),
    x: bellybuttondata.samples[0].sample_values.slice(0, 9).reverse(),
    type: "bar",
    orientation: 'h',
    text: bellybuttondata.samples[0].otu_labels.slice(0, 9).reverse(),
  };
  
  var data = [trace1];
  
  Plotly.newPlot("bar", data, {});

  var trace1 = {
    x: bellybuttondata.samples[0].otu_ids,
    y: bellybuttondata.samples[0].sample_values,
    mode: 'markers',
    text: bellybuttondata.samples[0].otu_labels,
    marker: {
      size: bellybuttondata.samples[0].sample_values,
      color: bellybuttondata.samples[0].otu_ids
    }
  };
  
  var data = [trace1];
  
  Plotly.newPlot('bubble', data, {});

  //   // Use D3 to select the dropdown menu
  //   var dropdownMenu = d3.select("#selDataset");
  //   // Assign the value of the dropdown menu option to a variable
  //   var dataset = dropdownMenu.node().value;
});

