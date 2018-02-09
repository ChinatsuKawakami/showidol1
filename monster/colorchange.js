/*
 * Author : Chinatsu Kawakami
 * Date: Feb 05 2018
 * 
 * /


"use strict";

/*Evet grab food*/

(function(){
 
  //get element
    var elements = document.getElementsByClassName("colorsfood");
    
    
   $('.colorsfood').draggable({});
	$('.container').droppable({
		drop: function(event, ui) {
			eat();
			$('.mouse').animate({top:'15', left: '15', height:'30px', width:'30px'});
		},
		over: function(event, ui) {
			$('.mouse').animate({top:'3', left: '3', height:'54px', width:'54px'});
		}
	})
    //get values to get postion of cursor
    var x;
    var y;

    //this event cause when the cursor is clicked on the colorsfood
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
        
    }

    //this is the function which cause when the cursor is clicked
    function mdown(e) {

        //add .drag as class name
        this.classList.add("drag");

        
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //get location for cursor
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //cause event 
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }//end function

    //when the cursor is moved, this event causes
    function mmove(e) {

        //get element 
        var drag = document.getElementsByClassName("drag")[0];

        //get element difference between object and the location of cursor
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //
        e.preventDefault();

        //move item when mouse is moved 
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //when mouse is unmoved, item stops moving 
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }//end function

    //
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        //delete handler
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup",mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //delete drag class
        drag.classList.remove("drag");
    }//end function
    
    
    //eat food
    function eat(){
    	$('.mouth').addClass('eat_mouth');
    	$('.colorsfood').fadeOut(500);
    	
    	setTimeout(function(){
    		$('.mouth').removeClass('eat_mouth');
    		
    		showNewFood();
    		
    	},1000);
    };//end function
    function randumNum(){
    	var numRandum = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    	
    	var ranCss ='#'+ numRandum[Math.floor(Math.random()*17)] + numRandum[Math.floor(Math.random() * 17)]
    	+numRandum[Math.floor(Math.random() * 17)]+numRandum[Math.floor(Math.random() * 17)]
    	+numRandum[Math.floor(Math.random() * 17)]+numRandum[Math.floor(Math.random() * 17)];
    	
       return ranCss;
    }
    
    function changeFoodBodyColor(){
   	 var css1 = randumNum();
   	 
     	$('.colorsfood').css("background-color",css1);
       $('.iris').css("background",css1);
   }
    function showNewFood(){
    	
 
    	$('.colorsfood').css({top: 0,left: 0});
    	$('.colorsfood').show();
    	changeFoodBodyColor();
    }//end function
    
  
    

})();

