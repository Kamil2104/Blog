export function sliceDescriptionTextHandler(descriptionText) {
    if (descriptionText.length >= 200) {
        let slicedDescriptionText = descriptionText.substring(0, 197);

        if (slicedDescriptionText.length === 197 && slicedDescriptionText.charAt(196) !== ' ') {
            slicedDescriptionText = slicedDescriptionText.slice(0, slicedDescriptionText.lastIndexOf(' '));
        }
    
        return slicedDescriptionText + "..."; 
    } else {
        return descriptionText;
    }
}
