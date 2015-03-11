
var listeJoueur = [{joueur:"j1",id:"JetonBleu",argent:1500,peutAcheter:false },
                   {joueur:"j2",id:"JetonJaune",argent:1500,peutAcheter:false },
                   {joueur:"j3",id:"JetonVert",argent:1500,peutAcheter:false },
                   {joueur:"j4",id:"JetonRouge",argent:1500,peutAcheter:false }
					
];

var listeCase = [{numero:'1', nom:'Boulevard de Belleville', prix:60, type:'marron'},
                 {numero:'2', nom:'Caisse de Communauté', type:'communauté'},
                 {numero:'3', nom:'Rue Lecourbe', prix:60, type:'marron'},
                 {numero:'4', nom:'Impôts sur le revenu', prix:-200, type:'malus'},
                 {numero:'5', nom:'Gare Montparnasse', prix:200, type:'gare'},
                 {numero:'6', nom:'Rue de Vaugirard', prix:100, type:'bleu ciel'},
                 {numero:'7', nom:'Chance', type:'chance'},
                 {numero:'8', nom:'Rue de Courcelles', prix:100, type:'bleu ciel'},
                 {numero:'9', nom:'Avenue de la République', prix:120, type:'bleu ciel'},
                 {numero:'10', nom:'Prison', type:'prison'},
                 {numero:'11', nom:'Boulevard de la Vilette', prix:140, type:'rose'},
                 {numero:'12', nom:'Compagnie de distribution d electricité', prix:150, type:'compagnie'},
                 {numero:'13', nom:'Avenue de Neuilly', prix:140, type:'rose'},
                 {numero:'14', nom:'Rue de Paradis', prix:160, type:'rose'},
                 {numero:'15', nom:'Gare de Lyon', prix:200, type:'gare'},
                 {numero:'16', nom:'Avenue Mozart', prix:180, type:'orange'},
                 {numero:'17', nom:'Caisse de Communauté', type:'communauté'},
                 {numero:'18', nom:'Boulevard St-Michel', prix:180, type:'orange'},
                 {numero:'19', nom:'Place Pigalle', prix:200, type:'orange'},
                 {numero:'20', nom:'Parc Gratuit', prix:0, type:'parc'},
                 {numero:'21', nom:'Avenue Henri-Martin', prix:240, type:'rouge'},
                 {numero:'22', nom:'Chance', type:'chance'},
                 {numero:'23', nom:'Boulevard Malesherbes', prix:220, type:'rouge'},
                 {numero:'24', nom:'Avenue Matignon', prix:220, type:'rouge'},
                 {numero:'25', nom:'Gare du Nord', prix:200, type:'gare'},
                 {numero:'26', nom:'Faubourg Saint-Honoré', prix:260, type:'jaune'},
                 {numero:'27', nom:'Place de la Bourse', prix:260, type:'jaune'},
                 {numero:'28', nom:'Compagnie de distribution des eaux', prix:150, type:'compagnie'},
                 {numero:'29', nom:'Rue la Fayette', prix:280, type:'jaune'},
                 {numero:'30', nom:'Allez en prison', type:'prison'},
                 {numero:'31', nom:'Avenue de Breteuil', prix:300, type:'vert'},
                 {numero:'32', nom:'Avenue Foch', prix:300, type:'vert'},
                 {numero:'33', nom:'Caisse de communauté', type:'communauté'},
                 {numero:'34', nom:'Boulevard des capucines', prix:320, type:'vert'},
                 {numero:'35', nom:'Gare Saint-Lazare', prix:200, type:'gare'},
                 {numero:'36', nom:'Chance', type:'chance'},
                 {numero:'37', nom:'Avenue des Champs-Elysées', prix:350, type:'bleu marine'},
                 {numero:'38', nom:'Taxe de Luxe', prix:-100, type:'malus'},
                 {numero:'39', nom:'Rue de la Paix', prix:400, type:'bleu marine'}
                ]
var joueurActuel = listeJoueur[0].id; 
var i =0;
$(document).ready(function(){
    $("img").each(function(i){
        if($(this).attr('id')==='img_centre'){
            
        }else{
            var name = 'img_zoom_image';
            $("body").append("<div id='"+name+i+"' style='position:absolute; visibility:hidden; left:-286px; top:0px; z-index:1000;'><figure><img class='img_zoom_image' src='"+$(this).attr('src')+"'/><figcaption>"+$(this).attr('title')+"</figcaption></figure></div>");

            var my_tooltip = $("#"+name+i);

            $(this).mouseover(function(){
                    my_tooltip.css({opacity:1, display:"none", visibility:"visible"}).fadeIn(0);
            }).mousemove(function(kmouse){
                    my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
            }).mouseout(function(){
                    my_tooltip.fadeOut(0);
            });
        }
	}); 
    
});


$(document).ready(function debutDePartie(){
    $('#j'+1).css({color:"blue"});
    $('#j'+2).css({color:"magenta"});
    $('#j'+3).css({color:"green"});
    $('#j'+4).css({color:"red"});    
});

function mettreAjourMonnaie(){
    var i;
    for(i=0;i<listeJoueur.length;i++){
        $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
    }
}

function allerEnPrison(){
    if($('#'+joueurActuel).parent().attr('id')==30){ //Cas ou l'on passe sur GoToJail
        ouSeDeplacer = '#10';
        jetonPositionDepart = $('#'+joueurActuel);
        $('#'+joueurActuel).clone().appendTo(ouSeDeplacer);
        jetonPositionDepart.remove();
    }
}

function partie(){
    mettreAjourMonnaie();
    switch(joueurActuel){
        case "JetonBleu":
            allerEnPrison();
            if(listeJoueur[i].peutAcheter){
                
            }
            i++;
            joueurActuel = listeJoueur[i].id;
        break;
        case "JetonJaune":
            allerEnPrison();
            if(listeJoueur[i].peutAcheter){
        
            }
            i++;
            joueurActuel = listeJoueur[i].id;
        break;
        case "JetonVert":
            allerEnPrison();
            if(listeJoueur[i].peutAcheter){
        
            }
            i++;
            joueurActuel = listeJoueur[i].id;
        break;
        case "JetonRouge":
            allerEnPrison();
            if(listeJoueur[i].peutAcheter){
        
            }
            i=0;
            joueurActuel = listeJoueur[i].id;
        break;
        default:
        break;
    }
        
        
   
}