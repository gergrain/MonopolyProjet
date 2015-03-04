#OBJET DE#
function de(){

	ImgValeurs = [{id:1,img:"images/de_1.png"},
					{id:2,img:"images/de_2.png"},
					{id:3,img:"images/de_3.png"},
					{id:4,img:"images/de_4.png"},
					{id:4,img:"images/de_5.png"},
					{id:4,img:"images/de_6.png"}]
	this.valeur = 1;
	this.img = "image/de_1.png";

	this.lancer = function(){
		this.valeur = Math.floor(Math.random()*5+1);
		this.img = ImgValeurs[this.valeur-1].img;
	}

}