/*Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
Entre 30 e 34,99	Obesidade I
Entre 35 e 39,99	Obesidade II (severa)
Acima de 40	Obesidade III (mórbida)
*/

function verificar(){
    let alt = document.getElementById('alt').value
    let peso = document.getElementById('peso').value
    let res = document.querySelector('div#res')
  

  let imc = (peso / (alt * alt)).toFixed(1);


 if(alt > 0 && peso >0 ){ 
    
  res.innerHTML  += `Seu IMC é ${imc} <br>`;
 

    if(imc < 17  ){
         res.innerHTML +=' Muito abaixo do peso'
    }
    else if(imc >=17 && imc <= 18.49 ){
        res.innerHTML +=' abaixo do peso'
    }
    
    else if(imc >= 18.5 && imc <= 24.99){
        res.innerHTML +=' Peso normal'

    }
    else if(imc >=25 && imc <= 29.99){
        res.innerHTML += 'Acima do peso'

    }
    else if(imc >=30 && imc <=34.99 )[
        res.innerHTML +=' Obesidade I'
      
    ]
    else if(imc >35 &&  imc <= 39.99){
        res.innerHTML += 'Obesidade II (severa) '

    }
    else if( imc > 40 ){
        res.innerHTML += ' Obesidade III (mórbida)'

    }
 }

 else{
    res.innerHTMl = 'Verifique os valores digitados'
    
 }
 

}

