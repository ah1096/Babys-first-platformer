const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//set canvas aspect ratio to 16x9; game uses 64x64px tiles, so width= 64*16 and height=64*9
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

const collisionBlocks = []

const parsedCollisions = collisionsLevel1.parse2D()
parsedCollisions.forEach((row, y )=> {

    row.forEach((symbol, x) => {
        if (symbol === 292) {
            collisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 64, //push block to the right @ appropriate amount
                    y: y * 64, //push block up/down @ appropriate amount
                }
            }))
        }
    })
})


const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/backgroundLevel1.png'
})

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

    backgroundLevel1.draw()
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw()
    })

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 5 //change this value to change player speed
    else if (keys.a.pressed) player.velocity.x = -5

    player.draw()
    player.update()
}

animate()
