class Player extends Sprite {
    // what properties are associated with each player?
    constructor({collisionBlocks =[], imageSrc, frameRate}) {
        super({imageSrc, frameRate}) //call Sprite's constructor
        this.position = {
            x: 200,
            y: 200,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }


        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1

        this.collisionBlocks = collisionBlocks
    }

    // what properties within the player class should be altered over time?
    update() {
        // this vv is the blue box
        // c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        this.position.x += this.velocity.x

        this.checkForHorizontalCollisions()
        this.applyGravity()

        this.hitbox = {
            position: {
                x: this.position.x + 58, //adjust side position of hitbox
                y: this.position.y + 34, //adjust vertical position of hitbox
            },
            // adjust actual size of hitbox VV
            width: 50,
            height: 53,
        }

        c.fillRect(
            this.hitbox.position.x, 
            this.hitbox.position.y, 
            this.hitbox.width, 
            this.hitbox.height
            )

        this.checkForVerticalCollisions()
    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i] //check for collision between this one block and player's position
    
            //check for collisions on all sides of Player
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && // LEFT of player vs RIGHT of block
                this.position.x + this.width >= collisionBlock.position.x && // RIGHT of player vs LEFT of block
                this.position.y + this.height >= collisionBlock.position.y && // BOTTOM of player vs TOP of block
                this.position.y <= collisionBlock.position.y + collisionBlock.height // TOP of player vs BOTTOM of block
            ) {
                //collision on x axis going to the left
                if (this.velocity.x < 0){
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01 // move player to RIGHT side of block; 0.01 adds buffer between objects
                    break // break out of for loop bc it's inefficient to keep running it when collision detected
                }
    
                //collision on x axis going to the right
                if (this.velocity.x > 0){
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                    break
                }
                }
            }
    }

    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }

    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            //same as checkHorizontal; checks collisions on all sides of player
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && // LEFT of player vs RIGHT of block
                this.position.x + this.width >= collisionBlock.position.x && // RIGHT of player vs LEFT of block
                this.position.y + this.height >= collisionBlock.position.y && // BOTTOM of player vs TOP of block
                this.position.y <= collisionBlock.position.y + collisionBlock.height // TOP of player vs BOTTOM of block
            ) {
                //collision on y axis going UP
                if (this.velocity.y < 0){
                    this.velocity.y = 0 // added to prevent y velocity from increasing w/ added gravity; prevent player clipping through to bottom after jumping
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01 // TOP of player hits BOTTOM of block; push player down 0.01
                    break 
                }

                //collision on y axis going DOWN
                if (this.velocity.y > 0){
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01 //BOTTOM of player hits TOP of block; push player up 0.01
                    break
                }
            }
        }
    }
}