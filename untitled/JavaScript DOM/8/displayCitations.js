/**
 * Created by i on 2017/3/11.
 */

//显示文献来源链接表

addLoadEvent(displayCitations);
function displayCitations() {
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode)return false;
    //取得所有的引用
    var quotes=document.getElementsByTagName("blockquote");
    //遍历引用
    for(var i=0;i<quotes.length;i++){
        //如果没有继续循环
        if(!quotes[i].getAttribute("cite")){
            continue;
        }
        //保存cite属性
        var url=quotes[i].getAttribute("cite");
        //取得引用中的所有元素节点
        var quoteChildren=quotes[i].getElementsByTagName("*");
        //如果没有继续循环
        if(quoteChildren.length<1)continue;
        //取得引用中的最后一个元素节点
        var elem=quoteChildren[quoteChildren.length-1];
        //创建标记
        var link=document.createElement("a");
        var link_text=document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var suoerscript=document.createElement("sup");
        suoerscript.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(suoerscript);

    }
}
