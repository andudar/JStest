/*var data = JSON.parse(json);
var form = document.forms.myform;

var arrElems = [];

var rightAnswer = [];
function createForm(){
	

	data.forEach(function(item, i, arr){
		var 
			question = item.question,
			type = item.type,
			options;


			rightAnswer.unshift(item.rightAnswer[0])

		var fieldset = document.createElement('fieldset');

			
			var el = document.createElement(type);
			
			if(type == "select"){
				options = item.answers;

				options.forEach(function(item){
					var option = document.createElement('option');
					option.innerHTML = item;
					el.appendChild(option);
				})

			}


			
			form.insertBefore(el,form.firstElementChild);
			var label = document.createElement('label');

			label.innerHTML = question;
			form.insertBefore(label,el);
		})


};


var input = document.getElementsByTagName('input')[0];

createForm();


var check = document.getElementById('check');


form.onclick = function(e){

	if(e.target.nodeName != 'BUTTON') return;

	var progress = 0;
	var elems = document.myform.elements;

	for(var i = 0; i < elems.length; i++){

		if(elems[i].nodeName == 'BUTTON') continue;

		if(rightAnswer[i] != elems[i].value){
			elems[i].style.borderColor = "red";
		}else{
			elems[i].style.borderColor = "green";
			progress += 1;
		}
	};

	alert("You have scored " + progress + " right answers!");
};
form.onsubmit = function(){
	return false;
}

form.onchange = function(){
	var elems = document.myform.elements;

	for(var i = 0; elems.length; i++){
		elems[i].style.borderColor = "";

	};
}

var elemsItem = 0;
function show(){
	form.appendChild
}var json = `[
	{"question":"What name of the method to sort array","type":"select","answers":["sorted","sort","filter"],"rightAnswer":["sort"]},
	{"question":"What name of the event when data from server is already get","type":"input",
			"rightAnswer":["onreadystatechange"]},
	{"question":"What name of the array's method which attempt to accept callback of this method to every elemen of array",
			"type":"select","answers":["map","forEach","everyElement"],"rightAnswer":["forEach"]}]`;

*/