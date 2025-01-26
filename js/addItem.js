const tableBodyContainer = document.querySelector('.tbody');

let containerItem1 = document.querySelector('#item_1');
let containerItem2 = document.querySelector('#item_2');
let containerItem3 = document.querySelector('#item_3');
let containerItem4 = document.querySelector('#item_4');
let containerItem5 = document.querySelector('#item_5');
let containerItem6 = document.querySelector('#item_6');


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

let item1 = 0,
    item2 = 0,
    item3 = 0,
    item4 = 0,
    item5 = 0,
    item6 = 0;

// console.log(`item1 at init: ${item1}`)

let tableRowCounter = 0;
// console.log('tableRowCounter at Init:', tableRowCounter);

///////////////////////////////////////////////////////////////
// Price Variables
///////////////////////////////////////////////////////////////

let totalEl = document.querySelector('#total');
let newTotal = 0;


// Convert totalEl from STRING to NUMBER
let currentTotal = Number(totalEl.textContent);
// console.log('currentTotal', currentTotal);




///////////////////////////////////////////////////////////////
// DRY Principle (DO NOT EDIT)
///////////////////////////////////////////////////////////////


function itemAdd(itemName, multiplierEl, priceEl, containerEl){
    tableRowCounter++;
    // console.log(`tableRowCounter: ${tableRowCounter}`);
    
    const itemNameText = itemName.textContent;
    const multiplierValue = Number(multiplierEl.value);
    const priceValue = Number(priceEl.textContent).toFixed(2);
    const amountValue = Number(multiplierValue * priceValue).toFixed(2);
    const tableRow = `
        <tr id='tableRow${tableRowCounter}'>
            <td class='border border-slate-500 text-center'>${itemNameText}</td>
            <td class='border border-slate-500 text-center'>${multiplierValue}</td>
            <td class='border border-slate-500 text-center'>${priceValue}</td>
            <td class='border border-slate-500 text-center'>${amountValue}</td>
            <td class='border border-slate-500 text-center'>
                <button onclick='editRow(${tableRowCounter})' class="editBtn text-[#2736be] font-semibold hover:underline" >Edit</button>
            </td>

        </tr>
    `

    tableBodyContainer.innerHTML += tableRow;
    containerEl.classList.add('hidden');

    // Increase Total
    currentTotal += Number(amountValue);
    totalEl.textContent = currentTotal.toFixed(2);

    // console.log('');
    // console.log(`currentTotal after adding item: ${currentTotal.toFixed(2)}`);
    // console.log(`amountValue after adding item: ${amountValue}`);
    // console.log(`newTotal after adding item: ${newTotal.toFixed(2)}`);



    
}

