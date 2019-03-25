document.addEventListener('DOMContentLoaded', () => {
  AOS.init()

  const navbar = document.querySelector('#nav-links')
  const burger = document.querySelector('.burger')
  const name = document.querySelector('.name')
  const arrow = document.querySelector('.arrow')
  // const skillsArrow = document.querySelector('.skills-arrow')
  // const iconsArrow = document.querySelector('.icons-arrow')
  // const skillsContainer = document.querySelector('.skills-container')
  // const iconsContainer = document.querySelector('.icons-container')
  const icons = document.querySelectorAll('.icons p')
  // const navIcons = document.querySelectorAll('.nav-icons')
  // const navTexts = document.querySelectorAll('.nav-texts')
  // console.log(navIcons, navTexts)
  //
  // navIcons.forEach(navIcon => {
  //   navIcon.addEventListener('mouseover', function(e) {
  //     e.target.style.display = 'none'
  //
  //   })
  // })

  //sunset barlevard images
  const currentSbImage = document.querySelector('#current-sb-image')
  const sbImages = document.querySelectorAll('.sb-images')

  //city spot images
  const currentCsImage = document.querySelector('#current-cs-image')
  const csImages = document.querySelectorAll('.cs-images')

  //connect 4 images
  const currentC4Image = document.querySelector('#current-c4-image')
  const c4Images = document.querySelectorAll('.c4-images')

  const text = 'BETE YEMANE'
  let i  = 0
  const speed = 200

  function typewriter() {
    if (i < text.length) {
      name.innerHTML += text.charAt(i)
      i++
      setTimeout(typewriter, speed)
    }
    if (name.innerHTML.length === text.length)
      arrow.style.display = 'block'
  }

  //changes src of current image to small image src on click
  function selectImages(images, currentImage) {
    images.forEach(image => {
      image.addEventListener('click', (e) => {
        const source = e.target.getAttribute('src')
        currentImage.src = source
        console.log(currentImage)
        currentImage.classList.add('fadeIn')
      })
    })
  }

  //array of all the three project images to re-use the selectImages function
  const dataImages = [
    [sbImages, currentSbImage],
    [csImages, currentCsImage],
    [c4Images, currentC4Image]
  ]

  dataImages.forEach(dataImage => {
    selectImages.apply(null, dataImage)
  })

  //generates random pixel place
  function iconMovement() {
    icons.forEach(icon => {
      icon.style.left = Math.random() * 600 + 'px'
      icon.style.top = Math.random() * 600 + 'px'
      icon.classList.add('move')
    })
  }
  setInterval(iconMovement, 5000)
  iconMovement()

  function navbarClick() {
    if(navbar.style.display === 'block') {
      navbar.style.display = 'none'
    } else {
      navbar.style.display = 'block'
    }
  }

  // function skills() {
  //   if(iconsContainer.style.display === 'flex') {
  //     iconsContainer.style.display = 'none'
  //     skillsContainer.style.display = 'flex'
  //   } else {
  //     iconsContainer.style.display = 'flex'
  //     skillsContainer.style.display = 'none'
  //   }
  // }

  typewriter()

  burger.addEventListener('click', navbarClick)
  // skillsArrow.addEventListener('click', skills)
  // iconsArrow.addEventListener('click', skills)


})
