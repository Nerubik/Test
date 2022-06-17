let menuImg = document.querySelectorAll('.menu--wrapper')

for(i=0; i<menuImg.length; i++){
	let imgTog = menuImg[i].querySelector('.menu--img')
	let subMenu = menuImg[i].nextElementSibling
	let thisMenuImg = menuImg[i]
	let x = false
	menuImg[i].addEventListener('click', function(){
		imgChange(x, imgTog, 'images/menuNoActive.svg', 'images/menuActive.svg')
		subMenu.classList.toggle('open')
		thisMenuImg.classList.toggle('active')
		x = !x
	})
}

function imgChange(switcher, image, imgAct, imgNo)
{
	if(switcher)
			image.setAttribute('src',imgAct)
	else
			image.setAttribute('src',imgNo)
}

let comment = document.querySelector('.table-comment')
let comBut = document.querySelector('.comment-button')
let newValue = document.querySelector('.comment-input')
comBut.addEventListener('click', function(){
	comment.textContent = newValue.value
	newValue.classList.toggle('active')
	newValue.value = ''
})


let exits = document.querySelectorAll('.exit')

for(i=0; i<exits.length; i++){
	let exit = exits[i].previousElementSibling
	exits[i].addEventListener('click', function(){
		exit.parentElement.parentElement.remove()
	})
}