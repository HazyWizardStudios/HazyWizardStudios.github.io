function changePage(newPage){console.log(newPage);jQuery("#bodyMain").html(`<object type="text/html" data=${newPage}></object>`);}

$( document ).ready(function() {
    console.log( "ready!" );
    changePage("News.html")
});