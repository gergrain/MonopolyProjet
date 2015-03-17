function Pion(color, joueur,img) {
	this.position = 0;
	this.joueur = joueur;
	this.pion = img;

	this.deplacer = function (des){
		while(des != 0){
			if (this.position =40){
				this.position = 0;
			}else{
				this.position ++;
			}
			des--;
		}
	}

	this.goTo = function (position){
		while(this.position != position){
			this.deplacer(1);
		}
	}

	this.goPrison = function(){
		this.position = 10;
	}

}




var positionActuelle;
var positionFinal;
var ouSeDeplacer;
var jetonPositionDepart;
var boll = true;

function deplacement(){ //jeton sous la forme de JetonXxxx Xxxx represent la couleur du jeton
        positionActuelle = $('#'+listeJoueur[i].id).parent().attr('id');
        positionActuelle = parseInt(positionActuelle)+1;
        if(boll==true)
            positionFinal = positionActuelle-1+sommeDesDes;
            if(positionActuelle==40){
                positionActuelle=0;
                positionFinal = positionFinal - 40;
                listeJoueur[i].peutAcheter=true;
                listeJoueur[i].argent= listeJoueur[i].argent + 200;
                console.log("le joueur "+listeJoueur[i].joueur+" a gagné 200!")
                mettreAjourMonnaie();
                
            }
        ouSeDeplacer = '#'+(positionActuelle);
        jetonPositionDepart = $('#'+listeJoueur[i].id);
        $('#'+listeJoueur[i].id).clone().appendTo(ouSeDeplacer);
        jetonPositionDepart.remove();
        positionActuelle++;
        boll=false;
        
        if(positionActuelle <= positionFinal){
            setTimeout("deplacement()",10);
        }else{
            boll=true;
        }

}



    

