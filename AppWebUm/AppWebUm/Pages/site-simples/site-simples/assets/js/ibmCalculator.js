const ibmCalculator = () => {
  const inputMass = document.querySelector("[data-mass]");
  const inputHeight = document.querySelector("[data-height]");
  const btnCalculate = document.querySelector("[data-buttonCalcIBM]");
  const inputResult = document.querySelector("[data-result]");
  const inputTips = document.querySelector("[data-tips]");
  btnCalculate.addEventListener("click", (event) => {
    event.preventDefault();
    let mass = inputMass.value;
    let height = inputHeight.value;
    if (mass < 35 || mass > 600 || height < 1.5 || height > 2.5) {
      alert("Invalid data");
      return;
    }
    let ibm = mass / (height * height);
    inputResult.textContent = ibm.toFixed(2);
    if (ibm < 20) {
      inputResult.textContent = ibm.toFixed(2);
      inputTips.textContent = "You are under weight.";
      criaLink("UnderW");
    } else if (ibm >= 20 && ibm < 25) {
      inputResult.textContent = ibm.toFixed(2);
      inputTips.textContent = "Geat! You are at normal weight.";
      criaLink("Normal");

    } else if (ibm >= 25 && ibm < 30) {
      inputResult.textContent = ibm.toFixed(2);
      inputTips.textContent = "Be careful! You are over weight.";
      criaLink("OverW");

    } else if (ibm >= 30 && ibm < 40) {
      inputResult.textContent = ibm.toFixed(2);
      inputTips.textContent = "Be careful! You are with obesedy II.";
      criaLink("Obese");

    } else {
      inputResult.textContent = ibm.toFixed(2);
      inputTips.textContent =
        "Obesedy III. You should to go at a doctor urgently";
      criaLink("ExtremelyO");

    }
  });

  function criaLink(id) {
    const label = document.querySelector("[data-suggestedLink]");
    label.innerHTML =  `Suggested link: <a href="#${id}">click here to be redirected</a>`;
  }
};

export default ibmCalculator;
