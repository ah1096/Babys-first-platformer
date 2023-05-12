const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

//set canvas aspect ratio to 16x9; game uses 64x64px tiles, so width= 64*16 and height=64*9
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

let parsedCollisions 
let collisionBlocks 
let background
let doors 
const player = new Player({
    imageSrc: './img/keycat/keycat_idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 13, //number of frames in sprite png
            frameBuffer: 2, //change this number to change sprite change speed
            loop: true,
            imageSrc: './img/keycat/keycat_idle.png',
        },
        idleLeft: {
            frameRate: 13,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/keycat/keycat_idleLeft.png',
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/keycat/keycat_runRight.png',
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/keycat/keycat_runLeft.png',
        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: './img/king/enterDoor.png',
            onComplete: () => {
                    // console.log("enterDoor hasKey check 1:", player.hasKey)
                    console.log('completed animation')
                    gsap.to(overlay, { //use gsap library to animate opacity from 0 to 1
                        opacity: 1,
                        onComplete: () => {
                            
                            level++ //go to next level

                            //level 4 doesn't exist right now, so loop back to start
                            //modify this code when game has an actual ending to roll credits or something
                            if (level === 4) {
                                level = 1 
                            }

                            levels[level].init()
                            player.switchSprite('idleRight') //switches sprite on next level after door open
                            player.preventInput = false //allows key input after spawning into next level
                            gsap.to(overlay, {
                                opacity: 0,
                            })
                        }
                    })
            },
        },
    },
}) 

const itemKey = new Key({
    imageSrc: './img/key.png',
    frameRate: 1,
    // animations: {default: [0]},
    // loop: true,
    player: player
})

let level = 1
let levels = {
    1: {
        init: () => { //call all code to populate level data
            parsedCollisions = collisionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks

            itemKey.position.x = 400
            itemKey.position.y = 353

            //reset key
            player.hasKey = false
            itemKey.pickedUp = false

            if (player.currentAnimation) {
                player.currentAnimation.isActive = false //reset player animation on spawn
            }

            background= new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './img/backgroundLevel1.png'
            })

            doors = [
                new Sprite({
                    position: {
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
        }
    },
    2: {
        init: () => { 
            parsedCollisions = collisionsLevel2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks

            if (player.currentAnimation) {
                player.currentAnimation.isActive = false
            }

            //change player spawn position in this level
            player.position.x = 96
            player.position.y = 140

            //change key spawn position in this level
            itemKey.position.x = 130
            itemKey.position.y = 480

            //reset key
            player.hasKey = false
            itemKey.pickedUp = false

            background= new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './img/backgroundLevel2.png'
            })

            doors = [
                new Sprite({
                    position: {
                        x: 772,
                        y: 336,
                    },
                    imageSrc: './img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    },
    3: {
        init: () => { 
            parsedCollisions = collisionsLevel3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks

            if (player.currentAnimation) {
                player.currentAnimation.isActive = false
            }

            //change player spawn position in this level
            player.position.x = 785
            player.position.y = 220

            //change key spawn position in this level
            itemKey.position.x = 790
            itemKey.position.y = 353

            //reset key
            player.hasKey = false
            itemKey.pickedUp = false

            background= new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './img/backgroundLevel3.png'
            })

            doors = [
                new Sprite({
                    position: {
                        x: 176,
                        y: 335,
                    },
                    imageSrc: './img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]
        }
    }
}


const keys = { 
    //add more keys here later for inventory, quest log, save/quit, etc.
    //update eventListeners to correspond to changes made here
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    e: {
        pressed: false,
    },
}

const overlay = {
    //this is the default opacity of the fade-to-black between levels
    opacity: 0,
}

function animate() {
    window.requestAnimationFrame(animate) // create animation loop

    background.draw()

    //uncomment these lines to see collisionBlocks in red
    // collisionBlocks.forEach(collisionBlock => {
    //     collisionBlock.draw()
    // })

    doors.forEach(door => {
        door.draw()
    })

    player.handleInput(keys)
    player.draw()
    player.update()

    //check if Key.js's handleInput is working
    console.log("does player have key?", player.hasKey)

    itemKey.pickUpItem(keys)
    itemKey.draw() //this puts the key on the level
    itemKey.update(player)

    c.save() // combine with restore() @ bottom to apply the code inbetween
    c.globalAlpha = overlay.opacity //determines transparency of black rectangle
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width, canvas.height)
    c.restore()
}

levels[level].init()
animate()
