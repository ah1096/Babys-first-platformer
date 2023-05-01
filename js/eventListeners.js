window.addEventListener('keydown', (event) => {
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
                ) {
                    console.log('we are colliding')
                    return 
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