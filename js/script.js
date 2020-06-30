'use strict';


function fun1() {
  var rng=document.getElementById('calc-range'); //rng - это Input
  var p=document.getElementById('calc-title__summ'); // 
  var k=document.getElementById('calc-commission__value'); // 
  var m=document.getElementById('calc-mymoney'); // 
  p.innerHTML = rng.value;

  if (rng.value < 50000){
    k.innerHTML = Math.round(rng.value * 0.02);    
  }
  if (rng.value >= 50000 && rng.value < 100000){
    k.innerHTML = Math.round(rng.value * 0.03);    
  } 
  if (rng.value >= 100000 && rng.value < 150000){
    k.innerHTML = Math.round(rng.value * 0.04);    
  }
  if (rng.value >= 150000 && rng.value <= 200000){
    k.innerHTML = Math.round(rng.value * 0.05);    
  }  
}

(function(){ 

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
              
      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#Vector');
      let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#ffffff","strokeCap":"square"}); 
      myAnimation.paint(); 
    }
  };

})();


const open = document.querySelector('.header-burger__icon');
const openMenu = document.querySelector('.header-burger__menu');
const openPopup = document.querySelector('.header-btn');
const openPopupMobile = document.querySelector('.header-btn__mobile');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup-close');
const body = document.querySelector('body');
const userCabinet = document.querySelector('.user-cabinet');


open.addEventListener('click', function(event){
  event.stopPropagation();
  open.classList.toggle('burger-close');
  openMenu.classList.toggle('active');
});


body.addEventListener('click', function(){
  open.classList.remove('burger-close');
  openMenu.classList.remove('active');
});

openPopup.addEventListener('click', function(event){
  event.stopPropagation();
  popup.classList.toggle('popup-open');
});

popupClose.addEventListener('click', function(event){
  event.stopPropagation();
  popup.classList.toggle('popup-open');
});

userCabinet.addEventListener('click', function(event){
  event.stopPropagation();
  popup.classList.toggle('popup-open');
});

openPopupMobile.addEventListener('click', function(event){
  event.stopPropagation();
  popup.classList.toggle('popup-open');
});


