const table = document.querySelector('.tableList__row');

itemList.map((list) => {
    const tableListBlock = `
        <tr class='w-full h-full'>
            <td class='w-[9rem] p-2'><img src='${list.image}' class=''></td>
            <td class='w-[15rem]'>${list.name}</td>
            <td>${list.category}</td>
            <td>${list.price.toFixed(2)}</td>
            <td class='flex flex-col justify-center'>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    `;

    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = tableListBlock;

    table.append(tbody.firstChild);
})