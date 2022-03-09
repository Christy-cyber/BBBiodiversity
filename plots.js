function init() {
    var selector = d3.select("#selDataset");
  
    //read data from samples.json using d3.json() method; arbitrary
    // name of "data" is assigned
    d3.json("samples.json").then((data) => {
      console.log(data);
      //see "names" array from console.log browser localhost:8000
      var sampleNames = data.names;
      //use forEach to call on sampleNames array and append each id
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
} 

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.id);
      PANEL.append("h6").text(result.ethnicity);
      PANEL.append("h6").text(result.gender);
      PANEL.append("h6").text(result.age);
      PANEL.append("h6").text(result.location);
      PANEL.append("h6").text(result.bbtype);
      PANEL.append("h6").text(result.wfreq);
      
    });
  }