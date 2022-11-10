// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

 


function scrollFunction() {

  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    document.getElementById("beforeScrollNav").style.visibility = "visible";
    document.getElementById("afterScrollNav").style.visibility = "hidden";
    document.getElementById("beforeScrollImg").style.visibility = "hidden";
    document.getElementById("afterScrollFooS").style.visibility = "visible";
    document.getElementById("afterScrollFooB").style.visibility = "visible";

  } else {
    document.getElementById("beforeScrollNav").style.visibility = "hidden";
    document.getElementById("afterScrollNav").style.visibility = "visible";
    document.getElementById("beforeScrollImg").style.visibility = "visible";
    document.getElementById("afterScrollFooS").style.visibility = "hidden";
    document.getElementById("afterScrollFooB").style.visibility = "hidden";
  } 
}


function  onClickFunc(element){
    let countOfClicks = element.count;


if(isEven(countOfClicks) === true){
    element.style.visibility = "visible"
} else {
    element.style.visibility = "hidden"}
}


function isEven(num){
    if (num % 2 === 1){
        return true;
    }
    else{
        return false;
    }
}