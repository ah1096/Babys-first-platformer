class Player {
    // what properties are associated with each player?
    constructor({
        collisionBlocks =[]
    }) {
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 100
        this.height = 100
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
        //check for horizontal collisions
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i] //check for collision between this one block and player's position

            //if a collision exists: if the left side of the player is <= right side of collision block, the two are colliding from left side of player
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && // LEFT of player vs RIGHT of block
                this.position.x + this.width >= collisionBlock.position.x && // RIGHT of player vs LEFT of block
                this.position.y + this.height >= collisionBlock.position.y && // BOTTOM of player vs TOP of block
                this.position.y <= collisionBlock.position.y + collisionBlock.height // TOP of player vs BOTTOM of block
            ) {
                //collision on x axis going to the left
                if (this.velocity.x < - 1){
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01 // move player to RIGHT side of block; 0.01 adds buffer between objects
                    break // break out of for loop bc it's inefficient to keep running it when collision detected
                }

                //collision on x axis going to the right
                if (this.velocity.x > 1){
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                    break
                }
            }
        }

        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        //above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y += this.gravity
        } else {
            this.velocity.y = 0
        }
    }
}