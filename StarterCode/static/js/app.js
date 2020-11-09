// Use the D3 library to read in `samples.json`.
d3.json("samples.json").then(function(bellybuttondata) {

  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  dropdownMenu
    .selectAll('option')
    .data(bellybuttondata.names)
    .enter()
    .append('option')
    .text(x => x)
    .attr("value", x => x);

  var selectedItem = dropdownMenu.node().value;
  var selectedItemIndex = bellybuttondata.names.indexOf(selectedItem);
  d3.select("#demographicInfo")
    .selectAll('div')
    .data(Object.entries(bellybuttondata.metadata[selectedItemIndex]))
    .enter()
    .append('div')
    .text(x => `${x[0]}: ${x[1]}`);

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

  // Create a bubble chart that displays each sample.
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
});

