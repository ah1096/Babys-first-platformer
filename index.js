const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//set canvas aspect ratio to 16x9; game uses 64x64px tiles, so width= 64*16 and height=64*9
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

//fillRect takes four arguments to draw a rectangle(x, y, width, height)

//PLAYER//xxxxxxxxxxxxxxxxx//

// create animation loop; call animate > call animate > call animte... until stopped
let y = 100
const height = 100
let bottom = y + 100 

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle= 'white'
    c.fillRect(0, 0, canvas.width, canvas.height) //redraw background to "clear" the canvas
    c.fillStyle = 'red'
    c.fillRect(100, y, 100, height)
    
    if (bottom < canvas.height){
        y++
        bottom = y + 100
    }

}

animate()