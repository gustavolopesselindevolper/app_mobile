var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtosadm"]', function (e) {
    firebase.database().ref('estoque').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-20">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Fabricante +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Descricao +'</div>';
                listHtml += '<div class="col-20">'+ item.val().Preco +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});

function apagar(){

	var apagar = document.getElementById('excluir').value;

	apagadb(apagar);
}

function apagadb(apag){

	return firebase.database().ref().child('estoque').child(apag).remove();
}
  