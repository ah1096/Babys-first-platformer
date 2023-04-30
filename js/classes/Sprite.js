class Sprite {
    constructor({position, imageSrc}) { //using object syntax so that you can easily add position to each new instance
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = imageSrc
        this.loaded = false
    }
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y) //render a JS Image() object + position on x and y axes
    }
}