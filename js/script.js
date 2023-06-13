//this is a constant varible
//It was set equal to a function
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  //promises result in pending, resolved or rejected
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

function AnimateIcon(x){
    animateCSS('.dot' + x, 'tada')
}



/*
//var oldScrollY = 0;
//var currentMode = 0;
// Second Segement
//function AnimateScroll() {
    //oldScrollY = window.scrollY;
       //if ((oldScrollY <= window.scrollY) && (window.scrollY > 250) && (currentMode == 0)){
          //scroll up
          //animateCSS('.slide1', 'fadeInLeft')
          //$(".slide1").show();
          //currentMode = 1;
       // }
        //if((oldScrollY <= window.scrollY) && (window.scrollY < 250) && (currentMode == 1)){
            //scroll down
          //  animateCSS('.slide1', 'fadeOutLeft')
           // $(".slide1").hide();
           // currentMode = 0;
      //  }
      //oldScrollY = window.scrollY;



//}

const scrollElements = document.querySelectorAll(".js-scroll");
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
  //element.classList.remove("unscrolled");

};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
  //element.classList.add("unscrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    }
  )
}

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
      return (
    elementTop <= 
  ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
 );
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})
*/

