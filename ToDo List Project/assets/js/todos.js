// $("li").on("click",function() {

// 	if($(this).css("color") === "rgb(128, 128, 128)")
// 	{
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		})
// 		// console.log("hello");
// 	}
// 	else
// 	{
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		})
// 	}
		
// })

$("ul").on("click","li",function() {
	$(this).toggleClass("cutit");
	event.stopPropagation();
});

$("ul").on("click","span",function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
	if(event.key == "Enter")
	{
		console.log($(this).val());
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+$(this).val() + "</li>");
		$(this).val("");
	}



		// $("li").on("click",function() {
		// 	$(this).toggleClass("cutit");
		// 	event.stopPropagation();
		// });

		// $("span").click(function(event) {
		// 	$(this).parent().fadeOut(500,function() {
		// 		$(this).remove();
		// 	});
		// 	event.stopPropagation();
		// })

});


$(".fa-edit").click( function() {
	$("input[type='text']").fadeToggle();
});


