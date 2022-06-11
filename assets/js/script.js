window.addEventListener('scroll' , onScroll)
onScroll()

function onScroll () {
  navOnScroll ()
  btnOnScroll ()
  activeMenu (home)
  activeMenu (services)
  activeMenu (about)
  activeMenu (contact)
}

function activeMenu (section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const checkingLine =  targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight
  const passedTargetLine = sectionEndsAt <= targetLine

  // limites da seção 

  const sectionBoundaries = checkingLine && !passedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  
  menuElement.classList.remove('active')
  if (sectionBoundaries){
      menuElement.classList.add('active')
  }

} 

function navOnScroll (){
  const nav = document.querySelector('#navigation')
  if(scrollY > 0 ) {
    nav.classList.add('scroll')
  }
  else {
    nav.classList.remove('scroll')
  }
 
}

function btnOnScroll () {
  if(scrollY > 700 ) {
    backToTopBtn.classList.add('show')
  }
  else {
    backToTopBtn.classList.remove('show')
  }

}

function openMenu () {
  document.body.classList.add ('menu-expanded')
}

function closeMenu () {
  document.body.classList.remove ('menu-expanded')
}

ScrollReveal({
  origin: 'top' ,
  distance: '30px' ,
  duration: 700,
}).reveal(
 `#home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content
  `);