// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("city");
var resetbtn = d3.select("#reset-btn");
var column = ["datetime", "city", "state", "country", "shape", "comment"]



tbody = d3.select("tbody")
console.log("Hello Alien World")


function displayData(parameter){
    tbody.text("")
    parameter.forEach(function(Alien_Sighting){
        new_tr = tbody.append("tr")
        Object.entries(Alien_Sighting).forEach(function([key, value]){
            new_td = new_tr.append("td").text(value)
        })
})}

displayData(tableData)

console.log("Hello NASA")

var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("Hello World")

d3.event.preventionDefault();


var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");

console.log(dateInput.property("value"));
console.log(cityInput.property("value"));
console.log(stateInput.property("value"));
console.log(countryInput.property("value"));
console.log(shapeInput.property("value"));


var filtered = tableData.filter(Alien_Sighting =>{
    return (Alien_Sighting.datetime===dateInput.property("value")  || !dateInput.property("value")) &&
        (Alien_Sighting.city===cityInput.property("value")  || !cityInput.property("value")) &&
        (Alien_Sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
        (Alien_Sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
        (Alien_Sighting.shape===shapeInput.property("value")  || !shapeInput.property("value")) 
})

displayData(filtered);


});


var filterInputs = d3.selectAll('.form-control');
function clearEntries() {
    filters = {};
    filterInputs.groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    })
};


var clearButton = d3.select("#clear");
clearButton.on('click', function() {
    d3.event.preventDefault();
    clearEntries()
});