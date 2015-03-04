function Partie() {
	this.encours = false;
	this.tour=0;
	this.joueurs= new Array (4);

	this.lancerPartie = function(){
		if(this.joueurs.length = 4){
			this.encours = true;
		}
		
	}

	this.ajouterJoueur=function(newPlayer){
		this.joueurs[this.joueurs.length]=newPlayer;
	}

	this.Jouer = function(){
		fin =false;
		while(!fin){
			document.onkeydown = function (_event_){
				var winObj = checkEventObj(_event)
				if(winObj.keyCode == 70){
					fin = true;
				}
			}
		}


	}

}