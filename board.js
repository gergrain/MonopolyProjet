$(document).ready(genererBoard);
function genererBoard(){
    var table = $('<table></table>');
    table.attr('width', '400px');
    table.attr('height', "400px");
    table.attr('border', '1');
    for (var ligne = 0; ligne < 11; ligne++){
        var tr = $('<tr></tr>');
        table.append(tr);
        if(ligne == 0 || ligne == 10){
            for (var colonne=0; colonne < 11; colonne++){
                var td = $('<td></td>');
                td.attr('id', ligne+","+colonne);
                td.text(" ");
                tr.append(td);
            }
        }else{
            for (var colonne=0; colonne < 3; colonne++){
                if(colonne == 1){
                    var td = $('<td></td>');
                    td.attr('id', ligne+","+colonne);
                    td.attr('colspan', '9');
                    td.text(" ");
                    tr.append(td);
                }else{
                    var td = $('<td></td>');
                    td.attr('id', ligne+","+colonne);
                    td.text(" ");
                    tr.append(td);
                }                                
            }
        }
    }
    $('#tableau').append(table);
}