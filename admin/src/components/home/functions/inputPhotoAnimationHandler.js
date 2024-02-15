export function addPhotoErrorAnimationClassName() {
    let image = document.getElementById("blogPhoto")

    if (image.className != "") {
        removePhotoErrorAnimationClassName()
    }

    setTimeout(() => {
        image.className = "animatedPhoto" 
    }, 500)
}

function removePhotoErrorAnimationClassName() {
    let image = document.getElementById("blogPhoto")

    image.className = "restartAnimation"
}