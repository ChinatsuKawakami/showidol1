/*
Author: Chinatsu Kawakami
Created Date: Feb 9 2018
Description: This is html to show the idol photo
 */
$(document).ready(function(){
	
	//set values to adjust range in bar
	let slider;let doslider; let ayuslider; let haruslider;
	
	slider = document.getElementById("myRange");
	doslider = document.getElementById("doRange");
	ayuslider = document.getElementById("ayuRange");
	haruslider = document.getElementById("haruRange");
	//set values to change context in paragraph
	let masademo; let dodemo; let ayudemo; let harudemo;
	
	masademo = document.getElementById("demo");
	dodemo = document.getElementById("dodemo");
	ayudemo = document.getElementById("ayudemo");
	harudemo = document.getElementById("harudemo");
	
	slider.oninput = function (){masademo.innerHTML = this.value;}
	doslider.oninput=function(){dodemo.innerHTML = this.value;}
	ayuslider.oninput=function(){ayudemo.innerHTML = this.value;}
	haruslider.oninput=function(){harudemo.innerHTML = this.value;}
	
	// insert value in slider to paragraph
	let masa = masademo.innerHTML = slider.value;
	let doo = dodemo.innerHTML = doslider.value;
	let ayumin = ayudemo.innerHTML = ayuslider.value;
	let harunan = harudemo.innerHTML = haruslider.value;
    
	//function to show the photo in div class
	switch(masa){
	case "2012":
		$("#show").addClass("showphoto");
		break;
	case "2013":
		$("#show").addClass("showphoto");
		$(".showphoto").attr({style: "content:url(masaImg/satou2013.jpg)"});
		break;
	case "2014":
	   $("#show").addClass("showphoto");
	   $(".showphoto").attr({style: "content:url(masaImg/sato2014.jpg)"});
	     break;
	case "2015":
		$("#show").addClass("showphoto");
		$(".showphoto").attr({style: "content:url(masaImg/sato2015.jpg)"});
		break;
	case "2016":
		$("#show").addClass("showphoto");
		$(".showphoto").attr({style: "content:url(masaImg/sato2016.jpg)"});
		break;
	case "2017":
		$("#show").addClass("showphoto");
		$(".showphoto").attr({style: "content:url(masaImg/sato2017.jpg)"});
		break;
	case "2018":
		$("#show").addClass("showphoto");
		$(".showphoto").attr({style: "content:url(masaImg/sato2018.jpg)"});
		break;
	default:
		break;
	}
    

});
/*	if(masademo.innerHTML==="2012"){
$("#show").addClass("showphoto");

}else{
$("#show").removeClass("showphoto");
}*/

/*function showHistory(){
	let image = $("<img>");
	let div = $("<div>")
	image.load(function(){
		div.css({
			 "width": this.width,
		     "height": this.height,
		     "background-image": "url(" + this.src + ")"	
		});
		$(".showphoto").append(div);
		
	});
	image.attr("src","satou2012.jpg");
			
};*/
/*
(function(){

$(document).ready(function(){
	 $("#demo").innterHTML=document.getElementById("myRange").value;
	 $("#dodemo").innerHTML=document.getElementById("doRange").value;
	  $("#ayudemo").innerHTML=document.getElementById("ayuRange").value;
	  $("#harudemo").innerHTML=document.getElementById("haruRange").value;
	  
	$("#slider").click(function(){
	    $("#demo").innerHTML=document.getElementById("myRange").value;
	})
	$("#doslider").click(function(){
	    $("#dodemo").innerHTML=document.getElementById("doRange").value;
	})
	$("#ayuslider").click(function(){
	    $("#ayudemo").innerHTML=document.getElementById("ayuRange").value;
	})
	$("#haruslider").click(function(){
	    $("#harudemo").innerHTML=document.getElementById("haruRange").value;
	})
})
})();

*/
//let slider = document.getElementById("myRange");



//let output = document.getElementById("demo");
//output.innerHTML = slider.value;

//slider.oninput = function() {
//  output.innerHTML = this.value;
//}