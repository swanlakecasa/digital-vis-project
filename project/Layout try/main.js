

let strips = document.querySelector('.strips');
let strip  = document.querySelectorAll('.strip');

strip.forEach(function(theStrip){
    theStrip.addEventListener('mouseenter', function() {
        strip[0].classList.remove('hoverin');
        theStrip.classList.add('hoverin');
    });
    theStrip.addEventListener('mouseleave', function() {
        theStrip.classList.remove('hoverin');
        strip[0].classList.add('hoverin');
    });
});