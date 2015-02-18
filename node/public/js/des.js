function de(){
	ImgValeurs = [{id:1,img:"../image/de_1.png"}]
	this.valeur = 1;
	this.lancer = function(){
		this.valeur = Math.floor(Math.random()*5+1);
	}

}