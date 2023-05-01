class Sprite {
    constructor({position, imageSrc, frameRate = 1, animations, frameBuffer = 2, loop = true, autoplay = true}) { //set frameRate default to 1 so that at least one frame always loads
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
            this.width = this.image.width / this.frameRate //framecount is now dynamic
            this.height = this.image.height
        }
        this.image.src = imageSrc
        this.loaded = false
        this.frameRate = frameRate
        this.currentFrame = 0
        this.elapsedFrames = 0
        this.frameBuffer = frameBuffer
        this.animations = animations
        this.loop = loop
        this.autoplay = autoplay
        this.currentAnimation

        if (this.animations) {
            for (let key in this.animations){
                const image = new Image()
                image.src = this.animations[key].imageSrc
                this.animations[key].image = image
            }
        }
    }
    draw() {
        if (!this.loaded) return
        const cropbox = { 
            position: {
                x: this.width * this.currentFrame,
                y: 0,
            },
            width: this.width,
            height: this.height,
        }
        c.drawImage(
            this.image, 
            cropbox.position.x, //x-position of crop
            cropbox.position.y, //y-position of crop
            cropbox.width,
            cropbox.height, 
            this.position.x, //x of where image is rendered
            this.position.y, // y of where image is rendered
            this.width, //actual width of the image
            this.height //actual height of the image
            )

        this.updateFrames()
    }

    play() {
        this.autoplay = true
    }

    updateFrames() {
        if (!this.autoplay) return

        this.elapsedFrames++

        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate -1) {
                this.currentFrame++
            } else if (this.loop) {
                this.currentFrame = 0
            }
        }

        if (this.currentAnimation?.onComplete) { //make a double conditional with ? here; "if this currentAnimation is set AND has an onComplete property"
            if (
                this.currentFrame === this.frameRate - 1 && 
                !this.currentAnimation.isActive
                ) {
                this.currentAnimation.onComplete()
                this.currentAnimation.isActive = true
            }
            
        }
    }
}