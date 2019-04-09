document.addEventListener('DOMContentLoaded', () => {
  AOS.init()

  const navbar = document.querySelector('#nav-links')
  const burger = document.querySelector('.burger')
  const skills = document.querySelector('.skills')
  const icons = document.querySelectorAll('.icons p')

  console.log(skills)

  //sunset barlevard images
  const currentSbImage = document.querySelector('#current-sb-image')
  const sbImages = document.querySelectorAll('.sb-images')

  //city spot images
  const currentCsImage = document.querySelector('#current-cs-image')
  const csImages = document.querySelectorAll('.cs-images')

  //connect 4 images
  const currentC4Image = document.querySelector('#current-c4-image')
  const c4Images = document.querySelectorAll('.c4-images')

  //wevent images
  const currentWvImage = document.querySelector('#current-wv-image')
  const wvImages = document.querySelectorAll('.wv-images')

  //changes src of current image to small image src on click
  function selectImages(images, currentImage) {
    images.forEach(image => {
      image.addEventListener('click', (e) => {
        const source = e.target.getAttribute('src')
        currentImage.src = source
        currentImage.alt = source
      })
    })
  }

  //array of all the three project images to re-use the selectImages function
  const dataImages = [
    [sbImages, currentSbImage],
    [csImages, currentCsImage],
    [c4Images, currentC4Image],
    [wvImages, currentWvImage]
  ]

  dataImages.forEach(dataImage => {
    selectImages.apply(null, dataImage)
  })

  //generates random pixel place
  function iconMovement() {
    icons.forEach(icon => {
      // const random = []
      //while loop
      icon.style.left = Math.floor(Math.random()*600) + 'px'
      icon.style.top = Math.floor(Math.random()* 600) + 'px'
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

  burger.addEventListener('click', navbarClick)


})
