/*** Created by i on 2017/3/9.*/


/* window.onload=function () {
 var testdiv=document.getElementById("testdiv");
 testdiv.innerHTML="  <p>This is<em>my</em> content.</p>"
 }*/


 /*window.onload=function () {
    var para=document.createElement("p");
    var info="nodeName: ";
    info+=para.nodeName;
    info+=" nodeType: ";
    info+=para.nodeType;
    alert(info);
}*/




//通过插入元素节点，添加一些标记到文档
 /*window.onload=function () {
     var para=document.createElement("p");//1:创建一个元素节点；
     var testdiv=document.getElementById("testdiv");
     testdiv.appendChild(para);             //2:把这个元素节点追加到文档中的一个元素节点上；
     var txt=document.createTextNode("Hello  world");//3:创建一个文本节点；
     para.appendChild(txt);                  //4:把这个文本节点追加到刚才创建的元素节点上。

 }*/



//效果与html中<p>hello world<em>jiayou</em>i need you</p>一样（加油！！！！
 window.onload=function () {
     var para=document.createElement("p");
     var txt1=document.createTextNode("hello world");
     para.appendChild(txt1);
     var emphasis=document.createElement("em");
     var txt2=document.createTextNode("jiayou");
     emphasis.appendChild(txt2);
     para.appendChild(emphasis);
     var txt3=document.createTextNode("i need you");
     para.appendChild(txt3);
     testdiv.appendChild(para);
 }

