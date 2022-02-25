const ibmCalculator = () => {
  const inputMass = document.querySelector("[data-mass]");
  const inputHeight = document.querySelector("[data-height]");
  const btnCalculate = document.querySelector("[data-buttonCalcIBM]");
  const spanResult = document.querySelector("[data-result]");
  btnCalculate.addEventListener("click", event => {
    event.preventDefault();
    let mass = inputMass.value;
    let height = inputHeight.value;
    if (mass < 35 || mass > 600 || height < 1.5 || height > 2.5){
      alert("Invalid data");
      return;
    }
    let ibm = mass / (height * height);
    spanResult.textContent = ibm.toFixed(2);
  });
};

export default ibmCalculator