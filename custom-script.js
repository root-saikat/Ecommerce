$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// mobile menu 

let micon = document.querySelector('.m-menu-icon');
let mnav = document.querySelector('.m-menu');
let mxicon = document.querySelector('.fa-xmark');

micon.addEventListener('click', () =>{
    mnav.style.display = "grid";
});
mxicon.addEventListener('click', () =>{
    mnav.style.display = "none";
});

let am = document.querySelectorAll('.nav-link').forEach(element=>{
    element.onclick = function(){
    mnav.style.display = "none";
    }
});

