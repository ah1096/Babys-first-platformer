const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//set canvas aspect ratio to 16x9; game uses 64x64px tiles, so width= 64*16 and height=64*9
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576


const parsedCollisions = collisionsLevel1.parse2D()
const collisionBlocks = parsedCollisions.createObjectsFrom2D()


const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/backgroundLevel1.png'
})

const player = new Player({
    collisionBlocks, //refers to const defined above; same name so basically this is the same as collisionBlocks = collisionBlocks
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/king/idle.png',
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/king/idleLeft.png',
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/king/runRight.png',
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/king/runLeft.png',
        }
    }
}) 

const doors = [
    new Sprite({
        position: { //where is the door placed?
            x: 0,
            y:0
        },
        imageSrc: './img/doorOpen.png',
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
    })
]

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

    doors.forEach(door => {
        door.draw()
    })

    player.velocity.x = 0
    if (keys.d.pressed) {
        player.velocity.x = 5 //change this value to change player speed
        player.switchSprite('runRight')
        player.lastDirection = 'right'
    } else if (keys.a.pressed) {
        player.velocity.x = -5
        player.switchSprite('runLeft')
        player.lastDirection = 'left'
    } else {
        if (player.lastDirection === 'left'){
            player.switchSprite('idleLeft')
        } else {
            player.switchSprite('idleRight')}
    }

    player.draw()
    player.update()
}

animate()
