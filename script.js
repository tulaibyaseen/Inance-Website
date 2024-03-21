let x = 0
 function changeImage() {
  if (x == 0) {
    document.getElementById('image1').src = "./images/client-2.jpg"
    document.getElementById('image2').src = "./images/client-1.jpg"

    x++
  }else{
    document.getElementById('image1').src = "./images/client-1.jpg"
    document.getElementById('image2').src = "./images/client-2.jpg"

    x = 0;
  }

 }
let y = 0
 let toggle = document.getElementById('toggle')

 toggle.addEventListener('click',function () {
     if (y == 0) {
      document.getElementById('visible').style.visibility = 'visible'
      document.getElementById('nav1').style.height = '36vh'
      document.getElementById('toggle').style.transform = 'rotate(-90deg)'
      y++
     }else{
      document.getElementById('visible').style.visibility = 'hidden'
      document.getElementById('nav1').style.height = '0'
      document.getElementById('toggle').style.transform = 'rotate(0deg)'

      y = 0
     }

 })


 