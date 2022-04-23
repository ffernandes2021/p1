function getPokemon(valor){
    // Envia um HTTP Request, por meio de uma GET call (assíncrona)
    para um endpoint definido
    // Aguarda como dados vindos do response um JSON document
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/" + valor,
      method: "get",
      dataType: "json"
    })
    // Se o servidor retornar SUCCESS
    .done(function(data){
      // imprime os dados do response no console do browser
      console.log(data);
    })
    // Se o servidor retornar ERRO
    .fail(function(jqXHR){
      // imprime o HTTP error number
      console.log("Erro HTTP: " + jqXHR.status);
    });                     
  } 