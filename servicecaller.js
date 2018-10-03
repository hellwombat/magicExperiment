	/**
	* All rest calls should be performed in sync
	*
	* Todo update approach
	**/
	jQuery.ajaxSetup({async:false});


	/**
	Searches the api for card name
	**/
	function searchCardName(inputArgument) {

		console.log("searching for a card on the magicthegathering api ...")

		var response;
	
			// we want to use shorthand at some point ...
			/*
			$.get("https://api.magicthegathering.io/v1/cards?name=" + inputArgument, function(data) {
				response = data;
			})

			*/

			     var result = null;
			     var url = "https://api.magicthegathering.io/v1/cards?name=" + inputArgument;
			     $.ajax({
			        url: url,
			        type: 'get',
			        async: false,
			        success: function(data) {
			            result = data;

			        } 
			     });
			     console.log(result)
			     return result;					
	}

	$("#searchByName").click(function(){

		//get the value from the input field
		var name = $("#searchfield").val();
		
		// search on card name via api
		var result = searchCardName(name).cards;

		if (result.length < 1)  {
			alert(":(");
			return;	
		}		

		// update page
		updatePage(result.length);
		
		//insert image			
		insertImage(result[3].imageUrl)



	})
function updatePage(updateText){
	$("#output").text(updateText);
}
function insertImage(source){
 
	var img = $('<img>'); 
	img.attr('src', source);
	img.appendTo('#output');


}


