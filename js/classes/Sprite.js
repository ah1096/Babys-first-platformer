class Sprite {
    constructor({position, imageSrc}) { //using object syntax so that you can easily add position to each new instance
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / 11 //framecount (# frames in sprite sheet); make dynamic later
            this.height = this.image.height
        }
        this.image.src = imageSrc
        this.loaded = false
    }
    draw() {
        if (!this.loaded) return
        const cropbox = { 
            position: {
                x: 0,
                y: 0,
            },
            width: this.width,
            height: this.height,
        }
        c.drawImage(this.image, this.position.x, this.position.y) //render a JS Image() object + position on x and y axes
    }
}