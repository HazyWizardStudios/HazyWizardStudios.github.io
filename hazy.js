function changePage(newPage){
    console.log(newPage);
    document.getElementById("bodyMain").innerHTML=`<object type="text/html" data=${newPage}></object>`;
}