function convertToBinary() {
    const decimalInput = document.getElementById("decimalInput");
    const binaryResult = document.getElementById("binaryResult");

    const input = decimalInput.value;

    if (!/^-?\d+$/.test(input)) {
        binaryResult.textContent = "";
        return;
    }

    const decimal = parseInt(input);

    if (isNaN(decimal) || input === "") {
        binaryResult.textContent = "";
        return;
    }

    if (decimal === 0) {
        binaryResult.textContent = "Résultat binaire : 0";
        return;
    }

    let binary = "";
    let number = Math.abs(decimal);

    while (number > 0) {
        binary = (number % 2) + binary;
        number = Math.floor(number / 2);
    }

    if (decimal < 0) {
        binary = "-" + binary;
    }

    binaryResult.textContent = "Résultat binaire : " + binary;
}