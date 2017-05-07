/**
 * Created by i on 2017/3/9.
 */
function popUp(winURL) {
    window.open(winURL,'','width=200,height=100');

}
window.onload=prepareLinks;
function prepareLinks() {
    var links=document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        if(links[i].getAttribute("class")=="popup"){
            links[i].onclick=function () {
                popUp(this.getAttribute("href"));
                return false;

            }
        }
    }
}


/*
window.onload=function () {
    if(!document.getElementsByTagName)return false;
    var links=document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        if(links[i].getAttribute("class")=="popup"){
            links[i].onclick=function () {
                popUp(this.getAttribute("href"));
                return false;

            }
        }
    }


}*/
