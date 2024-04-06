export function sliceDescriptionTextHandler(descriptionText) {
    if (descriptionText.length >= 100) {
        let slicedDescriptionText = descriptionText.substring(0, 97);

        if (slicedDescriptionText.charAt(96) !== ' ') {
            slicedDescriptionText = slicedDescriptionText.substring(0, slicedDescriptionText.lastIndexOf(' '));
        }
    
        let formattedDescriptionText = slicedDescriptionText + "..."
    
        return formattedDescriptionText
    } else {
        return descriptionText
    }
}