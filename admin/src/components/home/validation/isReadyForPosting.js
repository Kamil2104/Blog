import { setRedBorder } from '../functions/setRedBorderHandler'
import { addPhotoErrorAnimationClassName } from '../functions/inputPhotoAnimationHandler'
import { scrollToComponent } from '../functions/scrollToElementHandler'

function isTextFieldFilled(text) {
    if (text !== "") {
        return true
    }

    return false
}

function isPhotoAdded(selectedPhoto) {
    if (selectedPhoto !== null) {
        return true
    }

    return false
}

export function isBlogReadyToBeAdded(nameText, nameId, descriptionText, descriptionId, selectedPhoto, buttonChoosePhotoId) {
    if (!isTextFieldFilled(nameText)) {
        setRedBorder(nameId)
        scrollToComponent(nameId)
        return false
    }

    if (!isTextFieldFilled(descriptionText)) {
        setRedBorder(descriptionId)
        scrollToComponent(descriptionId)
        return false
    }

    if (!isPhotoAdded(selectedPhoto)) {
        addPhotoErrorAnimationClassName()
        scrollToComponent("blogPhoto")
        setRedBorder(buttonChoosePhotoId)
        return false
    }

    return true
}