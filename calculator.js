//console.log(localStorage.getItem('calculation'));

let calculation=localStorage.getItem('calculation')||'';

showCalculation(calculation);

function showCalculation(calculation) {
  if(calculation === ''){
    document.querySelector('.js-calculation').innerHTML=0;
  }else{
    document.querySelector('.js-calculation').innerHTML=calculation;
  }
  
}

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='1'){
    updateCalculation('1');
  } else if(event.key==='2'){
    updateCalculation('2');
  } else if(event.key==='3'){
    updateCalculation('3');
  } else if(event.key==='4'){
    updateCalculation('4');
  } else if(event.key==='5'){
    updateCalculation('5');
  } else if(event.key==='6'){
    updateCalculation('6');
  } else if(event.key==='7'){
    updateCalculation('7');
  } else if(event.key==='8'){
    updateCalculation('8');
  } else if(event.key==='9'){
    updateCalculation('9');
  } else if(event.key==='0'){
    updateCalculation('0');
  } else if(event.key==='+'){
    updateCalculation(' + ');
  } else if(event.key==='-'){
    updateCalculation(' - ');
  } else if(event.key==='*'){
    updateCalculation(' * ');
  } else if(event.key==='/'){
    updateCalculation(' / ');
  } else if(event.key==='.'){
    updateCalculation('.');
  } else if(event.key==='Enter'){
    calculation=eval(calculation);
    showCalculation(calculation);
    localStorage.setItem('calculation',calculation);
  } else if(event.key==='Backspace'){
    if(calculation.slice(-3) ===' + ' || calculation.slice(-3) ===' - ' || calculation.slice(-3) ===' * ' || calculation.slice(-3) ===' / '){
      calculation = calculation.slice(0,-3);
    }else{
      calculation = calculation.slice(0,-1);
    }    
    document.querySelector('.js-calculation').innerHTML=calculation;
    localStorage.setItem('calculation',calculation);    
  } else if(event.key==='F5'){
    calculation='';
      showCalculation(0); // empty pass
      localStorage.setItem('calculation',calculation);
  }
});

function updateCalculation(number) {
  calculation = calculation + number;
  //console.log(calculation);
  showCalculation(calculation);
  localStorage.setItem('calculation',calculation);
}
