 const slides = document.querySelectorAll(".slide");
 const nextBtn = document.querySelector(".nextBtn");
 const prevBtn = document.querySelector(".prevBtn");

 slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
 });

 let counter = 0;

 nextBtn.addEventListener("click", function(){
    counter++;
 });

 prevBtn.addEventListener("click", function(){
    counter--;
 });

 function carousel(){
    
 }







