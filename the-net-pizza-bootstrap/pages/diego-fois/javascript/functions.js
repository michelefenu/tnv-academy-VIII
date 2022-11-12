// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

 


function scrollFunction() {

  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {

    /* **** hidden Image **** */
    document.getElementById("beforeScrollNav").style.visibility = "visible";
    document.getElementById("afterScrollNav").style.visibility = "hidden";
    document.getElementById("beforeScrollImg").style.visibility = "hidden";

  } else {
    /* **** visible Image **** */
    document.getElementById("beforeScrollNav").style.visibility = "hidden";
    document.getElementById("afterScrollNav").style.visibility = "visible";
    document.getElementById("beforeScrollImg").style.visibility = "visible";
  } 
}

function toggleIngr(butToClick, tgToHide, imageToOpa){

  if(butToClick.style.visibility === "hidden"){
    imageToOpa.style.opacity = "30%";
    tgToHide.style.visibility = "hidden";
    butToClick.style.visibility = "visible";
  } else {
    butToClick.style.visibility = "hidden";
    imageToOpa.style.opacity = "100%";
  }
}