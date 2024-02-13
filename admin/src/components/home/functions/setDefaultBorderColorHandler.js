export function setDefaultBorder(componentId) {
    let component = document.getElementById(componentId)

    if (componentId === "blogPhotoButtonChoose") {
        component.style.borderColor = "rgb(145, 145, 145)"
    } else {
        if (component.value !== "") {
            component.style.borderColor = "rgb(97, 97, 97)"
        }
    }
}