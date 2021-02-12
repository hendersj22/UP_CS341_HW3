/* Javascript codes extracted from HTML*/
/* Joshua Henderson */
/* 11 Feb 2021 */

$("#ThanksText").css("display", "none");
	$("#orderText").css("display", "none"); //these two lines set the response text to invisible on start up
	$(document).ready(function() 
	{
  		$("#formButton").click(function() 
  		{

			var word = 'vegan';
			var word1 = 'Vegan'; //these two variables will be the key word that searches for "vegan or Vegan"
			var found = false;

			var textValue=document.getElementById("notes").value;  

			if (textValue.indexOf(word)!=-1) //searches for vegan
			{
			  	found = true;
			}
			else if (textValue.indexOf(word1)!=-1) //searches for Vegan
			{
			  	found = true;
			}
			else
			{
				found = false;
			}

			if(found)
			{
				document.getElementById("alert").innerHTML = "Warning: These cheesecakes are NOT vegan!"; //if it finds vegan then it will alert them they are not vegan
			}
			else //if no vegan found then it will populate the text it needs and it will hide the order form
			{
		   		$("#selectionTable").toggle();
		   		$("#notes").toggle();
		   		$("#notesLabel").toggle();
		   		$("#formButton").toggle();
		   		$("#ThanksText").css("display", "block");
				$("#orderText").css("display", "block");
				document.getElementById("number").innerHTML = document.getElementById("quantity").value + " " + displayRadioValue() + " " + "cheesecake(s)"; //this displays their order
				//document.getElementById("type").innerHTML = displayRadioValue(); 
				document.getElementById("specialNotes").innerHTML = "Notes: " + document.getElementById("notes").value; // this puts the notes section
			}
 		});
 	});

	function displayRadioValue() { //this method will return the value of the radio button for flavor 
	            var flavor = document.getElementsByName('topping'); 
	              
	            for(i = 0; i < flavor.length; i++) { 
	                if(flavor[i].checked) 
	                return flavor[i].value; 
	            } 
	        } 
