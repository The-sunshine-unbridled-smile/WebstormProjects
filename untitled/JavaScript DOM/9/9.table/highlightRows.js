/**
 * Created by i on 2017/3/12.
 */
//鼠标停在某个表格上方是把该行文本加粗加黑
addLoadEvent(highlightRows);
function highlightRows() {
    if(!document.getElementsByTagName)return false;
    var rows=document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].onmouseover=function () {
            this.style.fontWeight="bold";
        }
        rows[i].onmouseout=function () {
            this.style.fontWeight="normal";
        }
    }
}
