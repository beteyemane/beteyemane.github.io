document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector('#nav-links')
  const burger = document.querySelector('.burger')
  const name = document.querySelector('.name')
  const arrow = document.querySelector('.arrow')
  const skillsArrow = document.querySelector('.skills-arrow')
  const iconsArrow = document.querySelector('.icons-arrow')
  const skillsContainer = document.querySelector('.skills-container')
  const iconsContainer = document.querySelector('.icons-container')
  const icons = document.querySelectorAll('.icons p')


  icons.forEach(icon => {
    icon.style.left = Math.random() * 600 + 'px'
    icon.style.top = Math.random() * 600 + 'px'
  })

  const text = 'BETE YEMANE'
  let i  = 0
  const speed = 200

  function navbarClick() {
    if(navbar.style.display === 'block') {
      navbar.style.display = 'none'
    } else {
      navbar.style.display = 'block'
    }
  }

  function typewriter() {
    if (i < text.length) {
      name.innerHTML += text.charAt(i)
      i++
      setTimeout(typewriter, speed)
    }
    if (name.innerHTML.length === text.length)
      arrow.style.display = 'block'
  }

  function skills() {
    if(iconsContainer.style.display === 'flex') {
      iconsContainer.style.display = 'none'
      skillsContainer.style.display = 'flex'
    } else {
      iconsContainer.style.display = 'flex'
      skillsContainer.style.display = 'none'
    }
  }
  
  typewriter()

  burger.addEventListener('click', navbarClick)
  skillsArrow.addEventListener('click', skills)
  iconsArrow.addEventListener('click', skills)
})
