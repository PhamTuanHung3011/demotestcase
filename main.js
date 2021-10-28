let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let NgocTrinh = new nhanVatPhu(document.getElementById('ngoctrinh'),0,0,200,200,1);
let LanNgoc = new nhanVatPhu(document.getElementById('lanngoc'), 218,0,200,200,2);
let KhaNgan = new nhanVatPhu(document.getElementById('khangan'),436,0,200,200,2);
let Mikami = new nhanVatPhu(document.getElementById('mikami'),650,0,200,200,1);
let Zoro = new nhanVatPhu(document.getElementById('zoro'), 868,0,200,200,1)
let Sanji = new nhanVatPhu(document.getElementById('sanji'), 1078,0,200,200,1)
let Nobita = new NhanVatChinh(document.getElementById('nobita'),0,450,200,200, 1.0);

NgocTrinh.drawImgOne(ctx);
LanNgoc.drawImgOne(ctx);
KhaNgan.drawImgOne(ctx);
Mikami.drawImgOne(ctx);
Zoro.drawImgOne(ctx);
Sanji.drawImgOne(ctx);



function clearCanvas() {
    ctx.clearRect(0, 0, 1500, 650);
}



    document.getElementById('mikami').style.display = 'none';
    document.getElementById('ngoctrinh').style.display = 'none';
    document.getElementById('khangan').style.display = 'none';
    document.getElementById('lanngoc').style.display = 'none';
    document.getElementById('nobita').style.display = 'none';
    document.getElementById('zoro').style.display = 'none';
    document.getElementById('sanji').style.display = 'none';
    // document.getElementById('nobita').style.display = 'none';
