// Menujs
function menuMobile() {
    const menujs = document.querySelector('#menujs')
    const icons = document.querySelectorAll(".icon")
    const linksHeader = document.querySelectorAll('#menujs a')
    
    icons.forEach(item => {
        item.addEventListener('click', ()=> {
            menujs.classList.toggle('ativo')
        })
    })
    linksHeader.forEach(item => {
        item.addEventListener('click', ()=> {
            menujs.classList.toggle('ativo')
        })
    })
}
menuMobile()

// Surgir Menu
function surgirMenu() {
    const header = document.querySelector('header')
    const hero = document.querySelector('#hero')
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom < 20) {
        header.classList.add('ativo')
    } else {
        header.classList.remove('ativo')
    }
}    

window.addEventListener('scroll', surgirMenu)


const scrollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '120px',
    duration: 1600,
    reset: true,
    delay: 25
})

scrollReveal.reveal(
    `#hero h1, #hero img, #hero p, #hero .btn, #hero .media ul li,
    #about img, #about h2, #about p, #about .btn, #about img,
    #services .services-item, #services .item-content,
    #contact h2, #contact p, #contact .btn, #contact ul li,
    footer img, footer p, footer .media ul li`
, { interval: 120 })