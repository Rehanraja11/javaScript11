
let currentKey = null;

submit.addEventListener("click", (e) => {
    e.preventDefault();

    let titleC = title.value;
    let DescriptionC = desc.value;

    currentKey = JSON.stringify(titleC);   //
    localStorage.setItem(currentKey, JSON.stringify(DescriptionC));

    showData.innerHTML = `
        <h3>${titleC}</h3>
        <h3>${DescriptionC}</h3>
    `;

    title.value = "";
    desc.value = "";
});

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (currentKey) {
        localStorage.removeItem(currentKey);
        showData.innerHTML = "";
        currentKey = null;
    }
});
