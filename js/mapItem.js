itemList.map((list) => {
    const itemListBlock = document.createElement('div');
    itemListBlock.className = 'itemList__container shadow-md  shadow-slate-600';

    //////////////////////////////////////////////////////////////
    // Item Image

    const listImg = document.createElement('img');
    listImg.src = list.image;

    itemListBlock.appendChild(listImg);

    //////////////////////////////////////////////////////////////
    // Item Content
    const listContent = document.createElement('div');
    listContent.className = 'itemList__content p-2';

    itemListBlock.appendChild(listContent);

    //////////////////////////////////////////////////////////////
    // Item Name

    const listName = document.createElement('h2');
    listName.textContent = list.name;
    listName.className = 'list__name font-normal'

    listContent.appendChild(listName);

     //////////////////////////////////////////////////////////////
    // Item Price
    const listPrice = document.createElement('span');
    const listCurrency = document.createElement('span');
    listCurrency.textContent = '₱';
    listCurrency.className = 'text-sm';
    listPrice.innerHTML = `
        <span class='text-[#0012A4] font-bold text-[25px]'> 
            <span class='text-sm'>₱</span> ${list.price.toFixed(2)}
        </span>
    `

    
    listContent.appendChild(listPrice);

    //////////////////////////////////////////////////////////////
    // Item Category

    const itemTag = document.createElement('div');
    itemTag.className = 'uppercase w-full flex gap-1 text-white ';

    const tagColor = {
        "Laundry Soap": "#31abdd",
        "Frontend": "#6ac76a",
        "CSS": "#31abdd",
        "JS": "#f2bf26",
        "Detergent": "#583b7e",
        "Tailwind": "#16becb",
        "Fabric Conditioner": "#cd669a",
        "Vue": "#41b883",
        "React": "#6abed8"
    }

    list.category.map(tag => {
        const itemCategory = document.createElement('div');
        itemCategory.textContent = tag;
        itemCategory.className = 'px-[0.5rem] mb-1.5 italic font-normal text-[12px]';
        itemCategory.style.borderRadius = "0.5rem";
        itemCategory.style.cursor = "pointer";
        itemCategory.style.backgroundColor =  tagColor[tag] || '#ccc';
        itemTag.appendChild(itemCategory);
    })

    listContent.appendChild(itemTag);





    const itemListRow = document.querySelector('.itemList__row');
    itemListRow.appendChild(itemListBlock);
})