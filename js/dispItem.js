itemList.map((item, index) => {
    const tagColor = {
        'Laundry Soap': '#2bacdf',
        'Dishwashing Liquid': '#1faf1a',
        'DIY': '#383838',
        'Service' : '#ccc'
    }

    ///////////////////////////////////////////////////////////////
    // Original displayItemBlock
    ///////////////////////////////////////////////////////////////
    // const displayItemBlock = `
    //     <div id='${item.id}' class='flex gap-2 p-4 w-full bg-[#fefefe] border-b-2 border-slate-400'>
    //         <img src='${item.image}' class='w-[12rem]'/>
    //         <div class='flex flex-col gap-2 justify-center p-3'>
    //             <h2 id='itemName${index+1}' class='font-medium text-xl'>${item.name}</h2>
    //             <span class='flex gap-2 items-center justify-between font-bold text-lg text-[#465af3]'>
    //                 ₱ 
    //                 <span id='itemPrice${index + 1}' class='text-3xl'>${item.price.toFixed(2)}</span>
    //                 <span class='text-2xl'>×</span>
    //                 <input id='itemMultiplier${index + 1}' type='number' class='font-normal border-2 border-slate-300 rounded-xl px-1.5 text-black' min='1' placeholder='0'/>
    //             </span>
    //             <div class='flex gap-2'>
    //                 <span style='background-color:${tagColor[item.category] }' class='rounded-xl px-1.5 py-0.5 text-white'>${item.category}</span>
    //             </div>
    //             <button onclick='item${index + 1}Add()' id='itemAdd${index + 1}' class='bg-orange-500 hover:bg-orange-700 text-white font-bold'>Add Item</button>
    //         </div>
    //     </div>
    // `;
    ///////////////////////////////////////////////////////////////
    
    const displayItemBlock = `
        <div id='${item.id}' class='flex gap-2 p-4 w-full bg-[#fefefe] border-b-2 border-slate-400'>
            <img src='${item.image}' class='w-[12rem]'/>
            <div class='flex flex-col gap-2 justify-center p-3'>
                <h2 id='itemName${index+1}' class='font-medium text-xl'>${item.name}</h2>
                <span class='flex gap-2 items-center justify-between font-bold text-lg text-[#465af3]'>
                    ₱ 
                    <span id='itemPrice${index + 1}' class='text-3xl'>${item.price.toFixed(2)}</span>
                    <span class='text-2xl'>×</span>
                    <input id='itemMultiplier${index + 1}' type='number' class='font-normal border-2 border-slate-300 rounded-xl px-1.5 text-black' min='1' placeholder='0'/>
                </span>
                <div class='flex gap-2'>
                    <span style='background-color:${tagColor[item.category] }' class='rounded-xl px-1.5 py-0.5 text-white'>${item.category}</span>
                </div>
                <button 
                    onclick='itemAdd(
                        document.querySelector("#itemName${index + 1}"),
                        document.querySelector("#itemMultiplier${index + 1 }"),
                        document.querySelector("#itemPrice${index + 1}"),
                        document.querySelector("#${item.id}")
                    )' 
                    id='itemAdd${index + 1}' 
                    class='bg-orange-500 hover:bg-orange-700 text-white font-bold'>
                        Add Item
                </button>
            </div>
        </div>
    `;

    // console.log(`itemMultiplier${index + 1}.textContent`)



    const itemListContainer = document.querySelector('.itemList__container');
    itemListContainer.innerHTML += displayItemBlock;
})




///////////////////////////////////////////////////////////////////////////
// VERSION 1
///////////////////////////////////////////////////////////////////////////
// itemList.map((item) => {
//     const dispItemBlock = document.createElement('div');
//     dispItemBlock.className = 'flex gap-2 p-4 w-full bg-[#fefefe] border-b-2 border-slate-400';
//     dispItemBlock.id = item.id;

//     const itemImage = document.createElement('img');
//     itemImage.src = item.image;
//     itemImage.className = 'w-[rem] h-[8rem]';

//     const itemContent = document.createElement('div');
//     itemContent.className = 'flex flex-col gap-2 justify-center p-3';

//     const itemName = document.createElement('h2');
//     itemName.className = 'font-medium text-xl';
//     itemName.textContent = item.name;


//     const itemCurrency = document.createElement('span');
//     itemCurrency.className = `flex gap-2 items-center justify-between font-bold text-lg text-[#465af3]`;
//     itemCurrency.textContent = '₱'


//     const itemPrice = document.createElement('span');
//     itemPrice.className = 'text-3xl';
//     itemPrice.textContent = item.price.toFixed(2);

//     const itemQuantityContainer = document.createElement('span');
//     itemQuantityContainer.className = 'flex gap-2 items-center';

//     const itemQuantity = document.createElement('div');
//     itemQuantity.className = 'text-2xl';
//     itemQuantity.textContent = `×`;

//     const itemMultiplier = document.createElement('input');
//     for (j=0; j<=itemList.length; j++){
//         itemMultiplier.id = `item-${j}__multiplier`
//     }
//     itemMultiplier.type = 'number';
//     itemMultiplier.className = 'font-normal border-2 border-slate-300 rounded-xl px-1.5 text-black';
//     itemMultiplier.placeholder = 0,
//     itemMultiplier.min = 1

//     itemQuantityContainer.appendChild(itemQuantity);
//     itemQuantityContainer.appendChild(itemMultiplier);

//     itemCurrency.appendChild(itemPrice);
//     itemCurrency.appendChild(itemQuantityContainer);




//     const itemTagContainer = document.createElement('div');
//     itemTagContainer.className = 'flex gap-2';

//     const itemTag = document.createElement('span');
//     itemTag.className = 'rounded-xl px-1.5 py-0.5 text-white';

//     const tagColor = {
//         'Laundry Soap' : '#2bacdf',
//         'Dishwashing Liquid' : '#1faf1a',
//         'DIY' : '#383838'
//     }


//     if (Array.isArray(item.category)) {
//         // If item.category is an array, process each tag
//         item.category.forEach((tag) => {
//             itemTag.style.backgroundColor = tagColor[tag] || '#ccc';
//         });
//         // Concatenate tags into a single string for textContent
//         itemTag.textContent = item.category.join(', ');
//     } else {
//         // If item.category is not an array, treat it as a single value
//         itemTag.style.backgroundColor = tagColor[item.category] || '#ccc';
//         itemTag.textContent = item.category;
//     }

//     itemTag.textContent = item.category;

//     itemTagContainer.appendChild(itemTag);

//     // const addItem = document.createElement('button');
//     // addItem.className = 'bg-orange-500 hover:bg-orange-700 text-white font-bold';
//     // addItem.textContent = 'Add Item';
//     // for (i=0; i<=itemList.length; i++){
//         // addItem.id = `item__addItem-${i}`;
//     // }
//     const addItem = document.createElement('button');
//     for (let i=0; i<=6; i++){

//         addItem.className = 'bg-orange-500 hover:bg-orange-700 text-white font-bold';
//         addItem.textContent = 'Add Item';
//         addItem.id = `item__addItem-${i}`;

//     }





//     ////////////////////////////////////////////////////////////////////////////

//     dispItemBlock.appendChild(itemImage);
//     itemContent.appendChild(itemName);
//     itemContent.appendChild(itemCurrency);
//     itemContent.appendChild(itemTagContainer);
//     itemContent.appendChild(addItem);
//     dispItemBlock.appendChild(itemContent);


//     const itemListContainer = document.querySelector('.itemList__container');

//     itemListContainer.appendChild(dispItemBlock);

// })