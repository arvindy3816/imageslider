const slides  = document.querySelectorAll(".slider")
var counter =0 ;
slides.forEach(
    (sliders, index) =>{
    sliders.style.left = `${index * 100}%`
   }
)

const goPrev =() =>{
    counter--;
    // alert()
    slideImage()
}

const goNext =() =>{
    counter++;
    // alert()
    slideImage()
}


const slideImage = () =>{
    slides.forEach(
        (sliders) =>{
            sliders.style.transform  =`translateX(-${counter * 100}%)`
        }
    )
}


// console.log(slides)