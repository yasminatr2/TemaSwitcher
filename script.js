'use strict';

const mudar = document.querySelector('.btn');

mudar.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});
