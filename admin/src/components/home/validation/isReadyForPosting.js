import { setRedBorder } from '../functions/setRedBorderHandler'
import { addPhotoErrorAnimationClassName, removePhotoErrorAnimationClassName } from '../functions/inputFileAnimationHandler'

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
        return false
    }

    if (!isTextFieldFilled(descriptionText)) {
        setRedBorder(descriptionId)
        return false
    }

    if (!isPhotoAdded(selectedPhoto)) {
        addPhotoErrorAnimationClassName()
        setRedBorder(buttonChoosePhotoId)
        return false
    }

    removePhotoErrorAnimationClassName()
    return true
}