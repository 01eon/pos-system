itemList.map((item) => {
    const dispItemBlock = document.createElement('div');
    dispItemBlock.className = 'flex gap-2 p-4 w-full bg-[#fefefe] border-b-2 border-slate-400';

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.className = 'w-[8rem] h-[8rem]';

    const itemContent = document.createElement('div');
    itemContent.className = 'flex flex-col gap-2 justify-center p-3';

    const itemName = document.createElement('h2');
    itemName.className = 'font-medium text-xl';
    itemName.textContent = item.name;

   
    const itemCurrency = document.createElement('span');
    itemCurrency.className = `flex gap-2 items-center font-bold text-lg text-[#465af3]`;
    itemCurrency.textContent = '₱'
    

    const itemPrice = document.createElement('span');
    itemPrice.className = 'text-3xl';
    itemPrice.textContent = item.price.toFixed(2);

    

    ///////////////////////////////////////////////////////////////

    const itemQuantityContainer = document.createElement('span');
    itemQuantityContainer.className = 'flex gap-2 items-center';

    const itemQuantity = document.createElement('div');
    itemQuantity.className = 'text-2xl';
    itemQuantity.textContent = `×`;
    
    const itemMultiplier = document.createElement('input');
    itemMultiplier.type = 'number';
    itemMultiplier.className = 'font-normal border-2 border-slate-300 rounded-xl px-1.5 text-black';
    itemMultiplier.placeholder = 0,
    itemMultiplier.min = 1

    itemQuantityContainer.appendChild(itemQuantity);
    itemQuantityContainer.appendChild(itemMultiplier);

    itemCurrency.appendChild(itemPrice);
    itemCurrency.appendChild(itemQuantityContainer);


    ///////////////////////////////////////////////////////////////


    const itemTagContainer = document.createElement('div');
    itemTagContainer.className = 'flex gap-2';

    const itemTag = document.createElement('span');
    itemTag.className = 'rounded-xl px-1.5 py-0.5 text-white';

    const tagColor = {
        'Laundry Soap' : '#2bacdf',
        'Dishwashing Liquid' : '#1faf1a',
        'DIY' : '#383838'
    }


    if (Array.isArray(item.category)) {
        // If item.category is an array, process each tag
        item.category.forEach((tag) => {
            itemTag.style.backgroundColor = tagColor[tag] || '#ccc';
        });
        // Concatenate tags into a single string for textContent
        itemTag.textContent = item.category.join(', ');
    } else {
        // If item.category is not an array, treat it as a single value
        itemTag.style.backgroundColor = tagColor[item.category] || '#ccc';
        itemTag.textContent = item.category;
    }

    itemTag.textContent = item.category;

    itemTagContainer.appendChild(itemTag);


    dispItemBlock.appendChild(itemImage);
    itemContent.appendChild(itemName);
    itemContent.appendChild(itemCurrency);
    itemContent.appendChild(itemTagContainer);
    dispItemBlock.appendChild(itemContent);
    

    const itemListContainer = document.querySelector('.itemList__container');

    itemListContainer.appendChild(dispItemBlock);

})