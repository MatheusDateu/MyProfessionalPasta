    const switcher = document.querySelector('.btn');
    switcher.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        var className = document.body.className;
        if (className == "light-theme") {
            this.textContent = "Dark";
        }
        if (className == "dark-theme") {
            this.textContent = "Light";
        }
        console.log('current class name: ' + className);
    });