
$(document).ready(function(){
    $("img").each(function(i){
        if($(this).attr('id')==='img_centre'){
            
        }else{
            var name = 'img_zoom_image';
            $("body").append("<div id='"+name+i+"' style='position:absolute; visibility:hidden; left:-286px; top:0px; z-index:1000;'><figure><img class='img_zoom_image' src='"+$(this).attr('src')+"'/><figcaption>"+$(this).attr('title')+"</figcaption></figure></div>");

            var my_tooltip = $("#"+name+i);

            $(this).mouseover(function(){
                    my_tooltip.css({opacity:1, display:"none", visibility:"visible"}).fadeIn(0);
            }).mousemove(function(kmouse){
                    my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
            }).mouseout(function(){
                    my_tooltip.fadeOut(0);
            });
        }
	}); 
    
});
