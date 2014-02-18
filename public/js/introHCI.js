'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
    $(".alcohol-display").click(ingredientClick);
}

function ingredientClick(e) {
    e.preventDefault();
    // $(this).find(".x-button").css("display", "inline");
    var button = $(this).find(".x-button");
    console.log($(this).find(".x-button").css("display"));
    if ($(this).find(".x-button").css("display") === 'inline') {
        $(this).find(".x-button").css("display", "none");
    } else {
        $(this).find(".x-button").css("display", "inline");
    }
}
 
$(function(){           
    var step = 1;
    var current = 0;
    var maximum = $(".categories ul li").size();
    var visible = 2;
    var speed = 500;
    var liSize = 120;
    var height = 60;    
    var ulSize = liSize * maximum;
    var divSize = liSize * visible; 

    $('.categories').css("width", "auto").css("height", height+"px").css("visibility", "visible").css("overflow", "hidden").css("position", "relative");
    $(".categories ul li").css("list-style","none").css("display","inline");
    $(".categories ul").css("width", ulSize+"px").css("left", -(current * liSize)).css("position", "absolute").css("white-space","nowrap").css("margin","0px").css("padding","5px");

    $(".categories").swipeleft(function(event){
        if(current + step < 0 || current + step > maximum - visible) {return; }
        else {
            current = current + step;
            $('.categories ul').animate({left: -(liSize * current)}, speed, null);
        }
        return false;
    });

    $(".categories").swiperight(function(){
        if(current - step < 0 || current - step > maximum - visible) {return; }
        else {
            current = current - step;
            $('.categories ul').animate({left: -(liSize * current)}, speed, null);
        }
        return false;
    });         
});

// $$('.list-group').each(function(clickable) {
//     var list = clickable.getElements('li');

//     list.addEvent('click', function() {
//         var link = this.getElement('a');
//         if(this.getFirst('a')) {
//             window.location = link
//         }
//     });
// });
