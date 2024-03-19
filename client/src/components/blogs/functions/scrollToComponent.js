export function scrollToComponent(componentId) {
    let component = document.getElementById(componentId)

    if (component) {
        component.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}