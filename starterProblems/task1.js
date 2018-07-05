var inputs = document.getElementsByTagName('input');	//We would have to grab all the elements with the 'input' tag
for(i = 0; i < inputs.length; i++){	//Loop through them
	var inputField = inputs[i].id	//	Save the iterated search input id's into a variable
	console.log(inputField)	//log the previously saved variable
}
