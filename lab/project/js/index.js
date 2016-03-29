/**
 * Created by suti on 16/3/15.
 */
$(document).ready(function(){
    var id = "#news";
    $(id).find(".slide-content").animate({width:0},0);
    $(id).find(".slide-image").animate({width:0},0);
    $(id).find(".slide-news").animate({width:0},0);
    $(id).animate({width:837},500);
    $(id).find(".slide-content").animate({width:800},800);
    $(id).find(".slide-image").animate({width:460},800);
    $(id).find(".slide-news").animate({width:340},800);
    //$(id).find(".slide-right").show();
    $(".slide-content").click(function(){
        if(id!="#"+$(this).attr("id")){
            $(id).find(".slide-right").hide();
            $(id).animate({width:37},400);
            $(this).animate({width:837},400);
            $(this).find(".slide-right").show();
            $(this).find(".slide-image").animate({width:0},200);
            $(this).find(".slide-news").animate({width:0},200);
            $(this).find(".slide-content").animate({width:0},200);

            $(this).find(".slide-content").animate({width:800},600);
            $(this).find(".slide-image").animate({width:460},600);
            $(this).find(".slide-news").animate({width:340},600);

            id = "#"+$(this).attr("id");
        }
    });
});
