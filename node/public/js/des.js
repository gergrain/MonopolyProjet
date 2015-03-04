     
function getNumber() {
        var minNumber = 1; // le minimum
        var maxNumber = 5; // le maximum
        var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
        return randomnumber;
    }  

window.onload=function(){
    $("body").append("<div id='de1' onclick=\"lancer()\" style='position:absolute; visibility:visible; left:350px; top:100px; z-index:999;'><img class='img_zoom_image' src='/images/de_1.png'/></div>");
        $("body").append("<div id='de2' onclick=\"lancer()\" style='position:absolute; visibility:visible; left:300px; top:100px; z-index:999;'><img class='img_zoom_image' src='/images/de_1.png'/></div>");

}

sommeDesDes;

var sommeDesDes;
function lancer(){
        de=Math.ceil(6*Math.random())
        dede=getNumber();
        $("#de1").remove();
        $("#de2").remove();
        $("body").append("<div id='de1' onclick=\"lancer()\" style='position:absolute; visibility:visible; left:350px; top:100px; z-index:999;'><img class='img_zoom_image' src='/images/de_"+de+".png'/></div>");
        $("body").append("<div id='de2' onclick=\"lancer()\" style='position:absolute; visibility:visible; left:300px; top:100px; z-index:999;'><img class='img_zoom_image' src='/images/de_"+getNumber()+".png'/></div>");
    console.log(de+" + "+dede+" = "+(de+dede));
    sommeDesDes = de+dede;

 }


