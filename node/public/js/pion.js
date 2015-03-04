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

function deplacement(jeton, sommeDes){ //jeton sous la forme de JetonXxxx Xxxx represent la couleur du jeton
<<<<<<< HEAD

        var positionActuelle = $('#'+jeton).parent().attr('id');
        positionActuelle = parseInt(positionActuelle);

        var positionFinal = positionActuelle+sommeDes;
        while(positionActuelle <= positionFinal){
            var ouSeDeplacer = '#'+(positionActuelle);
            console.log("ou se déplacer : "+ouSeDeplacer+"| position actuelle : "+positionActuelle+"| position final :"+positionFinal);
            var jetonPositionDepart = $('#'+jeton);
            $('#'+jeton).clone().appendTo(ouSeDeplacer);
            jetonPositionDepart.remove();
            positionActuelle++;
        }
      
    
}
=======
    
    
    /*var positionActuelle = $('#'+jeton).parent().attr('id');
    positionActuelle = parseInt(positionActuelle);
    
    var positionFinal = positionActuelle+sommeDes;
    console.log(positionActuelle+" pA som "+sommeDes);
    console.log(positionFinal+" pF");
    
    while(positionActuelle <= positionFinal){
       setTimeout( function(){var jetonPositionDepart = $('#'+jeton);
        $('#'+jeton).remove();
        jetonPositionDepart.appendTo($('#'+positionActuelle));
  	
        positionActuelle++;},500);*/
    }
}
>>>>>>> origin/master
