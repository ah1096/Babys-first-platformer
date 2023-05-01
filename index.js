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
        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: './img/king/enterDoor.png',
            onComplete: () => {
                console.log('completed animation')
                overlay.opacity
                gsap.to(overlay, { //use gsap library to animat opacity from 0 to 1
                    opacity: 1
                })
            },
        }
    }
}) 

const doors = [
    new Sprite({
        position: { //where is the door placed?
            x: 767,
            y: 270,
        },
        imageSrc: './img/doorOpen.png',
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
        autoplay: false,
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

const overlay = {
    opacity: 0,
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

    player.handleInput(keys)
    player.draw()
    player.update()

    c.save() // combine with restore() @ bottom to apply the code inbetween
    c.globalAlpha = overlay.opacity //determines transparency of black rectangle
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width, canvas.height)
    c.restore()
}

animate()
