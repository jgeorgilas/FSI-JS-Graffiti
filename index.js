let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'

}
let dogname = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogname.length; i++){
	dogname[i].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = "orange"
footer.style.borderStyle = 'solid'
