function consultar() {
  var nome = document.getElementById("nome");
  var idade = document.getElementById("idade");
  var endereco = document.getElementById("endereco");
  var bairro = document.getElementById("bairro");
  var telefone = document.getElementById("telefone");



  nome.classList.replace("erro", "inp" );
  idade.classList.replace("erro", "inp" );
  endereco.classList.replace("erro", "inp" );
  bairro.classList.replace("erro", "inp" );
  telefone.classList.replace("erro", "inp" );

  
  var valorNome = nome.value.toUpperCase();
  var valorIdade = idade.value.toUpperCase();
  var valorEndereco = endereco.value.toUpperCase();
  var valorBairro = bairro.value.toUpperCase();
  var valorTelefone = telefone.value.toUpperCase();

  var resultado = document.getElementById("resposta");

  if (valorNome == "") {
    resultado.innerHTML = "";
    alert("Preencha todos os campos por favor!!");
    nome.className = "erro";
  } else if (valorIdade == "") {
    resultado.innerHTML = "";
    alert("Preencha todos os campos por favor!!");
    idade.className = "erro";
  } else if (valorEndereco == "") {
    resultado.innerHTML = "";
    alert("Preencha todos os campos por favor!!");
    endereco.className = "erro";
  } else if (valorBairro == "") {
    resultado.innerHTML = "";
    alert("Preencha todos os campos por favor!!");
    bairro.className = "erro";
  } else if (valorTelefone == "") {
    resultado.innerHTML = "";
    alert("Preencha todos os campos por favor!!");
    telefone.className = "erro";
  } else {
    resultado.innerHTML = ` O nome digitado foi: ${valorNome}<br><br>
    A idade digitada foi: ${valorIdade}<br><br>
    O endereço digitado foi: ${valorEndereco}<br><br>
    O bairro digitado foi: ${valorBairro}<br><br>
    O telefone digitado foi: ${valorTelefone}<br><br>
    `;
  }
}

/*  text == "senac"
    ? (resultado.innerHTML = `Você está no Senac`)
    : (resultado.innerHTML = `Você não está no Senac`);
  */
/* 
  if(text == "senac"){
    resultado.innerHTML = `Você está no Senac`;
  }else{
    resultado.innerHTML = `Você não está no Senac`;
  }
  */

/* var numero = document.getElementById("numero").value;
  var resultado = document.getElementById("resposta");
  
  if(numero > 15){
  resultado.innerHTML = `O número é maior que 15`;
  }else if(numero == 15){
  resultado.innerHTML = `O número é igual a 15`;
  }else{
  resultado.innerHTML = `O número é menor que 15`;
  } */
