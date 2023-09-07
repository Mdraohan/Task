const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const Selected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[Selected.selectedIndex].value;

    // Celsius to Fahrenheit
    const ToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const ToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = ToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = ToCel(inputTemp) + "&#176; Celsius";
    }
}
