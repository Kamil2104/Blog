export function setRedBorder(componentId) {
    let component =  document.getElementById(componentId)

    setTimeout(() => {
        component.style.borderColor = "rgb(125, 0, 0)"
    }, 100)
}