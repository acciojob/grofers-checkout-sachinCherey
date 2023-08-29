const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

	  const getSumBtn = document.getElementById("getSumBtn");
    const table = document.querySelector("table");

    getSumBtn.addEventListener("click", () => {
      const valueCells = document.querySelectorAll(".price");

      let total = 0;

      // Loop through each cell and add its value to the total
      valueCells.forEach(cell => {
        const cellValue = parseInt(cell.textContent);
        if (!isNaN(cellValue)) {
          total += cellValue;
        }
      });

      // Create a new row and cell for the sum
      const newRow = table.insertRow();
      const newCell = newRow.insertCell();

      // Set the cell's content to the total sum
      newCell.textContent = "Total: " + total;
    });
  
};

getSumBtn.addEventListener("click", getSum);

