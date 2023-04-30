class Player {
    // what properties are associated with each player?
    constructor() {
        this.position = {
            x: 100,
            y: 100
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
            if (this.sides.bottom < canvas.height){
        this.position.y++
        this.sides.bottom = this.position.y + this.height
    }
    }
}