'use strict';

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


