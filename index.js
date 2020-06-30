 // acess : menu icon, exit button, nav
 var menu = document.getElementById('menu')
 var nav = document.getElementById('nav')
 var exit = document.getElementById('exit')

 console.log(nav)

 menu.addEventListener('click' , () => {
   nav.classList.remove('hide-mobile')
 })

 console.log(nav)

 exit.addEventListener('click' , () => {
      nav.classList.add('hide-mobile')
 })
