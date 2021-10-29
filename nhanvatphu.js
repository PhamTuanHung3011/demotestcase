class nhanVatPhu {
    img;
    x
    y
    Cdai;
    Crong;
    speed;


    constructor(img, x ,y , Cdai, Crong, speed) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.Cdai = Cdai;
        this.Crong = Crong;
        this.speed = speed;


    }

    move(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.Cdai, this.Crong );
            if (this.y < 650) {
                this.y += this.speed;
            } else {
                this.y = 0;
                // this.speed = 1+ Math.random()* 10;

        }
    }
}
