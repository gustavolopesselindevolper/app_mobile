var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtos"]', function (e) {
    firebase.database().ref('orcamentos').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<tr>';
                listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<td class="label-cell">'+item.val().Email+'</td>';
                listHtml += '<td class="label-cell">'+item.val().Mensagem+'</td>';
                listHtml += '<td class="label-cell">'+item.val().Nome+'</td>';
                listHtml += '<td class="label-cell">'+item.val().Telefone+'</td>';
                listHtml += '</tr>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
    
        })
    })
    
});
  
