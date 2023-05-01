const collisionsLevel1 = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//vv this method is apparently controversial because you shouldn't alter default JS objects
Array.prototype.parse2D = function() {
    const rows = []
    for (let i = 0; i < this.length; i+=16) {
        rows.push(this.slice(i, i + 16))
    } //creates a 2d array from the data

    return rows
}

class CollisionBlock {
    constructor({ position }){
        this.position = position
        this.width = 64 //set to actual size of blocks in Tiled
        this.height = 64
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const collisionBlocks = []

const parsedCollisions = collisionsLevel1.parse2D()
parsedCollisions.forEach((row, y )=> {

    row.forEach((symbol, x) => {
        if (symbol === 292) {
            collisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 64, //push block to the right @ appropriate amount
                    y: y * 64, //push block up/down @ appropriate amount
                }
            }))
        }
    })
})