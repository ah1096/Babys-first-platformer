window.addEventListener('keydown', (event) => {
    if (player.preventInput){return}
    switch (event.key){
        case 'w': //move player up + enter doors
            for (let i = 0; i < doors.length; i++){
                const door = doors[i]
                if (
                //player only activates door if player is in the MIDDLE of the door
                player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width && //RIGHT of player <= RIGHT side of door
                player.hitbox.position.x  >= door.position.x && //LEFT of player >= LEFT of door

                player.hitbox.position.y + player.hitbox.height >= door.position.y && 
                player.hitbox.position.y <= door.position.y + door.height
                &&
                player.hasKey
                ) {
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true //player can't move around
                    player.switchSprite('enterDoor')
                    door.play() //begins door's animation loop; it opens
                    return 
                } else if (
                    player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width && //RIGHT of player <= RIGHT side of door
                    player.hitbox.position.x  >= door.position.x && //LEFT of player >= LEFT of door

                    player.hitbox.position.y + player.hitbox.height >= door.position.y && 
                    player.hitbox.position.y <= door.position.y + door.height
                    &&  
                    !player.hasKey
                ) {
                    player.velocity.y = -1
                    console.log("enterDoor hasKey check 2:", player.hasKey)
                    generateHelpText()
                    player.switchSprite('idleRight')
                    player.preventInput = false
                } 
            }
            if (player.velocity.y === 0)
            player.velocity.y = -25 //adjust jump height here
            break
        case 'a': //move player left
            keys.a.pressed = true
            break
        case 'd': //move player right
            keys.d.pressed = true
            break
        case 'e': //trigger item interaction
            keys.e.pressed = true
            break

    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key){
        case 'a': //move player left
            keys.a.pressed = false
            break
        case 'd': //move player right
            keys.d.pressed = false
            break

    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key){
        case 'e': 
            keys.e.pressed = false
            break
    }
})



function resetHelpText() {
    const helptext = document.getElementById("helptext")
    helptext.innerText = "A = left   D = right   W = jump + open door   E = pick up"
}

function generateHelpText() {
    const helptext = document.getElementById("helptext")
    helptext.innerText = "you need the key to proceed"
    setTimeout(resetHelpText, 3000)
    
}