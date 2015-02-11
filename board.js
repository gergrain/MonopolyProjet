$(document).ready(genererBoard);
function genererBoard(){
    var table = $('<table></table>');
    table.attr('border', '1');
    for (var ligne = 0; ligne < 11; ligne++){
       var tr = $('<tr></tr>');
        table.append(tr);
        for (var colonne=0; colonne < 11; colonne++){
            var td = $('<td></td>');
            td.attr('id', ligne+","+colonne);
            td.text(" ");
            tr.append(td);
        }
    }
    for (var i=1; i < 11; i++){
        
    }
    $('#tableau').append(table);
}