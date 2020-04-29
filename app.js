const navBar = document.querySelector("nav");
const navigation = document.querySelector(".nav-list");
const toggleBtn = document.querySelector(".nav-toggle");
const height = window.innerHeight;

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

window.onscroll = () =>{
    if(window.pageYOffset > 400){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
}