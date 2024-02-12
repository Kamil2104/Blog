export function handleChangesOnInputFields(valueId ,labelId) {
    let label = document.getElementById(labelId)
    let inputtedValue = document.getElementById(valueId)

    if (label && inputtedValue.value !== "") {
        label.style.visibility = "visible"
            if (!label.className.includes("animated")) {
                label.classList.add("animatedLabel")
            }
    } else if (label && inputtedValue.value === "") {
        label.style.visibility = "hidden"
        label.classList.remove("animatedLabel")
    }
}