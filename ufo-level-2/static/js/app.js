// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
// form.on("submit",runEnter);
d3.select("body").on("keypress", function(){
    if(d3.event.keyCode===32 || d3.event.keyCode ===13){
        runEnter();
    }
});

buildtable(tableData);

//Arrow Function for table
function buildtable(tdata){ 
    tbody.html("");
    tdata.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  if(tdata.length==0){
      tbody.html("no data found")
  }
}

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputdate = d3.select("#datetime").property("value");
  var inputcity = d3.select("#city").property("value");
  var inputstate = d3.select("#state").property("value");
  var inputcountry = d3.select("#country").property("value");
  var inputshape = d3.select("#shape").property("value");

  var filteredData = tableData
  if(inputdate){
      filteredData= filteredData.filter(ufoSighting => ufoSighting.datetime === inputdate);
    }
  if(inputcity){
    filteredData= filteredData.filter(ufoSighting => ufoSighting.city === inputcity);
    }
  if(inputstate){
        filteredData= filteredData.filter(ufoSighting => ufoSighting.state === inputstate);
    }
  if(inputcountry){
        filteredData= filteredData.filter(ufoSighting => ufoSighting.country === inputcountry);
    }
  if(inputshape){
        filteredData= filteredData.filter(ufoSighting => ufoSighting.shape === inputshape);
    }

  console.log(filteredData);

  buildtable(filteredData);

}