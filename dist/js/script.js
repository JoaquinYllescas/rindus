$(window).on("load", function(){
	load();
	filtering();

	$(".filters li label, .filters li input").on("click", filtering);

});


var data = [
		{
			food: "Apple", 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum metus justo, a sagittis ligula blandit at.",
			clas: "fruit"
		},
		{
			food: "Aubergine", 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum metus justo, a sagittis ligula blandit at.",
			clas: "vegetable"
		},
		{
			food: "Banana", 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum metus justo, a sagittis ligula blandit at.",
			clas: "fruit"
		},
		{
			food: "Broccoli", 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum metus justo, a sagittis ligula blandit at.",
			clas: "vegetable"
		},
		{
			food: "Chicken", 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum metus justo, a sagittis ligula blandit at.",
			clas: "meat"
		},
		{
			food: "Orange", 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum metus justo, a sagittis ligula blandit at.",
			clas: "fruit"
		},
		{
			food: "Beef", 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum metus justo, a sagittis ligula blandit at.",
			clas: "meat"
		},
		{
			food: "Zucchini", 
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum metus justo, a sagittis ligula blandit at.",
			clas: "vegetable"
		}
	];


function load(){
	$.each( data, function( index, value ) {
	  var food = value.food;
	  var text = value.text;
	  var clas = value.clas;

	  $(".cards ul").append("<li class=' "+ clas +"'><div class='content'><div class='img'></div><div class='text'><h3>"+ food +"</h3><span class=' "+ clas +" filter-tag'>"+ clas +"</span><p>"+ text +"</p><a class='"+ clas +" info' href='#'>More Info</a></div></div></li>");

	});
}

function filtering(){

	$.each($(".filters li input"), function(){

		if(!$(this).is(':checked')){	
			var hide = $(this).attr("class");
			$(".cards li."+hide+"").slideUp(300, function(){
				$(this).css("opacity" ,  "0");
			});

		}else{
			var show = $(this).attr("class");
			$(".cards ."+show+"").css("display" , "block");
			$(".cards ."+show+"").fadeTo("slow", 1);
		}
	});
}