var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var pressMouse = false;
var x;
var y;

cuadrito.addEventListener("mousedown", presionado);
cuadrito.addEventListener("mousemove", moviendo);
cuadrito.addEventListener("mouseup", noPresionado);

function presionado(evento){
    x = evento.offsetX;
    y = evento.offsetY;
    pressMouse = true;
}

function moviendo(evento){
    if(pressMouse){
        dibujarLinea("black", x, y, evento.offsetX, evento.offsetY, papel);
        x = evento.offsetX;
        y = evento.offsetY;
    }
}

function noPresionado(){
    if(pressMouse){
        dibujarLinea("black", x, y, evento.offsetX, evento.offSetY, papel);
        console.log(evento.offsetX);
        console.log(evento.offsetY);
        pressMouse = false;
    }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineWidth = 4;
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
