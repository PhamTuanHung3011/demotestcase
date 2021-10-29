let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let NgocTrinh = new nhanVatPhu(document.getElementById('ngoctrinh'), 0, -20, 200, 200, 1);
let Sanji = new nhanVatPhu(document.getElementById('sanji'), 210, -20, 200, 200, 4);
let ThiNo1 = new nhanVatPhu(document.getElementById('thino1'), 420, -20, 200, 200, 1);
// let ThiNo2 = new nhanVatPhu(document.getElementById('thino2'), 630, 0, 200,200,2);
let Mikami = new nhanVatPhu(document.getElementById('mikami'), 840, -20, 200, 200, 1);
let Zoro = new nhanVatPhu(document.getElementById('zoro'), 630, -20, 200, 200, 5)
let Nobita = new NhanVatChinh(document.getElementById('nobita'), 420, 550, 200, 100, 10);
Nobita.drawNvChinh(ctx);

let array = [Zoro, Sanji];

const interval = setInterval(() => {

    ctx.clearRect(0, 0, 1250, 650);
    Nobita.drawNvChinh(ctx);
    ThiNo1.move(ctx);
    if (ThiNo1.y === 650) {
        clearInterval(interval);
        diemA(100);
    }
    {

    }

}, 1);

function Start() {

}

function diemA(timeOut) {

    let interval2 = setInterval(() => {

        if (+document.getElementById('input1').value === 10) {
            clearInterval(interval2);
            document.getElementById('input1').value = 0;
            diemA(10)
        }

        ctx.clearRect(0, 0, 1250, 650);
        Nobita.drawNvChinh(ctx);

        array.forEach(nhanvat => {
            nhanvat.move(ctx)
            let toadoXNobita = Nobita.x + Nobita.width;
            let toadoXnhanvat = nhanvat.x + nhanvat.Crong;
            let toadoYnhanvat = nhanvat.y + nhanvat.Cdai;
            if (((Nobita.x > nhanvat.x && Nobita.x < toadoXnhanvat) || (toadoXNobita > nhanvat.x && toadoXNobita < toadoXnhanvat))
                && (Nobita.y <= toadoYnhanvat))  {
                console.log('va cham');
            }
        });
        // LanNgoc.move(ctx);
        // KhaNgan.move(ctx);
    }, timeOut);
}

function inPact() {
    let count = 0
    if (Nobita.y === Sanji.y && Nobita.x === Sanji.x) {
        count++
        console.log(count++);
        alert('va cham');
    }
}


document.getElementById('thino1').style.display = 'none';
document.getElementById('mikami').style.display = 'none';
document.getElementById('ngoctrinh').style.display = 'none';
document.getElementById('khangan').style.display = 'none';
document.getElementById('lanngoc').style.display = 'none';
document.getElementById('nobita').style.display = 'none';
document.getElementById('zoro').style.display = 'none';
document.getElementById('sanji').style.display = 'none';
// document.getElementById('nobita').style.display = 'none';
// function di chuyen
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            Nobita.moveLeft();
            break;
        case 39:
            Nobita.moveRight();
            break;

    }
}


window.addEventListener('keydown', moveSelection);

