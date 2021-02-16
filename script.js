const Toggle = document.querySelector('.header__toggle')
const nav = document.querySelector('.header__nav')
const left = document.querySelector('.left')
const right = document.querySelector('right')
const Lists = document.querySelectorAll('.header__list')
const navLists = Array.from(Lists)

const handleToggle = () => {
        nav.classList.toggle('show')
        Toggle.classList.toggle('left-show')

}


Toggle.addEventListener('click', handleToggle)

navLists.forEach(navList => {
    navList.addEventListener('click', () =>{
        nav.classList.toggle('show')
        
        
      
    })
})

const scrollingUp = document.querySelector('.scroll-up')
const rootElement = document.documentElement

scrollingUp.addEventListener('click', () => {
    rootElement.scrollTo (
        {
            top:0,
            behavior: 'smooth'
        }
    )
})