
async function ObterCep() {
  const cep = document.getElementById("cep");

  let search = cep.value.replace("-", "")

  if (search.length > 8) {
    toggledivAlert();
    return;
  }

  await fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => response.json())
    .then((data) => {
      toggledivSuccess(); //adição do sucees
  
      if (data.erro === true) {
        toggledivInfo();
        return; // para a execução para não preencher os dados
      }
      ExibirDados(data);
    })
    .catch((error) => {
      console.log("Deu erro " + error);
      toggleDiv();
      return;
    });
}

const options = {
  method: 'Get',
  mode: 'cors',
  Cache: 'default',
}

function ExibirDados(response) {
  document.getElementById('logradouro').innerHTML = "Logradouro: " + response.logradouro;
  document.getElementById('bairro').innerHTML = "Bairro: " + response.bairro;
  document.getElementById('localidade').innerHTML = "Localidade: " + response.localidade;
  document.getElementById('ibge').innerHTML = "Numero ibge: " + response.ibge;



}

function toggleDiv() {
  var show = document.getElementById("alert");
  show.style.display = "block";

}

function toggledivAlert() {
  var show = document.getElementById("alert2");
  show.style.display = "block";

}

function toggledivInfo() {
  var show = document.getElementById("alert3");
  show.style.display = "block";

}

function toggledivSuccess() {
  var show = document.getElementById("success");
  show.style.display = "block";

}