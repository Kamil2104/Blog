import { setRedBorder } from "./setRedBorderHandler";

export function showBlogNameErrorParagraph(paragraphId) {
    let paragraph = document.getElementById(paragraphId)

    setRedBorder("blogName")
    
    setTimeout(() => {
        paragraph.style.visibility = "visible";
    }, 100)
}