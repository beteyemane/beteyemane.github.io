document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector('#nav-links')
  const burger = document.querySelector('.burger')
  const name = document.querySelector('.name')
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
  }

  typewriter()

  burger.addEventListener('click', navbarClick)



})
