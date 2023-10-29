
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    
    return random;
}

document.getElementById('btn-generate-pin').addEventListener('click', function(){
    
    const pin = getPin();
    const pinFieldElement = document.getElementById('pin-field');
    pinFieldElement.value = pin;
})

document.getElementById('calculator-text').addEventListener('click', function(event){
   const number = event.target.innerText;
   const typeNumberField = document.getElementById('type-number-field');
   const previousTypeNumber = typeNumberField.value;
   if(isNaN(number)){
    if(number === 'C'){
        typeNumberField.value = '';
    }
    else if(number === '<'){
        const currentNumber = previousTypeNumber.split('');
        currentNumber.pop();
        const currentNumberString = currentNumber.join('');
        typeNumberField.value = currentNumberString;
    }

   }
   else{
     
     const currentTypeNumber = previousTypeNumber + number;
     typeNumberField.value = currentTypeNumber;
      
   }
   
})

document.getElementById('btn-pin-submit').addEventListener('click', function(){
    const pinFieldElement = document.getElementById('pin-field');
    const pinNumber = pinFieldElement.value;
    pinFieldElement.value = '';

    const typeNumberField = document.getElementById('type-number-field');
   
    const typeNumber = typeNumberField.value;
    typeNumberField.value = '';
    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');
   
    if(pinNumber === typeNumber){
        
        pinSuccess.style.display = 'block';
        pinFailure.style.display = 'none';
    }
    else{
        
        pinFailure.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})