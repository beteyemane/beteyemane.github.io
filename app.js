document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector('#nav-links')
  const burger = document.querySelector('.burger')

  function navbarClick() {
    if(navbar.style.display === 'block') {
      navbar.style.display = 'none'
    } else {
      navbar.style.display = 'block'
    }
  }

  burger.addEventListener('click', navbarClick)

})
