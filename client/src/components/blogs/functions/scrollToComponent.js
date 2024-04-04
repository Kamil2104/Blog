export function scrollToComponent(componentId) {
    let component = document.getElementById(componentId)
    const offset = -30

    if (component) {
        const desiredPosition = component.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: desiredPosition, behavior: 'smooth' });
    }
}

/*

getBoundingClientRect().top returns the distance (in pixels) from the top of the browser window view to the top of the element. 
window.pageYOffset is a property of the window object that returns the number of pixels by which the page is scrolled vertically. If the page is not scrolled, this value is 0.
offset represents the additional offset we want to add to the desired scroll position.

desiredPosition is variable, which keeps sum of these values to get the final target scroll position

*/