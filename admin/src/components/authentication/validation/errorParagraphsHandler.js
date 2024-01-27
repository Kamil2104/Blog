export function showParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId)

    paragraph.style.visibility = "visible";
}

export function hideParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId)

    paragraph.style.visibility = "hidden";
}