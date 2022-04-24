function getPokemon(valor) {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + valor,
        method: "get",
        dataType: "json"
    })
    .done(function (data) {
        // Cria um atributo
        let content = "";
        // Recupera e armazena o elemento localContent
        let localContent = $("#localContent");
        // Se for um pokémon de tipo MÚLTIPLO.
        if(data.types.length > 1) {
            // content recebe o bloco de tags TIPO escapadas e agrupadas.
            // O escape neste caso é feito adicionando uma barra inversa antes de cada aspa dupla.
            // O TIPO é substituído pelos resultados da API, isto é, data.types[i].type.name.
            content = "<div class=\"col-6 "+data.types[0].type.name+"\"><div>"+data.types[0].type.name+"</div></div><div class=\"col-6 "+data.types[1].type.name+"\"><div>"+data.types[1].type.name+"</div></div>";            
        } else {
            // Se for do tipo ÚNICO, obtenha-o da primeira posição, isto é, 0.
            content = "<div class=\"col-12 "+data.types[0].type.name+"\"><div>"+data.types[i].type.name+"</div></div>";
        }
        // Adiciona à content o restante do bloco de tags.
        // IMAGEM, NÚMERO e NOME são substituídos pelos correspondentes resultados da API.
        content = content.concat("<div class=\"center\"><img alt=\"\" class=\"img-responsive\" src="+data.sprites.other.dream_world.front_default+"><div>"+data.id+" - "+data.name+"</div></div>");
        // Imprime na localContent o content
        localContent.html(content);
    })
    .fail(function (jqXHR) {
        console.log("Erro HTTP: " + jqXHR.status);
    });
}