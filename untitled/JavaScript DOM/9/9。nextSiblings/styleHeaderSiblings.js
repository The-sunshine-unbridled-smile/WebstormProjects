/**
 * Created by i on 2017/3/12.
 */
//设置H1的下一个元素style
addLoadEvent(styleHeaderSiblings);

function styleHeaderSiblings() {
    if(!document.getElementsByTagName)return false;
    var header=document.getElementsByTagName("h1");
    var elem;
    for(var i=0;i<header.length;i++){
        elem =getNextElement(header[i].nextSibling);
        elem.style.fontSize="1.2em";
        elem.style.fontWeight="bold";
    }
}
function getNextElement(node) {
    if(node.nodeType==1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}