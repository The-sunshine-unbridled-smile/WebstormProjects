/**
 * Created by i on 2017/3/12.
 */
//为表格里的偶数行设置背景色
addLoadEvent(stripeTables);
function stripeTables() {
    if(!document.getElementsByTagName)return false;
    var tables=document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd=false;
        rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd==true){
                rows[j].style.backgroundColor="#ffc";
                odd=false;
            }else {
                odd=true;
            }
        }
    }
}
