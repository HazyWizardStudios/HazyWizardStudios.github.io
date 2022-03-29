function changePage(newPage){console.log(newPage);document.getElementById("bodyMain").innerHTML=`<object type="text/html" data=${newPage}></object>`;document.getElementsByClassName("dropdownContent").style.display="none";}

window.addEventListener("load", function(){
    changePage("News.html");
<<<<<<< HEAD
    console.log("page loaded");
  });

  const discordH3 = document.getElementById("discord-h3");
  const youtubeH3 = document.getElementById("youtube-h3");
  const instagramH3 = document.getElementById("instagram-h3");

  document.getElementById("discord-h3").addEventListener("click", function(){
    changePage("Discord.html");
  });

  youtubeH3.addEventListener("click", function(){
    changePage("Youtube.html");
  });
  
  instagramH3.addEventListener("click", function(){
    changePage("Instagram.html");
=======
>>>>>>> parent of 46ba805 (adjusted heights)
  });