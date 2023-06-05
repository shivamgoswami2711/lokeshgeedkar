const hedberg = document.querySelector('.hedberg')
const navmenu = document.querySelector('.navmenu')
const headerName = document.querySelector('.header.Name')

hedberg.addEventListener('click', () => {
    const clases = hedberg.className
    if (clases.includes("active")) {
        hedberg.className = "hedberg"
        headerName.className = "header Name active"
        navmenu.className ="navmenu"
    } else {
        hedberg.className = "hedberg active"
        navmenu.className ="navmenu active"
        headerName.className = "header Name"
    }
})