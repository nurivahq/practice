const slider = document.getElementById("testimonialSlider");

const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

const dots = document.querySelectorAll(".dots span");

const cards = document.querySelectorAll(".testimonial");


let currentIndex = 0;


function moveSlider(index){

    if(index < 0) index = 0;

    if(index >= cards.length) index = cards.length - 1;


    currentIndex = index;


    let width = cards[0].offsetWidth + 35;


    slider.scrollTo({

        left: width * index,

        behavior:"smooth"

    });


    updateDots();

}



rightBtn.addEventListener("click",()=>{

    moveSlider(currentIndex + 1);

});



leftBtn.addEventListener("click",()=>{

    moveSlider(currentIndex - 1);

});





dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        moveSlider(index);

    });

});




function updateDots(){

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });


    if(dots[currentIndex]){

        dots[currentIndex].classList.add("active");

    }

}