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
/*
function deplacement(jeton, sommeDes){ //jeton sous la forme de JetonXxxx Xxxx represent la couleur du jeton
        
       
        var positionActuelle = $('#'+jeton).parent().attr('id');
        positionActuelle = parseInt(positionActuelle);
        var positionFinal = positionActuelle+sommeDes;
        while(positionActuelle <= positionFinal){
            if(positionActuelle==40){
                positionActuelle=0;
                positionFinal = positionFinal - 40;
            }
            var ouSeDeplacer = '#'+(positionActuelle);
            var jetonPositionDepart = $('#'+jeton);
            $('#'+jeton).clone().appendTo(ouSeDeplacer);
            jetonPositionDepart.remove();
            positionActuelle++;
        }    
}*/
var positionActuelle;
var positionFinal;
var ouSeDeplacer;
var jetonPositionDepart;
var boll = true;

function deplacement(){ //jeton sous la forme de JetonXxxx Xxxx represent la couleur du jeton
    
       
    
        positionActuelle = $('#JetonBleu').parent().attr('id');
        positionActuelle = parseInt(positionActuelle)+1;
console.log(positionActuelle);
    if(boll==true)
        positionFinal = positionActuelle-1+sommeDesDes;
console.log(positionFinal);
console.log(ouSeDeplacer);
       if(positionActuelle==40){
            positionActuelle=0;
            positionFinal = positionFinal - 40;
        }
    
        ouSeDeplacer = '#'+(positionActuelle);
        jetonPositionDepart = $('#JetonBleu');
        $('#JetonBleu').clone().appendTo(ouSeDeplacer);
        jetonPositionDepart.remove();
        positionActuelle++;
    boll=false;
        
        if(positionActuelle <= positionFinal){
            setTimeout("deplacement()",1000);
        }else{
            boll=true;
        }
        

        
      
    
}

    

