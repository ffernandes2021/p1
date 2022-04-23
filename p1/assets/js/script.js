function getPokemon(valor) {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + valor,
        method: "get",
        dataType: "json"
    })
    .done(function (data) {
        console.log(data);
    })
    .fail(function (jqXHR) {
        console.log("Erro HTTP: " + jqXHR.status);
    });
}