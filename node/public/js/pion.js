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

var jeton = {joueur:"",id:"",argent:"",peutAcheter:false }; 
function joueur(joueur){
    jeton.id = joueur;
}




var positionActuelle;
var positionFinal;
var ouSeDeplacer;
var jetonPositionDepart;
var boll = true;

function deplacement(){ //jeton sous la forme de JetonXxxx Xxxx represent la couleur du jeton
        positionActuelle = $('#'+jeton.id).parent().attr('id');
        positionActuelle = parseInt(positionActuelle)+1;
        if(boll==true)
            positionFinal = positionActuelle-1+sommeDesDes;
            if(positionActuelle==40){
                positionActuelle=0;
                positionFinal = positionFinal - 40;
                jeton.peutAcheter=true;
                alert(jeton.peutAcheter);
            }
        ouSeDeplacer = '#'+(positionActuelle);
        jetonPositionDepart = $('#'+jeton.id);
        $('#'+jeton.id).clone().appendTo(ouSeDeplacer);
        jetonPositionDepart.remove();
        positionActuelle++;
        boll=false;
        
        if(positionActuelle <= positionFinal){
            setTimeout("deplacement()",1000);
        }else{
            boll=true;
        }

}



    

