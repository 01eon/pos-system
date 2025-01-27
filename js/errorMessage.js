const errorSection = document.querySelector('#errorSection');

function errAlert(errText) {
    const alertBox = document.createElement('div');
    alertBox.className = 'fixed top-[20px] right-[20px] bg-[#b81616] text-white py-[15px] px-[20px] rounded-sm shadow-sm shadow-slate-300 opacity-1 duration-500 ease flex items-center gap-2';
    alertBox.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
            <path fill="#f2f2f2" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
        </svg>
        <span>${errText}</span>
    `;

    // append to body
    errorSection.appendChild(alertBox);

    // Set a timeout to hide the alert
    setTimeout(() => {
        alertBox.classList.add('hidden');

        // Remove the alert from the DOM after fading out
        setTimeout(() => {
            alertBox.remove();

        }, 500) // Match the CSS transition duration
    }, 3000) // Display for 3 seconds.
}

function successAlert(successText) {
    const alertBox = document.createElement('div');
    alertBox.className = 'fixed top-[20px] right-[20px] bg-[#31bb24] text-white py-[15px] px-[20px] rounded-sm shadow-sm shadow-slate-300 opacity-1 duration-500 ease flex items-center gap-2';
    alertBox.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 16 16">
            <path fill="#f2f2f2" d="M11.4 6.85a.5.5 0 0 0-.707-.707l-3.65 3.65l-1.65-1.65a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .707 0l4-4z" />
            <path fill="#f2f2f2" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8M1 8c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7" clip-rule="evenodd" />
        </svg>
        <span>${successText}</span>
    `;

    // append to body
    document.body.appendChild(alertBox);

    // Set a timeout to hide the alert
    setTimeout(() => {
        alertBox.classList.add('hidden');

        // Remove the alert from the DOM after fading out
        setTimeout(() => {
            alertBox.remove();

        }, 500) // Match the CSS transition duration
    }, 3000) // Display for 3 seconds.
}