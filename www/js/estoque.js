var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtos"]', function (e) {
    firebase.database().ref('orcamentos').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div>';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-25">'+ item.val().Email +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Mensagem +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-25">'+ item.val().Telefone +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
    
        })
    })
    
});
  
