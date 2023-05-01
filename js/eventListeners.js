window.addEventListener('keydown', (event) => {
    switch (event.key){
        case 'w': //move player up
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