function editRow(rowID) {
    const rowToDelete = document.querySelector(`#tableRow${rowID}`);
    const containerEl = document.querySelector(`#item_${rowID}`)
    if (rowToDelete) {
        // Retrieve the amount value from the row before deletion
        const amountValue = parseFloat(rowToDelete.children[3].textContent);
        tableRowCounter--;
        // console.log(`tableRowCounter: ${tableRowCounter}`);
        // Decrease the total amount
        // currentTotal = Number(totalEl.textContent);
        

        // let newTotal = currentTotal - amountValue.toFixed(2);
        // totalEl.textContent = newTotal.toFixed(2);

        currentTotal -= amountValue;
        totalEl.textContent = currentTotal.toFixed(2);
        
        containerEl.classList.remove('hidden');

        console.log('');
        console.log(`currentTotal after editing item: ${currentTotal.toFixed(2)}`);
        console.log(`amountValue after editing item: ${amountValue.toFixed(2)}`);
        console.log(`newTotal after editing item: ${newTotal.toFixed(2)}`);


        // Remove the row from the table
        rowToDelete.remove();
    } else {
        console.error(`Row with ID tableRow${rowID} not found.`);
    }
}
