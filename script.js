



function insert_Row() {
  let table = document.getElementById("sampleTable");

	console.log(table);

	let firstRow = table.insertRow(0);
	let cell1 = firstRow.insertCell(0);
	let cell2 = firstRow.insertCell(1);

	cell1.innerHTML = "New Cell1";
	cell2.innerHTML = "New Cell2";
}

