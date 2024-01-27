export function isEmpty(text) {
    if (text === "") {
        return true
    }

    return false
}

export function addIsEmptyErrorStyle(inputId) {
    var input = document.getElementById(inputId);

    input.classList.add('redBorder')
}