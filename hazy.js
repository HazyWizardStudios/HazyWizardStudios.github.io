
const burgerMenu = document.querySelector("#hambuger")

function changePage(newPage){console.log(newPage);document.getElementById("bodyMain").innerHTML=`<object type="text/html" data=pages/${newPage}></object>`;document.getElementById("hamburgerMenu").style.display="none"}

window.addEventListener("load", function(){
    changePage("News.html");
    }
)

function toggleMenu(){
    document.getElementById("hamburgerMenu").style.display="flex";
    console.log("clicked")
}