class Player {
    // what properties are associated with each player?
    constructor() {
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
    }

    // what does the player look like?
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    // what properties within the player class should be altered over time?
    update() {
        this.position.y += this.velocity.y

        //above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y += 1
            this.sides.bottom = this.position.y + this.height
        }
    }
}