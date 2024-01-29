/*Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
Entre 30 e 34,99	Obesidade I
Entre 35 e 39,99	Obesidade II (severa)
Acima de 40	Obesidade III (mórbida)
*/

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();         // não permite o envio do formulario
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');  // e.target pega os valores dentro dos inputs
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value.replace(',', '.'));


for(let errorText of form.querySelectorAll('.error-text')) {
 errorText.remove();}

for(let campo of form.querySelectorAll('.validar')) {
const label = campo.previousElementSibling.innerText;

if (campo.id === 'peso') {
    validaPeso(campo, peso, label);} 
    
if (campo.id === 'altura') {
 validaAltura(campo, altura, label);
}}

function criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');             //insertAdjacentElement permite inserir um novo elemento adjacente a um elemento existente
    campo.insertAdjacentElement('afterend', div);}  // "afterend" significa depois do fim do elemento de referência.

function validaPeso(campo,peso,label){
 if(!peso ){
    criaErro(campo, `Campo "${label}" Está invalido. `)
   return;}}

function validaAltura(campo,altura,label){
    if(!altura ){
       criaErro(campo, `Campo "${label}"  Está invalido. `)
      return; }} 

      const divres = document.querySelector('#res');
      const resultadoImc = calculaImc(peso, altura);
 
 // Verifica se os campos são válidos antes de calcular o IMC

    if (!isNaN(resultadoImc)) {
        divres.innerHTML = `Seu IMC é ${resultadoImc} - `;
        indiceImc(resultadoImc, divres);
    } else {
        // Trata a situação quando o IMC não pode ser calculado
        divres.innerHTML = 'Verifique os valores de peso e altura.';
    return;}

// Limpa os valores após o envio do formulário
document.querySelector('#peso').value = '';
document.querySelector('#altura').value = '';

function calculaImc(peso,altura){
    if(peso > 0 && altura > 0){
    const imc = peso / altura ** 2;
     return imc.toFixed(2);
    }
     else{
        return ;
        }
} 
function indiceImc(){
    if(resultadoImc < 18.5){
        divres.innerHTML += '(Abaixo do peso)';
      }
      else if ( resultadoImc >= 18.5 && resultadoImc <= 24.9){
          divres.innerHTML += ' (Peso normal)';
      }
      else if(resultadoImc <= 29.9 ){
          divres.innerHTML+= '(Sobrepeso)';
      }
      else if( resultadoImc <= 34.9){
          divres.innerHTML += '(Obsidade grau 1)';                                 
      }
      else if(resultadoImc <= 39.9){
          divres.innerHTML += '(Obsidade grau 2)';
      }
      else if (resultadoImc > 40) {
          divres.innerHTML += '(Obsidade grau 3)';
      }}
});