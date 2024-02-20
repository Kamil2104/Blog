export function scrollToComponent(componentId) {
    const component = document.getElementById(componentId);
    if (component) {
        component.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}