var mouseevent="empty";
var oldx,oldy;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
wl=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color = document.getElementById("color").value;
wl = document.getElementById("wl").value;

mouseevent="mousedown";
}


canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    mouse_x= e.clientX - canvas.offsetLeft;
    mouse_y= e.clientY - canvas.offsetTop;
    if (mouseevent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=wl;
    ctx.moveTo(oldx,oldy);
    ctx.lineTo(mouse_x,mouse_y);
    ctx.stroke();
    }
    oldx=mouse_x;
    oldy=mouse_y;
}