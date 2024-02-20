import { setRedBorder } from "./setRedBorderHandler";
import { scrollToComponent } from '../functions/scrollToElementHandler'

export function showBlogNameErrorParagraph(paragraphId) {
    let paragraph = document.getElementById(paragraphId)

    setRedBorder("blogName")
    scrollToComponent("blogPhoto")
    
    setTimeout(() => {
        paragraph.style.visibility = "visible";
    }, 100)
}