
/**
 * Funciones en el script slideshow.js
 * 
 * Estas funciones van a controlar el funcionamiento el componente slideshow.
 * 
 * Este slideshow tendrá unos controladores para pasar hacia alante y hacia atrás, los slides.
 * 
 * También tendrá unos puntos para poder seleccionar y ver cada slide.
 * 
 * También será automático y podremos ir viendo cada slide cada cierto tiempo.
 */

//Inicializamos un contador slideIndex
let slideIndex = 1;
let autoSlide;
let dots = document.querySelectorAll(".dot");

//Mostramos el primer slide uando se carga la web
showSlide(slideIndex);
//Iniciamos el funcionamiento automático del slide show
startAutoSlide()

//Selecionamos las flechas para next y prev slide
let nextSlideArrow = document.querySelector(".next");
let prevSlideArrow = document.querySelector(".prev");

for (j=0; j<dots.length; j++) {
    dots[j].addEventListener("click", function(){
        stopAutoSlide();
        showSlide();
        startAutoSlide();
    })
}

nextSlideArrow.addEventListener("click", function(){
    stopAutoSlide();
    nextPrevSlide(1);
    startAutoSlide();
})

prevSlideArrow.addEventListener("click", function(){
    stopAutoSlide();
    nextPrevSlide(-1);
    startAutoSlide();
})

/**
 * 
 * @param {number} n 
 * 
 * Esta función aumenta o disminuye el slideIndex en función del parametro que le llegue
 */
function nextPrevSlide(n){
    //slideIndex += n;
    slideIndex = slideIndex+n;
    showSlide(slideIndex);
}

/**
 * 
 * @param {number} n 
 * 
 * El click en los puntos actualiza el slide index
 */
function currentSlide(n){
    slideIndex = n;
    showSlide(slideIndex);
}

/**
 * 
 * @param {number} slideNumber 
 * 
 * Esta función hace que se vea un slide en concreto
 */
function showSlide(slideNumber){
    let slides = document.querySelectorAll(".mySlides");

    if(slideNumber > slides.length){
        slideIndex=1;
    }

    if(slideNumber < 1){
        slideIndex = slides.length;
    }

    //Bucle for para recorrer el array de slides
    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Otro bucle for para recorrer el array de dots, podría ir en el de arriba!
    for(j=0; j<dots.length; j++){
        dots[j].className = dots[j].className.replace(" active","");
    }

    //Accedemos al índice del array de slides o dots para esto tenemos que restar -1 al slideIndex
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Automatizamos la llamada a la función nextPrevSlide usando la función built-in setInterval()
//Iniciamos el comportamiento automático del slideShow
function startAutoSlide(){
    autoSlide = setInterval(function(){
        nextPrevSlide(1);
    }, 3000);
}

function stopAutoSlide(){
    clearInterval(autoSlide);
}