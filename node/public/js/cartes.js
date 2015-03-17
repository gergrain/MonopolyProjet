
	var cartesChance = [
        {id:"1",cout:0,categorie:"move",texte:"Allez au départ",position:"0"},
        {id:"2",cout:0,categorie:"move",texte:"Allez en prison",position:"30"},
        {id:"3",cout:0,categorie:"move",texte:"Allez Bld de la Villette",position:"11"},
        {id:"4",cout:200,categorie:"-",texte:"Amende pour ivresse -200€"},
        {id:"5",cout:150,categorie:"+",texte:"Vous avez gagné aux mot-croisés, recevez 150€"},
        {id:"6",cout:0, categorie:"move",texte:"Allez Rue Henri Martin",position:"21"},
        {id:"7",cout:0,categorie:"move",texte:"Allez Gare de Lyon",position:"15"},
        {id:"8",cout:150,categorie:"-",texte:"Amende pour excès de vitesse -150€"},
        {id:"9",cout:150,categorie:"-",texte:"Payez les frais de scolarité -150€"},
        {id:"10",cout:0,categorie:"move",texte:"Reculez de 3 cases",position:"-3"},
        {id:"11",cout:0,categorie:"-",texte:"Réparations dans votre maison(-25€/Maison -100€/Hotel)"},
        {id:"12",cout:350,categorie:"+",texte:"Votre prêt vous rapporte 350€"},
        {id:"13",cout:0,categorie:"bonus",texte:"Libéré de prison"},
        {id:"14",cout:0,categorie:"move",texte:"RDV Rue de la Paix",position:"39"},
        {id:"15",cout:0,categorie:"-",texte:"Voirie 40€/maison 115€/hotel "},
        {id:"16",cout:500,categorie:"+",texte:"La banque vous verse 500€"}
                       ];
					

	var cartesCommunautee = [
        {id:"1",cout:100,categorie:"+",texte:"Vous gagnez 100€ en jouant au casino"},
        {id:"2",cout:500,categorie:"-",texte:"Votre pauvre oncle Joey est encore en prison. Payer pour lui une caution de 500€"},
        {id:"3",cout:100,categorie:"+",texte:"Votre groupe de rock est arrivé premier lors du concours 'Battle of the Bands' Recevez 100€"},
        {id:"4",cout:400,categorie:"+",texte:"Vous célébrez vos fiançailles : chaque joueur doit voud donner 100€"},
        {id:"5",cout:200,categorie:"+",texte:"Erreur de la banque de Hill Valley en votre faveur. Recevez 200€"},
        {id:"6",cout:200,categorie:"+",texte:"Recevez 200€ pour votre remarquable performance de 'Féérie Dansante des Sirènes"},
        {id:"7",cout:100,categorie:"+",texte:"Recevez 100€ pour la sortie de votre 1er disque "},
        {id:"8",cout:500,categorie:"+",texte:"Recevez 500€ de récompense pour l'arrestation de Buford Molosse Tannen"},
        {id:"9",cout:0,categorie:"move",texte:"Placez vous sur la case 'Départ'",position:"0"},
        {id:"10",cout:100,categorie:"-",texte:"Vous faites convertir votre véhicule en aéroglisseur. Payer 100€"},
        {id:"11",cout:250,categorie:"+",texte:"Vous actions TEXACO vous rapportent la somme de 250€"},
        {id:"12",cout:0,categorie:"move",texte:"Retourner à la gare de Lyon",position:"15"},
        {id:"13",cout:500,categorie:"-",texte:"Payez votre cure de rajeunissement à la clinique 500€"},
        {id:"14",cout:0,categorie:"bonus",texte:"Vous êtes libéeé de prison."},
        {id:"15",cout:0,categorie:"move",texte:"Allez en prison.",position:"30"},
        {id:"16",cout:100,categorie:"-",texte:"Biff vous fait chanter : Payez 100€"}
                            ];
					

function allerAudepart(){
    ouSeDeplacer = '#0';
    jetonPositionDepart = $('#'+listeJoueur[i].id);
    $('#'+listeJoueur[i].id).clone().appendTo(ouSeDeplacer);
    jetonPositionDepart.remove();
}

function gareDeLyon(){
    ouSeDeplacer = '#15';
    jetonPositionDepart = $('#'+listeJoueur[i].id);
    $('#'+listeJoueur[i].id).clone().appendTo(ouSeDeplacer);
    jetonPositionDepart.remove();
}

function BlvVillette(){
    ouSeDeplacer = '#11';
    jetonPositionDepart = $('#'+listeJoueur[i].id);
    $('#'+listeJoueur[i].id).clone().appendTo(ouSeDeplacer);
    jetonPositionDepart.remove();
}

function HenriMartin(){
    ouSeDeplacer = '#21';
    jetonPositionDepart = $('#'+listeJoueur[i].id);
    $('#'+listeJoueur[i].id).clone().appendTo(ouSeDeplacer);
    jetonPositionDepart.remove();
}

function moinsTroisCases(){
    var pos=$('#'+listeJoueur[i].id).parent().attr('id');
    var monParse = parseInt(pos)-3;
    ouSeDeplacer = '#'+monParse;
    jetonPositionDepart = $('#'+listeJoueur[i].id);
    $('#'+listeJoueur[i].id).clone().appendTo(ouSeDeplacer);
    jetonPositionDepart.remove();
}

function rueDelaPaix(){
    ouSeDeplacer = '#39';
    jetonPositionDepart = $('#'+listeJoueur[i].id);
    $('#'+listeJoueur[i].id).clone().appendTo(ouSeDeplacer);
    jetonPositionDepart.remove();
}

