 const slides = document.querySelectorAll(".slide");
 const nextBtn = document.querySelector(".nextBtn");
 const prevBtn = document.querySelector(".prevBtn");

 slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
 })








