export function handleChangesOnInputFields(valueId, labelId, paragraphId) {
    let label = document.getElementById(labelId)
    let inputtedValue = document.getElementById(valueId)
    let paragraph = document.getElementById(paragraphId)

    if (label && inputtedValue.value !== "") {
        label.style.visibility = "visible"
            if (!label.className.includes("animated")) {
                label.classList.add("animatedLabel")
            }
    } else if (label && inputtedValue.value === "") {
        label.style.visibility = "hidden"
        label.classList.remove("animatedLabel")
    }

    if (paragraph) {
        paragraph.style.visibility = "hidden"
    }
}