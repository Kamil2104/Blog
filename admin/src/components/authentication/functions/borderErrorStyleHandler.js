export function addIsEmptyErrorStyle(inputId) {
    var input = document.getElementById(inputId);

    input.classList.add('redBorder')
}

export function deleteIsEmptyErrorStyle(inputId) {
    var input = document.getElementById(inputId)

    input.classList.remove('redBorder')
}