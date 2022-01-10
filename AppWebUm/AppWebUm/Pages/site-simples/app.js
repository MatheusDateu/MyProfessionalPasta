    const switcher = document.querySelector('.btn');
    switcher.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');//it can turn the dark-theme on or off
        var className = document.body.className;//a variable to inform the current theme of the body
        if (className == "light-theme") {
            this.textContent = "Dark";
        }
        else{
            this.textContent = "Light";
        }
        console.log('current class name: ' + className);//inform what is the current theme to developer
    });