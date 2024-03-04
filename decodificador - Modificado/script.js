var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");



function criptografar() {
  var texto = textInput.value;
  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  console.log(resultCripto);  // Adicione esta linha
  document.getElementById('output').innerHTML = '<textarea readonly rows="14" id="input-texto">' + resultCripto +
      '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar(\'' + resultCripto + '\')">Copiar</button>';
}

function descriptografar() {
  var texto = textInput.value;
  var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  console.log(resultDescripto);  // Adicione esta linha
  document.getElementById('output').innerHTML = '<textarea readonly rows="14" id="input-texto">' + resultDescripto +
      '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar(\'' + resultDescripto + '\')">Copiar</button>';
}

function copiar(textoCopiado) {
  console.log(textoCopiado);  // Adicione esta linha
  var textareaTemporario = document.createElement("textarea");
  textareaTemporario.value = textoCopiado;
  document.body.appendChild(textareaTemporario);
  textareaTemporario.select();
  document.execCommand('copy');
  document.body.removeChild(textareaTemporario);
  alert("Texto copiado.");
}