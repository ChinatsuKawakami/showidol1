/*
Author: Chinatsu Kawakami
Created Date: Feb 9 2018
Description: This is html to show the idol photo
 */
$(document).ready(function(){
	
	let slider;let doslider; let ayuslider; let haruslider;
	
	slider = document.getElementById("myRange");
	doslider = document.getElementById("doRange");
	ayuslider = document.getElementById("ayuRange");
	haruslider = document.getElementById("haruRange");
	
	
	
	let masademo; let dodemo; let ayudemo; let harudemo;
	
	
	masademo = document.getElementById("demo");
	
	dodemo = document.getElementById("dodemo");
	ayudemo = document.getElementById("ayudemo");
	harudemo = document.getElementById("harudemo");
	slider.oninput = function (){masademo.innerHTML = this.value;}
	doslider.oninput=function(){dodemo.innerHTML = this.value;}
	ayuslider.oninput=function(){ayudemo.innerHTML = this.value;}
	haruslider.oninput=function(){harudemo.innerHTML = this.value;}
	
	
	masademo.innerHTML = slider.value;
	dodemo.innerHTML = doslider.value;
	ayudemo.innerHTML = ayuslider.value;
	harudemo.innerHTML = haruslider.value;
});
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