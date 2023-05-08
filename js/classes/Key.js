class Key extends Sprite {
    // what properties are associated with each key?
    constructor({collisionBlocks =[], imageSrc, frameRate, animations, loop}) {
        super({imageSrc, frameRate, animations, loop}) //call Sprite's constructor

        this.imageSrc = './img/box.png'
        this.position = position;
        this.width = width;
        this.height = height;

        this.position = {
            x: 200,
            y: 200,
        }

        this.visible = true
        this.pickedup = false

    }

    // what properties within the key class should be altered over time?
    update() {
        // this vv is the blue box
        c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        

        c.fillRect(
            this.hitbox.position.x, 
            this.hitbox.position.y, 
            this.hitbox.width, 
            this.hitbox.height
            )
    }

    checkIfPickedUp(keys) {
        if (keys.e.pressed) {
            //key becomes invisible
            //pickedup becomes true
            //Player's "hasKey" property updated to true
            //disable input of e key; player can't pick up invisible key by mistake
        } else {

        }
    }

    resetKey(){
        //if player has walked through the door to next level
        //key becomes visible
        //pickedup becomes false
        //player's hasKey = false
        //enable e key input
    }



}