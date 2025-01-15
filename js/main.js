let itemQuantity1 = document.querySelector('#item-1__quantity');

// Click Function
function editItem(){
    
    itemQuantity1.setAttribute('contenteditable', 'true');
    itemQuantity1.innerHTML = '0';
    itemQuantity1.classList.add = 'border-2 border-slate-500 text-[#465af3] font-bold'
}

// Change Function
// function 