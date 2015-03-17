
var listeJoueur = [{joueur:"j1",id:"JetonBleu",argent:1500,peutAcheter:false, estEnPrison:false, free:false},
                   {joueur:"j2",id:"JetonJaune",argent:1500,peutAcheter:false, estEnPrison:false, free:false },
                   {joueur:"j3",id:"JetonVert",argent:1500,peutAcheter:false, estEnPrison:false, free:false },
                   {joueur:"j4",id:"JetonRouge",argent:1500,peutAcheter:false, estEnPrison:false, free:false }
					
];

var listeCase = [ {numero:'0', nom:'Départ', prix:200, type:'aucun', achetable:false, estAchete:false,aAchete:""},
                {numero:'1', nom:'Boulevard de Belleville', prix:60, type:'marron', achetable:true, estAchete:false,aAchete:""},
                 {numero:'2', nom:'Caisse de Communauté', prix:0, type:'communauté', achetable:false, estAchete:false,aAchete:""},
                 {numero:'3', nom:'Rue Lecourbe', prix:60, type:'marron', achetable:true, estAchete:false,aAchete:""},
                 {numero:'4', nom:'Impôts sur le revenu', prix:200, type:'malus', achetable:false, estAchete:false,aAchete:""},
                 {numero:'5', nom:'Gare Montparnasse', prix:200, type:'gare', achetable:true, estAchete:false,aAchete:""},
                 {numero:'6', nom:'Rue de Vaugirard', prix:100, type:'bleu ciel', achetable:true, estAchete:false,aAchete:""},
                 {numero:'7', nom:'Chance',prix:0, type:'chance', achetable:false, estAchete:false,aAchete:""},
                 {numero:'8', nom:'Rue de Courcelles', prix:100, type:'bleu ciel', achetable:true, estAchete:false,aAchete:""},
                 {numero:'9', nom:'Avenue de la République', prix:120, type:'bleu ciel', achetable:true, estAchete:false,aAchete:""},
                 {numero:'10', nom:'Prison',prix:0, type:'prison', achetable:false, estAchete:false,aAchete:""},
                 {numero:'11', nom:'Boulevard de la Vilette', prix:140, type:'rose', achetable:true, estAchete:false,aAchete:""},
                 {numero:'12', nom:'Compagnie de distribution d electricité', prix:150, type:'compagnie', achetable:true, estAchete:false,aAchete:""},
                 {numero:'13', nom:'Avenue de Neuilly', prix:140, type:'rose', achetable:true, estAchete:false,aAchete:""},
                 {numero:'14', nom:'Rue de Paradis', prix:160, type:'rose', achetable:true, estAchete:false,aAchete:""},
                 {numero:'15', nom:'Gare de Lyon', prix:200, type:'gare', achetable:true, estAchete:false,aAchete:""},
                 {numero:'16', nom:'Avenue Mozart', prix:180, type:'orange', achetable:true, estAchete:false,aAchete:""},
                 {numero:'17', nom:'Caisse de Communauté',prix:0, type:'communauté', achetable:false, estAchete:false,aAchete:""},
                 {numero:'18', nom:'Boulevard St-Michel', prix:180, type:'orange', achetable:true, estAchete:false,aAchete:""},
                 {numero:'19', nom:'Place Pigalle', prix:200, type:'orange', achetable:true, estAchete:false,aAchete:""},
                 {numero:'20', nom:'Parc Gratuit', prix:0, type:'parc', achetable:false, estAchete:false,aAchete:""},
                 {numero:'21', nom:'Avenue Henri-Martin', prix:240, type:'rouge', achetable:true, estAchete:false,aAchete:""},
                 {numero:'22', nom:'Chance',prix:0, type:'chance', achetable:false, estAchete:false,aAchete:""},
                 {numero:'23', nom:'Boulevard Malesherbes', prix:220, type:'rouge', achetable:true, estAchete:false,aAchete:""},
                 {numero:'24', nom:'Avenue Matignon', prix:220, type:'rouge', achetable:true, estAchete:false,aAchete:""},
                 {numero:'25', nom:'Gare du Nord', prix:200, type:'gare', achetable:true, estAchete:false,aAchete:""},
                 {numero:'26', nom:'Faubourg Saint-Honoré', prix:260, type:'jaune', achetable:true, estAchete:false,aAchete:""},
                 {numero:'27', nom:'Place de la Bourse', prix:260, type:'jaune', achetable:true, estAchete:false,aAchete:""},
                 {numero:'28', nom:'Compagnie de distribution des eaux', prix:150, type:'compagnie', achetable:true, estAchete:false,aAchete:""},
                 {numero:'29', nom:'Rue la Fayette', prix:280, type:'jaune', achetable:true, estAchete:false,aAchete:""},
                 {numero:'30', nom:'Allez en prison',prix:0, type:'prison', achetable:false, estAchete:false,aAchete:""},
                 {numero:'31', nom:'Avenue de Breteuil', prix:300, type:'vert', achetable:true, estAchete:false,aAchete:""},
                 {numero:'32', nom:'Avenue Foch', prix:300, type:'vert', achetable:true, estAchete:false,aAchete:""},
                 {numero:'33', nom:'Caisse de communauté',prix:0, type:'communauté', achetable:false, estAchete:false,aAchete:""},
                 {numero:'34', nom:'Boulevard des capucines', prix:320, type:'vert', achetable:true, estAchete:false,aAchete:""},
                 {numero:'35', nom:'Gare Saint-Lazare', prix:200, type:'gare', achetable:true, estAchete:false,aAchete:""},
                 {numero:'36', nom:'Chance',prix:0, type:'chance', achetable:false, estAchete:false,aAchete:""},
                 {numero:'37', nom:'Avenue des Champs-Elysées', prix:350, type:'bleu marine', achetable:true, estAchete:false,aAchete:""},
                 {numero:'38', nom:'Taxe de Luxe', prix:100, type:'malus', achetable:false, estAchete:false,aAchete:""},
                 {numero:'39', nom:'Rue de la Paix', prix:400, type:'bleu marine', achetable:true, estAchete:false,aAchete:""}
                ]

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

function mettreTourJoueurEnGras(){
    $('#tour'+listeJoueur[i].joueur).css({fontWeight: "bold"});
    
}

function mettreAjourMonnaie(){
    var i;
    for(i=0;i<listeJoueur.length;i++){
        $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
    }
}

function allerEnPrison(){
    if($('#'+listeJoueur[i].id).parent().attr('id')==30){ //Cas ou l'on passe sur GoToJail
        listeJoueur[i].estEnPrison=true;
        ouSeDeplacer = '#10';
        jetonPositionDepart = $('#'+listeJoueur[i].id);
        $('#'+listeJoueur[i].id).clone().appendTo(ouSeDeplacer);
        jetonPositionDepart.remove();
    }
}

function caisseDeCommunaute(){
    //Caisse de communauté
    if(listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].type=="communauté"){
       var nbalea=Math.ceil(15*Math.random());
       //console.log(nbalea);
       var communaute=cartesCommunautee[nbalea].texte;
        console.log("Caisse de communauté : "+communaute);
       $('#caissedecommu'+listeJoueur[i].joueur).text("Caisse de communauté : "+communaute);
       switch(cartesCommunautee[nbalea].categorie){
               case "+":
                    listeJoueur[i].argent=listeJoueur[i].argent+cartesCommunautee[nbalea].cout;                                                                       $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
               break;
               case "-":
                    listeJoueur[i].argent=listeJoueur[i].argent-cartesCommunautee[nbalea].cout;
                    $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
               break;
               case "move":
                    if(cartesCommunautee[nbalea].position==="0"){
                        allezAudepart();
                    }
                    if(cartesCommunautee[nbalea].position==="15"){
                        gareDeLyon();
                    }
                    if(cartesCommunautee[nbalea].position==="30"){
                        allerEnPrison();
                    }
               break;
               case "bonus":
                    listeJoueur[i].free=true;
               break;
               default:
               console.log("Mais qui êtes vous ??");
               break;
                
        }
    }
}

function chance(){
    //Chance
    if(listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].type=="chance"){
        var nbalea=Math.ceil(15*Math.random());
        //console.log(nbalea);
        var chance=cartesChance[nbalea].texte;
        //console.log("Chance : "+chance);
        $('#chance'+listeJoueur[i].joueur).text(" Chance : "+chance);
        switch(cartesChance[nbalea].categorie){
               case "+":
                    listeJoueur[i].argent=listeJoueur[i].argent+cartesChance[nbalea].cout;
                    $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
               break;
               case "-":
                    listeJoueur[i].argent=listeJoueur[i].argent-cartesChance[nbalea].cout;
                    $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
               break;
               case "move":
                    switch(cartesChance[nbalea].position){
                            case "0":
                                allerAudepart();
                            break;
                            case "30":
                                allerEnPrison();
                            break;
                            case "11":
                                BlvVillette();
                            break;
                            case "21":
                                HenriMartin();
                            break;
                            case "15":
                                gareDeLyon();
                            break;
                            case "-3":
                                moinsTroisCases();
                            break;
                            case "39":
                                rueDelaPaix();
                            break;
                            default:
                                console.log("Mais que faite vous là, c'est réservé au carte chance !")
                    }
                    
               break;
               case "bonus":
                    listeJoueur[i].free=true;
               break;
               default:
               console.log("Mais qui êtes vous dans la chance ??");
               break;
                
        }
    }
            
}

function voulezVousAcheter(){
    if(listeJoueur[i].peutAcheter && listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].achetable && listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].estAchete==false){
        console.log("Voulez vous acheter "+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].nom);
        //$('#achat'+listeJoueur[i].joueur).html("Voulez vous acheter "+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].nom+" <input onclick=\"acheter()\" type=\"button\" value=\"Oui\"/> <input onclick=\"pasAcheter()\" type=\"button\" value=\"Non\"/>");
        var prompt = confirm("Voulez vous acheter "+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].nom);
        if(prompt==true){
            acheter();
        }else{
            pasAcheter();
        }

    }
    else{
        $('#achat'+listeJoueur[i].joueur).text("");
        paye();
    }
}

function acheter(){
    $('#acheter'+listeJoueur[i].joueur).after(" | "+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].nom+" | ");
    listeJoueur[i].argent=listeJoueur[i].argent-listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].prix;
    $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
    listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].estAchete=true;
    listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].aAchete=listeJoueur[i].id;
    $('#achat'+listeJoueur[i].joueur).text("");
}

function pasAcheter(){
    $('#achat'+listeJoueur[i].joueur).text("");
}

function taxe(){
    if(listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].type==="malus"){
        switch(listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].numero){
                case "4" : 
                    listeJoueur[i].argent=listeJoueur[i].argent-listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].prix;
                    $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
                    //console.log("impot");
                    listeCase[20].prix= listeCase[20].prix+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].prix;
                    //console.log("argent dans le parc : "+listeCase[20].prix);
                    
                break;
                case "38" : 
                    listeJoueur[i].argent=listeJoueur[i].argent+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].prix;
                    $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
                   // console.log("taxe");
                    listeCase[20].prix= listeCase[20].prix+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].prix;
                   // console.log("argent dans le parc : "+listeCase[20].prix);
                break;
        }
    }
}

function parcGratuit(){
    if(listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].type==="parc"){
        //console.log('argent du joeur avnat : '+listeJoueur[i].argent);
        listeJoueur[i].argent=listeJoueur[i].argent+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].prix;
        $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
        //console.log('argent du joeur après : '+listeJoueur[i].argent);
        //console.log("argent dans le parc avant  "+listeCase[20].prix);
        listeCase[20].prix=0;
        //console.log("argent dans le parc après "+listeCase[20].prix);
        
    }
}

function paye(){
    if(listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].estAchete==true){
        console.log("10% du prix : "+10/100*listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].prix);
        listeJoueur[i].argent=listeJoueur[i].argent-(10/100*listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].prix);
        $('#monnaie'+listeJoueur[i].joueur).text(listeJoueur[i].argent);
        //$('#monnaie'+listeCase[$('#'+listeJoueur[i].id).parent().attr('id')].aAchete)
    }
}
/*function partie(){
    mettreAjourMonnaie();
    switch(listeJoueur[i].id){
        case "JetonBleu":
            mettreTourJoueurEnGras();
            
           // i++;
        break;
        case "JetonJaune":
            mettreTourJoueurEnGras();
            allerEnPrison();
            voulezVousAcheter();
            caisseDeCommunaute();
            chance();
           // i++;
        break;
        case "JetonVert":
            mettreTourJoueurEnGras();
            allerEnPrison();
            voulezVousAcheter();
            caisseDeCommunaute();
            chance();
           // i++;
        break;
        case "JetonRouge":
            mettreTourJoueurEnGras();
            allerEnPrison();
            voulezVousAcheter();
            caisseDeCommunaute();
            chance();
           // i=0;
        break;
        default:
            console.log("Vous ne devriez pas être la !")
        break;
    }
        
        
   
}*/