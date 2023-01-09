let paragraph=document.querySelector("p");
let image=document.querySelector("img");
let button1=document.querySelector(".option-one");
let firstscreen=document.querySelector(".option-one-screen");
let directions=document.querySelector(".directions");
let storyOpening=document.querySelector(".story-opening");
let HammerButton=document.querySelector(".HammerButton");
let PatchedButton=document.querySelector(".PatchedButton");
let Hammer1=document.querySelector(".Hammer1");
let Bandage=document.querySelector(".Patching")
let correctOption=document.querySelector(".Correct-Option")
let Win=document.querySelector(".Win")
let wrongOption=document.querySelector(".Wrong-Option")
let Lose=document.querySelector(".Lose")


//By click the paragraph, the image (which was hiddle using display:none in CCS) will appear
HammerButton.onclick=function() {
    Hammer1.style.display = "Block";
    storyOpening.style.display = "none";

};

PatchedButton.onclick=function() {
    Bandage.style.display = "Block";
    storyOpening.style.display = "none";

};

correctOption.onclick=function() {
    Win.style.display = "Block";
    Hammer1.style.display = "none";

};

wrongOption.onclick=function() {
  Lose.style.display = "Block";
  Hammer1.style.display = "none";

  
  
}



// .story-opening .Hammer1 .Patching  .Win .Lose




image.style.display="block";



