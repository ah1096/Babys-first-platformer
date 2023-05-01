//vv this method is apparently controversial because you shouldn't alter default JS objects
Array.prototype.parse2D = function() { //parse collision data from big array exported out of Tiled
    const rows = []
    for (let i = 0; i < this.length; i+=16) {
        rows.push(this.slice(i, i + 16))
    } //creates a 2d array from the data

    return rows
}