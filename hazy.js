function changePage(newPage){console.log(newPage);document.getElementById("bodyMain").innerHTML=`<object type="text/html" data=${newPage}></object>`;}
function changePagePanel(newPage){console.log(newPage);this.ParentElement.document.getElementById("bodyMain").innerHTML=`<object type="text/html" data=${newPage}></object>`;}

/*window.onload=function(){if(document.getElementById('newsButton')!=null||document.getElementById('newsButton')!=""){document.getElementById('newsButton').click();}}*/