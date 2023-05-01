class Player {
    // what properties are associated with each player?
    constructor({
        collisionBlocks =[]
    }) {
        this.position = {
            x: 200,
            y: 200,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 25
        this.height = 25
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1

        this.collisionBlocks = collisionBlocks
    }

    // what does the player look like?
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    // what properties within the player class should be altered over time?
    update() {
        this.position.x += this.velocity.x
        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.checkForVerticalCollisions()

    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i] //check for collision between this one block and player's position
    
            //if a collision exists: if the left side of the player is <= right side of collision block, the two are colliding from left side of player
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

            //same as x axis; checks collisions on all sides of player
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