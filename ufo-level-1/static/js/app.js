// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the table and table body 

var table = d3.select("table");
var tbody = d3.select("tbody");


// Select the filter button 

var button = d3.select("#filter-btn");
var form = d3.select("form");

// Activate the filter button click mechanism 
button.on("click", runEnter);
form.on("submit", runEnter);
d3.select("body").on("keypress", function(){
    if(d3.event.keycode===32 || d3.event.keyCode ===13){
        runEnter();
    }
});

// Build the table 

buildtable(table);

// Apply functionality to table 

function buildtable(tdata){
    tbody.html("");
    tdata.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
// Run the form 
function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

    console.log(filteredData);
    buildtable(filteredData);
}
