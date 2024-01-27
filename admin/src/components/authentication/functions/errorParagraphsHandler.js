export function showParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId)

    paragraph.style.visibility = "visible";
    paragraph.style.color = "rgb(136, 0, 0)"
}

export function hideParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId)

    paragraph.style.visibility = "hidden";
}