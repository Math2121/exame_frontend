function cartao(){
  var numero = document.getElementById('numero')
  var nome = document.getElementById('nome')
  var validade = document.getElementById('validade')

  var numero_cartao =  document.getElementById('numero_cartao').value
  var nome_cartao =  document.getElementById('nome_cartao').value
  var validade_cartao = document.getElementById('validade_cartao').value
  
  var div = document.getElementById('vazio')
  div.style.display = "none"


  numero.innerHTML = numero_cartao
  nome.innerHTML = nome_cartao
  validade.innerHTML = validade_cartao

  var div_cartao = document.getElementById('img_cartao')

  div_cartao.style.display = "block"
  numero.style.display= "block"

} 

window.setTimeout(function codigo(){
  var div_cartao = document.getElementById('img_cartao')
    div_cartao.style.backgroundImage = "url('./assets/cvv.png') "
    div_cartao.style.backgroundRepeat = "no-repeat"
    var cvv = document.getElementById('cvv_id')

    var cvv_val = document.getElementById('cvv').value
    cvv.innerHTML = cvv_val

    var numero = document.getElementById('numero')
    var visa = document.getElementById('visa')
    var validade = document.getElementById('validade')
    var nome = document.getElementById('nome')
   
    cvv.style.display = "block"
    cvv.style.marginLeft = "60px"
    cvv.style.color = "black"
    cvv.style.marginTop = "10px"
    numero.style.display = "none"
    validade.style.display = "none"
    visa.style.display = "none"
    nome.style.display = "none"
  
  

},10000)









$(document).ready(function(){
  $('select').formSelect();
});