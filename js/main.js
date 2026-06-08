const burgerButton = document.querySelector('.nav__burger')
const nav = document.querySelector('.nav')
const navLinks = document.querySelector('.nav__links')

const handleBurgerButton = () => {
	burgerButton.classList.toggle('nav__burger--active')
    navLinks.classList.toggle('show')

}

const handleNavScroll = () => {
		if (window.scrollY > 75) {
			nav.classList.add('show')
		} else {
			nav.classList.remove('show')
            navLinks.classList.remove('show')
            burgerButton.classList.remove('nav__burger--active')
		}
}

burgerButton.addEventListener('click', handleBurgerButton)
window.addEventListener('scroll', handleNavScroll)
