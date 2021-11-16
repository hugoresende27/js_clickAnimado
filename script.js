const like = document.querySelector('.likeMe')
const times = document.querySelector('#times')

// like.addEventListener('dblclick', (eve) => {
//     console.log(123)
// })

let clickTime = 0
let timesClick = 0

like.addEventListener('click', (eve) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
        //console.log(clickTime)
    } else {
        if ( (new Date().getTime() - clickTime) < 800) {
            createHeart(eve)
            clickTime = 0

        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (eve) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = eve.clientX
    const y = eve.clientY

    const leftOffset = eve.target.offsetLeft
    const topOffset = eve.target.offsetTop
    
    const xInside = x - leftOffset
    const yInside = y - topOffset
    console.log(xInside,yInside)//COORDENADAS DO CLICK relativas à imagem em vez do viewport

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    like.appendChild(heart)
    times.innerHTML = ++timesClick

    setTimeout( () => heart.remove(), 5000) //para remover as classes criadas com o coração a cada 5 segundos
}