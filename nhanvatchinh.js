class NhanVatChinh {
    img;
    x;
    y;
    height;
    width;
    speed;
    constructor(img, x, y, height, width,speed) {
        this.img = img
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
    }

    drawNvChinh(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.height, this.width);
    }


    moveLeft() {
        if(this.x >=1 && this.x <= 850) {
            this.x -= this.speed;
        }
    }

    moveRight() {
        if(this.x >= 0 && this.x < 850) {
            this.x += this.speed;
        }
    }


}

