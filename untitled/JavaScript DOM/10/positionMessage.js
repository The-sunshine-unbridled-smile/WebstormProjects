/**
 * Created by i on 2017/3/13.
 */


function positionMessage() {
    if (!document.getElementById)return false;
    if (!document.getElementById("message"))return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "99px";
    moveElement("message", 200, 100, 10);


//s设置一个等待时间，在5000毫秒后调用moveMessage函数；
    // movement = setTimeout("moveMessage()", 5000);
//取消跳跃
    //clearTimeout(movement);
}
addLoadEvent(positionMessage);

//改变原来的位置
/*function moveMessage() {
 if (!document.getElementById)return false;
 if (!document.getElementById("message"))return false;
 var elem = document.getElementById("message");
 elem.style.position = "absolute";
 elem.style.left = "200px";
 }*/
/*
 function moveMessage() {
 if (!document.getElementById)return false;
 if (!document.getElementById("message"))return false;
 var elem = document.getElementById("message");
 var xpos = parseInt(elem.style.left);
 var ypos = parseInt(elem.style.top);
 if (xpos == 200 && ypos == 100) {
 return true;
 }
 if (xpos < 200) {
 xpos++;
 }
 if (xpos > 200) {
 xpos--;
 }
 if (ypos < 100) {
 ypos++;
 }
 if (ypos > 100) {
 ypos--;
 }
 elem.style.position = "absolute";
 elem.style.left = xpos + "px";
 elem.style.top = ypos + "px";
 setTimeout("moveMessage()", 1000);
 }*/





