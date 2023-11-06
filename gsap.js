 
 tl = gsap.timeline()

 tl.from('nav ',{
    x : -100,
    duration : 0.2,
    stagger : 0.1,
    opacity : 0

})

 
 tl.from('nav li',{
    y : -100,
    duration : 0.3,
    stagger : 0.1,
    opacity : 0

})
 
tl.from('h1 , p , #guess , .guessField' , {
    x : -100,
    duration : 0.3,
    stagger : 0.1,
    opacity : 0

})
tl.from('.guessSumbit',{
    opacity: 0
})


   let form = document.querySelector(".form")
   form.addEventListener('onclick',function(e){
    e.preventDefault()
   })