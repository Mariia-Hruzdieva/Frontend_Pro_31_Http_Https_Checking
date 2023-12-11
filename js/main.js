let inputLinkBtn = document.querySelector(".inputLinkBtn");
let goToLinkBtn = document.querySelector(".goToLinkBtn");
let link;

inputLinkBtn.addEventListener('click', function () {
    link = prompt("Введіть посилання");
    if (link.startsWith('http') === false && link.startsWith('https') === false) {
        link = `https://${link}`;
    }
})

goToLinkBtn.addEventListener("click", function () {
    if (!link) {
        alert('Не введене посилання');
    } else {
        location.href = link;
    }
})















