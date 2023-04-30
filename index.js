const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//set canvas aspect ratio to 16x9; game uses 64x64px tiles, so width= 64*16 and height=64*9
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

class Sprite {
    constructor({position}) {
        this.position = position
        this.image = new Image()
        this.image.src = ''
    }
}

const player = new Player()

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

function animate() {
    window.requestAnimationFrame(animate) // create animation loop
    c.fillStyle= 'white'
    c.fillRect(0, 0, canvas.width, canvas.height) //redraw background to "clear" the canvas

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 5 //change this value to change player speed
    else if (keys.a.pressed) player.velocity.x = -5

    player.draw()
    player.update()
}

animate()
