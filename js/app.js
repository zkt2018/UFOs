// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a new function 
function buildTable(data) {
    // Clear the existing data to create a fresh table
    tbody.html("");


    // loop through each object in the array
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Declare a variable to append a row to the HTML table
        let row = tbody.append("tr");
        // Reference to the array of objects and to have the values to go into the dataRow
        // forEach((val) specify one object per row - val represents each item in the object
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // Create a variable to append data to a table
            let cell = row.append("td");
            // Add each value from the object into a cell
            cell.text(val);
        });

    });
}