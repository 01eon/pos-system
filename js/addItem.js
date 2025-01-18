const tableBodyContainer = document.querySelector('.tbody');

// Item Container
let containerItem1 = document.querySelector('#item_1')
let containerItem2 = document.querySelector('#item_2')
let containerItem3 = document.querySelector('#item_3')
let containerItem4 = document.querySelector('#item_4')
let containerItem5 = document.querySelector('#item_5')
let containerItem6 = document.querySelector('#item_6')

// Add Item Button 
let addItem1 = document.querySelector('#itemAdd1');
let addItem2 = document.querySelector('#itemAdd2');
let addItem3 = document.querySelector('#itemAdd3');
let addItem4 = document.querySelector('#itemAdd4');
let addItem5 = document.querySelector('#itemAdd5');
let addItem6 = document.querySelector('#itemAdd6');

// Item Name
let nameItem1 = document.querySelector('#itemName1');
let nameItem2 = document.querySelector('#itemName2');
let nameItem3 = document.querySelector('#itemName3');
let nameItem4 = document.querySelector('#itemName4');
let nameItem5 = document.querySelector('#itemName5');
let nameItem6 = document.querySelector('#itemName6');

// Item Price
let priceItem1 = document.querySelector('#itemPrice1');
let priceItem2 = document.querySelector('#itemPrice2');
let priceItem3 = document.querySelector('#itemPrice3');
let priceItem4 = document.querySelector('#itemPrice4');
let priceItem5 = document.querySelector('#itemPrice5');
let priceItem6 = document.querySelector('#itemPrice6');

// Item Multiplier
let multiplierItem1 = document.querySelector('#itemMultiplier1');
let multiplierItem2 = document.querySelector('#itemMultiplier2');
let multiplierItem3 = document.querySelector('#itemMultiplier3');
let multiplierItem4 = document.querySelector('#itemMultiplier4');
let multiplierItem5 = document.querySelector('#itemMultiplier5');
let multiplierItem6 = document.querySelector('#itemMultiplier6');

// Item Amount
// let amountItem1 = document.querySelector('#amountItem1');
let amountItem2 = document.querySelector('#amountItem2');
let amountItem3 = document.querySelector('#amountItem3');
let amountItem4 = document.querySelector('#amountItem4');
let amountItem5 = document.querySelector('#amountItem5');
let amountItem6 = document.querySelector('#amountItem6');

let item1 = 0, item2 = 0, item3 = 0, item4 = 0, item5 = 0, item6 = 0;

console.log(`item1 at init: ${item1}`)


// function deleteRow(button){
//     const row = button.closest('tr');
//     row.remove();
//     containerItem1.classList.remove('hidden');
//     containerItem2.classList.remove('hidden');
//     containerItem3.classList.remove('hidden');
//     containerItem4.classList.remove('hidden');
//     containerItem5.classList.remove('hidden');
//     containerItem6.classList.remove('hidden');

// }

// let totalAmount = amountItem1.textContent;
let totalEl = document.querySelector('#total');
// console.log(`total at init: ${totalEl}`);


function item1Add(){
    const tableRow = `
        <tr>
            <td class="border border-slate-500 text-center">
                ${nameItem1.textContent}
            </td>
            <td id="quantityItem1" class="border border-slate-500 text-center">
                ${multiplierItem1.value}
            </td>
            <td class="border border-slate-500 text-center">
                ${priceItem1.textContent}
            </td>
            <td id='amountItem1' class="border border-slate-500 text-center">
                ${Number(multiplierItem1.value * priceItem1.textContent).toFixed(2)}
            </td>
            <td class="border border-slate-500 text-center">
                <button onclick='editBtn()' class="editBtn text-[#2736be] font-semibold hover:underline" >Edit</button>
            </td>
        </tr>
        
    `
    if (multiplierItem1.value === '' || multiplierItem1.value <= 0){
        // Leave empty
    } else {
        tableBodyContainer.innerHTML += tableRow;
        containerItem1.classList.add('hidden');

        /////////////////////////////////////////////////////////////

        let amountItem1El = document.querySelector('#amountItem1').textContent;

        // Convert amountItem1El to a NUMBER
        let amountItem1 = Number(amountItem1El)

        // Added Quantity
        item1 = amountItem1;
        console.log(`item1 after adding quantity: ${item1.toFixed(2)}`);

        // Convert totalEl from STRING to NUMBER
        let currentTotal = Number(totalEl.textContent);
        console.log(`currentTotal: ${currentTotal.toFixed(2)}`);

        // Set new value for Total
        let newTotal = currentTotal + item1;
        console.log(`newTotal: ${newTotal.toFixed(2)}`);

        totalEl.textContent = newTotal.toFixed(2);

        

        /////////////////////////////////////////////////////////////



    }
}

function item2Add(){
    const tableRow = `
        <tr>
            <td class="border border-slate-500 text-center">
                ${nameItem2.textContent}
            </td>
            <td id="quantityItem2" class="border border-slate-500 text-center">
                ${multiplierItem2.value}
            </td>
            <td class="border border-slate-500 text-center">
                ${priceItem2.textContent}
            </td>
            <td id='amountItem2' class="border border-slate-500 text-center">
                ${Number(multiplierItem2.value * priceItem2.textContent).toFixed(2)}
            </td>
            <td class="border border-slate-500 text-center">
                <button onclick='editBtn()' class="editBtn text-[#2736be] font-semibold hover:underline" >Edit</button>
            </td>
        </tr>
        
    `
    if (multiplierItem2.value === '' || multiplierItem2.value <= 0){
        // Leave empty
    } else {
        tableBodyContainer.innerHTML += tableRow;
        containerItem2.classList.add('hidden');
    }

    

}







