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
  const sunsetBarlevardOne = document.querySelector('.sunset-barlevard-one')
  const sunsetBarlevardTwo = document.querySelector('.sunset-barlevard-two')
  const sunsetBarlevardThree = document.querySelector('.sunset-barlevard-three')
  const sunsetBarlevardFour = document.querySelector('.sunset-barlevard-four')

  const currentImage = document.querySelector('#current-image')

  console.log(sunsetBarlevardOne)

  function enlargeImage(image) {
    const path = './assets/'
    // image = 'sunset-barlevard.png'
    const source = path + image
    currentImage.src = source
    currentImage.alt = source
  }

  function iconMovement() {
    icons.forEach(icon => {
      icon.style.left = Math.random() * 600 + 'px'
      icon.style.top = Math.random() * 600 + 'px'
      icon.classList.add('move')
    })
  }
  setInterval(iconMovement, 5000)
  iconMovement()

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

  sunsetBarlevardOne.addEventListener('click', function(){
    currentImage.src = './assets/sunset-barlevard.png'
  })
  sunsetBarlevardTwo.addEventListener('click', function(){
    currentImage.src = './assets/sunset-barlevard-crawl.png'
  })
  sunsetBarlevardThree.addEventListener('click', function(){
    currentImage.src = './assets/sunset-barlevard-home-crawl.png'
  })
  sunsetBarlevardFour.addEventListener('click', function(){
    currentImage.src = './assets/sunset-barlevard-add-crawl.png'
  })


})
