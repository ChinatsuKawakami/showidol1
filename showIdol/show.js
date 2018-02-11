/*
Author: Chinatsu Kawakami
Created Date: Feb 9 2018
Description: This is html to show the idol photo
 */
/*$(document).ready(function(){myFunction()});*/

function functionHarunan(){
	//set values to adjust range in bar
	 let haruslider;
	 haruslider = document.getElementById("haruRange");
	 //set values to change context in paragraph
	   let harudemo;

	 harudemo = document.getElementById("harudemo");
	 haruslider.oninput=function(){harudemo.innerHTML = this.value;}
	 let harunan = harudemo.innerHTML = haruslider.value;
	 
	 switch(harunan){
		case "2012":
			$("#showharunan").addClass("showphotoharunan");
			$(".showphotoharunan").attr({style: "content:url(harunanImg/harunan2012.jpg)"});
			document.load;
			break;
		case "2013":
			$("#showharunan").addClass("showphotoharunan");
			$(".showphotoharunan").attr({style: "content:url(harunanImg/harunan2013.jpg)"});
			break;
		case "2014":
		   $("#showharunan").addClass("showphotoharunan");
		   $(".showphotoharunan").attr({style: "content:url(harunanImg/harunan2014.jpg)"});
		     break;
		case "2015":
			$("#showharunan").addClass("showphotoharunan");
			$(".showphotoharunan").attr({style: "content:url(harunanImg/harunan2015.jpg)"});
			break;
		case "2016":
			$("#showharunan").addClass("showphotoharunan");
			$(".showphotoharunan").attr({style: "content:url(harunanImg/harunan2016.jpg)"});
			break;
		case "2017":
			$("#showharunan").addClass("showphotoharunan");
			$(".showphotoharunan").attr({style: "content:url(harunanImg/harunan2017.jpg)"});
			break;
		case "2018":
			$("#showharunan").addClass("showphotoharunan");
			$(".showphotoharunan").attr({style: "content:url(harunanImg/harunan2018.jpg)"});
			break;
		default:
			break;

		}

}


function functionMasa(){
	let slider;
	slider = document.getElementById("myRange");
	let masademo; 
	masademo = document.getElementById("demo");
	// insert value in slider to paragraph
	slider.oninput = function (){masademo.innerHTML = this.value;}
	let masa = masademo.innerHTML = slider.value;
	switch(masa){
	case "2012":
		$("#show").addClass("showphoto");
		$(".showphoto").attr({style: "content:url(masaImg/satou2012.jpg)"});
		document.load;
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
}

function functionDo(){
	let doslider; 
	doslider = document.getElementById("doRange");
	let dodemo;
	dodemo = document.getElementById("dodemo");
	doslider.oninput=function(){dodemo.innerHTML = this.value;}
	let doo = dodemo.innerHTML = doslider.value;
	switch(doo){
	case "2012":
		$("#showdo").addClass("showphotodo");
		$(".showphotodo").attr({style: "content:url(doImg/do2012.jpg)"});
		document.load;
		break;
	case "2013":
		$("#showdo").addClass("showphotodo");
		$(".showphotodo").attr({style: "content:url(doImg/do2013.jpg)"});
		break;
	case "2014":
	   $("#showdo").addClass("showphotodo");
	   $(".showphotodo").attr({style: "content:url(doImg/do2014.jpg)"});
	     break;
	case "2015":
		$("#showdo").addClass("showphotodo");
		$(".showphotodo").attr({style: "content:url(doImg/do2015.jpg)"});
		break;
	case "2016":
		$("#showdo").addClass("showphotodo");
		$(".showphotodo").attr({style: "content:url(doImg/do2016.jpg)"});
		break;
	case "2017":
		$("#showdo").addClass("showphotodo");
		$(".showphotodo").attr({style: "content:url(doImg/do2017.jpg)"});
		break;
	case "2018":
		$("#showdo").addClass("showphotodo");
		$(".showphotodo").attr({style: "content:url(doImg/do2018.jpg)"});
		break;
	default:
		break;

	}
}

function functionAyu(){
	let ayuslider;
	ayuslider = document.getElementById("ayuRange");
	let ayudemo;
	ayudemo = document.getElementById("ayudemo");
	ayuslider.oninput=function(){ayudemo.innerHTML = this.value;}
	let ayumin = ayudemo.innerHTML = ayuslider.value;
	switch(ayumin){
	case "2012":
		$("#showayu").addClass("showphotoayu");
		$(".showphotoayu").attr({style: "content:url(ayuImg/ayu2012.jpg)"});
		document.load;
		break;
	case "2013":
		$("#showayu").addClass("showphotoayu");
		$(".showphotoayu").attr({style: "content:url(ayuImg/ayu2013.jpg)"});
		break;
	case "2014":
	   $("#showayu").addClass("showphotoayu");
	   $(".showphotoayu").attr({style: "content:url(ayuImg/ayu2014.jpg)"});
	     break;
	case "2015":
		$("#showayu").addClass("showphotoayu");
		$(".showphotoayu").attr({style: "content:url(ayuImg/ayu2015.jpg)"});
		break;
	case "2016":
		$("#showayu").addClass("showphotoayu");
		$(".showphotoayu").attr({style: "content:url(ayuImg/ayu2016.jpg)"});
		break;
	case "2017":
		$("#showayu").addClass("showphotoayu");
		$(".showphotoayu").attr({style: "content:url(ayuImg/ayu2017.jpg)"});
		break;
	case "2018":
		$("#showayu").addClass("showphotoayu");
		$(".showphotoayu").attr({style: "content:url(ayuImg/ayu2018.jpg)"});
		break;
	default:
		break;

	}
}

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