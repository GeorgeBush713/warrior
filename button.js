/*let button = document.querySelector('.clik');                                 /*Кнопка красная-зелёная/

button.onclick = function (){
  button.classList.toggle('red');
  button.classList.toggle('green');
  console.log('Клик');
}*/

/*let number = document.querySelector('.number');
let counterNumber = document.querySelector('.counter-number');

number.onclick = function (){
  if (number.classList.contains('added')){
      counterNumber.textContent--;
  }
  else {
    counterNumber.textContent++;
  }
  number.classList.toggle('added');
};*/

let number = document.querySelector('.number');
let counterNumber = document.querySelector('.counter-number');

let rick = document.querySelector('.Rick');
let ric = document.querySelector('.Ric');
let ri = document.querySelector('.Ri');


let buttonPower = document.querySelector('.button-power');
let buttonAgility = document.querySelector('.button-agility');
let buttonMagic = document.querySelector('.button-magic');

let counterBP = 0;
let counterBA = 0;
let counterBM = 0;

let counterP = 0;
let counter3P = 0;

let counterA = 0;
let counter3A = 0;

let counterM = 0;
let counter3M = 0;


buttonPower.onclick = function(){                                               /*Кнопка силы*/
  counterBP++;
  if (counterBP == 1) {
    number.onclick = function (){
      counterP ++;
      let counter2P = counterP + '%';
      document.getElementById('elemP').style.width = counter2P;
      document.getElementById('elemP1').textContent = counterP;
      if (counterP == 100){
        counterP = 0;
        counter3P++;
        document.getElementById('elemP2').textContent = counter3P;
        if (counter3P >= 10) {
          rick.classList.remove('Rick');
        }
      }
    }
    console.log(counter3P);
    counterBP = 0;
    }
  }


buttonAgility.onclick = function (){                                               /*Кнопка ловкости*/
  counterBA++;
  if (counterBA == 1) {
    number.onclick = function (){
      counterA ++;
      let counter2A = counterA + '%';
      document.getElementById('elemA').style.width = counter2A;
      document.getElementById('elemA1').textContent = counterA;
      if (counterA == 100){
        counterA = 0;
        counter3A++;
        document.getElementById('elemA2').textContent = counter3A;
        if (counter3A >= 15) {
          ric.classList.remove('Ric');
        }
      }
    }
    counterBA = 0;
  }
  console.log(counter3A);
}

buttonMagic.onclick = function (){                                               /*Кнопка магии*/
  counterBM++;
  if (counterBM == 1) {
    number.onclick = function (){
      counterM ++;
      let counter2M = counterM + '%';
      document.getElementById('elemM').style.width = counter2M;
      document.getElementById('elemM1').textContent = counterM;
      if (counterM == 100){
        counterM = 0;
        counter3M++;
        document.getElementById('elemM2').textContent = counter3M;
        if (counter3M >= 10) {
          ri.classList.remove('Ri');
        }
      }
    }
    counterBM = 0;
  }
  console.log(counter3M);
}
