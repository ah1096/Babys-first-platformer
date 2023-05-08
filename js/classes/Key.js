class Key extends Sprite {
    // what properties are associated with each key?
    constructor({imageSrc, frameRate, animations, loop, player}) {
        super({imageSrc, frameRate, animations, loop}) //call Sprite's constructor

        this.player = player
        console.log('key created with player:', player)

        this.imageSrc = imageSrc

        this.width = 50,
        this.height = 50,

        this.position = {
            x: 200,
            y: 200,
        }

        this.pickedUp = false

        this.hitbox = this.updateItemHitbox()

    }

    // what properties within the key class should be altered over time?
    update() {
        this.updateItemHitbox();
    
        // this vv is the blue box
        c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    
        c.fillRect(
            this.hitbox.position.x, 
            this.hitbox.position.y, 
            this.hitbox.width, 
            this.hitbox.height
            )
    
        this.updateItemHitbox();
        this.checkForCollisionWithPlayer();
    }

    updateItemHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x, //adjust side position of hitbox
                y: this.position.y, //adjust vertical position of hitbox
            },
            width: 40, // adjust actual width of hitbox
            height: 30, // adjust actual height of hitbox
        }
    }

    checkForCollisionWithPlayer() {
        const itemhitbox = this.hitbox
        const playerhitbox = this.player.hitbox

        // if playerhitbox is inside itemhitbox, return true
        // else return false

       // check that player.hitbox is defined before accessing its properties
        if (playerhitbox && itemhitbox) {
            const xCollision = itemhitbox.position.x < playerhitbox.position.x + playerhitbox.width && itemhitbox.position.x + itemhitbox.width > playerhitbox.position.x
            const yCollision = itemhitbox.position.y < playerhitbox.position.y + playerhitbox.height && itemhitbox.position.y + itemhitbox.height > playerhitbox.position.y
            if (xCollision && yCollision) {
                return true
            } else {
                return false
            }
        } else {
            console.log('player hitbox is undefined')
            return false
        }
    }

    pickUpItem(keys) {
        if (this.checkForCollisionWithPlayer() === true && keys.e.pressed === true) {
            this.player.hasKey = true
            console.log("does player have key?", player.hasKey)
            this.pickedUp = true
            console.log("has the key been picked up?", this.pickedUp)
        } else {
            return
        }
    }

    removeFromLevel() {
        if (this.pickedUp === true){
            this.imageSrc = ''
        }
    }




    // checkIfPickedUp(keys) {
    //     if (keys.e.pressed) {
    //         return true
    //         console.log('the key has been pickedup')
    //         //key becomes invisible
    //         //pickedup becomes true
    //         //Player's "hasKey" property updated to true
    //         //disable input of e key; player can't pick up invisible key by mistake
    //     } else {
    //         return false
    //         console.log("the key is on the floor")
    //     }
    // }

    // resetKey(){
    //     //if player has walked through the door to next level
    //     //key becomes visible
    //     //pickedup becomes false
    //     //player's hasKey = false
    //     //enable e key input
    // }



}