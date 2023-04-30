const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//set canvas aspect ratio to 16x9; game uses 64x64px tiles, so width= 64*16 and height=64*9
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

// fill rectangle with color
c.fillStyle= 'white'
//fillRect takes four arguments to draw a rectangle(x, y, width, height)
c.fillRect(0, 0, canvas.width, canvas.height)


//PLAYER//xxxxxxxxxxxxxxxxx//
c.fillStyle = 'red'
c.fillRect(100, 100, 100, 100)


// create animation loop; call animate > call animate > call animte... until stopped
function animate() {
    window.requestAnimationFrame(animate)
    console.log('go')
}

animate()