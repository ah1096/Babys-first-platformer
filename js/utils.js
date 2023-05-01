//vv this method is apparently controversial because you shouldn't alter default JS objects
Array.prototype.parse2D = function() { //parse collision data from big array exported out of Tiled
    const rows = []
    for (let i = 0; i < this.length; i+=16) {
        rows.push(this.slice(i, i + 16))
    } //creates a 2d array from the data

    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y )=> { //"this" references whatever array this method is being called on
        row.forEach((symbol, x) => {
            if (symbol === 292) {
                objects.push(new CollisionBlock({
                    position: {
                        x: x * 64, //push block to the right @ appropriate amount
                        y: y * 64, //push block up/down @ appropriate amount
                    }
                }))
            }
        })
    })

    return objects
}