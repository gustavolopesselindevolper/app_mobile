$$(document).on('page:init', '.page[data-name="listar_produtos"]', function (e) {
    firebase.database().ref('orcamentos').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<tr>';
                listHtml += '<th scope="row" class="id-column">'+item.key+'</th>';
                listHtml += '<td>'+ item.val().Email +'</td>';
                listHtml += '<td>'+ item.val().Mensagem +'</td>';
                listHtml += '<td>'+ item.val().Nome +'</td>';
                listHtml += '<td>'+ item.val().Idade +'</td>';
                listHtml += '</tr>';
                //e.append(listHtml).innerHTML;
                $("#usersList").append(listHtml);
    
    
        })
    })
    
    });
  
