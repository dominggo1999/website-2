const navBar = document.querySelector("nav");
const navigation = document.querySelector(".nav-list");
const toggleBtn = document.querySelector(".nav-toggle");
const height = window.innerHeight;

console.log("arnold");

// Show navbar and animate toggle button 
toggleBtn.addEventListener("click",()=>{
    navigation.classList.toggle("toggle");
    toggleBtn.classList.toggle("rotate");
})

// If navbar is expanded and window is resized > $medium then remove toggle class
window.onresize = () =>{
    if(window.innerWidth >= 720 && navigation.classList.contains("toggle")){
        navigation.classList.remove("toggle");
        toggleBtn.classList.remove("rotate");
    }
}

// Make navbar sticky when scroll > 400 
window.onscroll = () =>{
    if(window.pageYOffset > 70){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
}


// Slide Navigation
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const spans = document.querySelectorAll(".slide-nav span");

let count = 0;

//Function
const nextSlide = (e) =>{
    slides.forEach(slide=>{
        slide.classList.remove("active");
    })
    spans.forEach(span=>{
        span.classList.remove("active");
    })

    count++;
    if(count == slides.length){
        count=0;
    }
    slides[count].classList.add("active");
    spans[count].classList.add("active");
}

const prevSlide = (e) =>{
    slides.forEach(slide=>{
        slide.classList.remove("active");
    })

    spans.forEach(span=>{
        span.classList.remove("active");
    })

    count--;
    if(count == -1){
        count=slides.length - 1;
    }

    slides[count].classList.add("active");
    spans[count].classList.add("active");
}

const spanClicked = (e) =>{
    e.addEventListener("click",
    ()=>{
        spans.forEach(span=>{
            span.classList.remove("active");
        })

        e.classList.add("active");
        let target = e.getAttribute("data-target");
        count = target - 1;
        
        slides.forEach(slide=>{
            slide.classList.remove("active");
        })

        slides[count].classList.add("active");
    })
}

// Event Listener and calling the function 
nextBtn.addEventListener("click",nextSlide);
prevBtn.addEventListener("click",prevSlide);
spans.forEach(spanClicked);


const arr = [1,2,3,4,5,6];

arr.forEach((element, index, arr) => {
   console.log(element,index,arr[index]); 
});