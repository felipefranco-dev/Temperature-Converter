function clicado() {

    const valueInput = document.querySelector("input").value
    const selectToValue = document.querySelector(".select-to").value
    const finalResult = document.querySelector("#converted-value")
    const valueChoice = document.querySelector("#converter-value")
    const textConverted = document.querySelector("#converted")
    const selectForValue = document.querySelector(".select-for").value
    const textConverter = document.querySelector("#converter")

    if (selectToValue == "Grau Fahrenheit") {
        finalResult.innerHTML = valueInput * 1.8 + 32
    }

    if (selectToValue == "Kevin") {
        finalResult.innerHTML = valueInput * 1 + 273
    }

    valueChoice.innerHTML = valueInput
    textConverter.innerHTML = selectForValue
    textConverted.innerHTML = selectToValue
}

function change() {

    clicado()

}


