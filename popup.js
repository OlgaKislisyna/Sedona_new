const popup = document.querySelector('.modal');
let openPopupButton = document.querySelector('.btn-map');
let closeForm = document.querySelector('body');
const form = popup.querySelector('form');
const input1 = document.querySelector('.js-input1');
let input1_btn_min = document.querySelector('.js-input1_btn-min');
let input1_btn_max = document.querySelector('.js-input1_btn-max');
const input2 = document.querySelector('.js-input2');
let input2_btn_min = document.querySelector('.js-input2_btn-min');
let input2_btn_max = document.querySelector('.js-input2_btn-max');

input1.addEventListener('input', function (evt){
  evt.preventDefault();
  console.log(this.value);
})





document.addEventListener('click',function (evt) {
   if((!evt.target.classList.contains('btn-map') &&
     !evt.target.closest('.modal') &&
     popup.classList.contains('modal--show')) /*||
     (evt.target.classList.contains('btn-map') &&
       popup.classList.contains('modal--show'))*/){
     popup.classList.remove('modal--show');
   }
})


openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
  })
