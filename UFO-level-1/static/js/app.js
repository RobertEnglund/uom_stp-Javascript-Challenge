// from data.js
//var tableData = data;
var tbody = d3.select("tbody");

data.forEach(function(UFOSightings) 
{
    var row = tbody.append("tr");
    Object.entries(UFOSightings).forEach(function([key, value]) 
    {
        var cell = row.append("td");
        cell.text(value);
    });
});
