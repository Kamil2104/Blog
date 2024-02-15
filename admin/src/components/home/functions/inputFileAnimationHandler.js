export function addPhotoErrorAnimationClassName() {
    let image = document.getElementById("blogPhoto")

    image.className = "animatedPhoto" 
}

export function removePhotoErrorAnimationClassName() {
    let image = document.getElementById("blogPhoto")

    image.removeAttribute("className")
}