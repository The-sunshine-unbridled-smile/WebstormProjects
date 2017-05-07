/**
 * Created by i on 2017/3/10.
 */

/*
 function show() {
 var lis = document.getElementsByTagName("*").length;
 lis.innerHTML
 alert(lis);

 /!* for (var i = 0; i < lis.length; i++) {
 alert(typeof lis[i]);
 }*!/
 }*/


function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else {
        window.onload=function () {
            oldonload();
            func();

        }
    }
}
function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
//删掉html中的p和img标签，用js代码将他们创建出来。
window.onload=preparePlaceholder;
function preparePlaceholder() {
    if(!document.createElement)return false;
    if(!document.createTextNode)return false;
    if(!document.getElementById)return false;
    if(!document.getElementById("imagegallery"))return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","baidu.png");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("choose a image");
    description.appendChild(desctext);
    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);


function prepareGallery() {
    if (!document.getElementsByTagName)return false;
    if (!document.getElementById)return false;
    if (!document.getElementById("imagegallery"))return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this) ? false : true;
        }
        links[i].onkeypress=links[i].onclick();
    }
}
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("name");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG")return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
            description.innerHTML=text;
    }
    return true;

}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);






    //将placehoder和description插入图片清单的前面
   /* var gallery=document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(placeholder,gallery);
    gallery.parentNode.insertBefore(description,gallery);*/
}

