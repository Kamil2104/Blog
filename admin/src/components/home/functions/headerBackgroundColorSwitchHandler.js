export function setCreateBlogsLinkBackgroundAsActive(createBlogsLinkId, manageBlogsLinkId) {
    let createBlogsLink = document.getElementById(createBlogsLinkId)
    let manageBlogsLink = document.getElementById(manageBlogsLinkId)

    createBlogsLink.classList.add("active")
    manageBlogsLink.classList.remove("active")
}

export function setManageBlogsLinkBackgroundAsActive(createBlogsLinkId, manageBlogsLinkId) {
    let createBlogsLink = document.getElementById(createBlogsLinkId)
    let manageBlogsLink = document.getElementById(manageBlogsLinkId)

    createBlogsLink.classList.remove("active")
    manageBlogsLink.classList.add("active")
}