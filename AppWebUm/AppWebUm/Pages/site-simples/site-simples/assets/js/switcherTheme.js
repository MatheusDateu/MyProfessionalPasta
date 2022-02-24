const switcher = () => {
  const switcher = document.querySelector(".btnChangeTheme");
  switcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme"); //it can turn the dark-theme on or off
    var className = document.body.className; //a variable to inform the current theme of the body
    console.log("current class name: " + className); //inform what is the current theme to developer
  });
};

export default switcher;
