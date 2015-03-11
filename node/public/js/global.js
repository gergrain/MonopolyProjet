
var listeJoueur = [{joueur:"j1",id:"JetonBleu",argent:1500,peutAcheter:false },
                   {joueur:"j2",id:"JetonJaune",argent:1500,peutAcheter:false },
                   {joueur:"j3",id:"JetonVert",argent:1500,peutAcheter:false },
                   {joueur:"j4",id:"JetonRouge",argent:1500,peutAcheter:false }
					
];
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

function partie(){
    mettreAjourMonnaie();
    switch(joueurActuel){
        case "JetonBleu":
            i++;
            joueurActuel = listeJoueur[i].id;
        break;
        case "JetonJaune":
            i++;
            joueurActuel = listeJoueur[i].id;
        break;
        case "JetonVert":
            i++;
            joueurActuel = listeJoueur[i].id;
        break;
        case "JetonRouge":
            i=0;
            joueurActuel = listeJoueur[i].id;
        break;
        default:
        break;
    }
        
        if(listeJoueur[i].peutAcheter){
        
    }
   
}