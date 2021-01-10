// data from data.js
var tableData = data;
// data from html
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDatetime = d3.select("#datetime");
var inputCity = d3.select("#city");

// Clear and load sightings table when called
function loadTable(dataX) {
// Clear table 
    tbody.html("");
// Load table
dataX.forEach(function(UFOSightings) 
    {var row = tbody.append("tr");
     Object.entries(UFOSightings).forEach(function([key, value]) 
        {var cell = row.append("td");
         cell.text(value);
        });
    });
    console.log("Table loaded");
};

// Load sightings table with initial set of data
loadTable(tableData)

// Reload sightings table based on user input 
button.on("click", function() {
// get date entered
    var newDatetime = inputDatetime.property("value").trim();
// subset of sightings
    var dataSubset = tableData.filter(tableData => tableData.datetime === newDatetime);
// reload sightings table
    loadTable(dataSubset)
});
        
