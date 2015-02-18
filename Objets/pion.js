function Pion(color, joueur,img) {
	this.position = 0;
	this.joueur = joueur;
	this.pion = img;

	this.deplacer = function (des){
		while(des != 0){
			if (this.position =40){
				this.position = 0
			}else{
				this.position ++;
			}
			des--;
		}
	}

	this.goTo = function (position){
		this.position = position
	}

}