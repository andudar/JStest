var data = JSON.parse(json);
var form = document.forms.myform;

var rightAnswer = [];
var arrItems = [];
var myAnswers = [];

function createForm(){
	

	data.forEach(function(item, i, arr){
		var 
			question = item.question,
			type = item.type,
			values =  item.answers;

			var arrTasks = [];

			rightAnswer.push(item.rightAnswer[0]);



				

				for(var j = 0; j < values.length; j++){
					var el = document.createElement('input');
					el.setAttribute('type',type);
					
					el.setAttribute("name","question-" + (i + 1));

					if(j == values.length-1){
						el.setAttribute("checked","true");
					}

					el.setAttribute('value',values[j]);

					var text = document.createTextNode(values[j]);
					var br = document.createElement('br');
					arrTasks.push(text,el,br);
					

				}

				


			arrItems.push(arrTasks);
		})


};


var input = document.getElementsByTagName('input')[0];

createForm();


var check = document.getElementById('check');


/*form.onclick = function(e){

	if(e.target.nodeName != 'BUTTON') return;

	

};*/


form.onsubmit = function(){
	return false;
}

/*form.onchange = function(){
	var elems = document.myform.elements;

	for(var i = 0; elems.length; i++){
		elems[i].style.borderColor = "";

	};
}*/

var index = 0;
var endOfTest = false;

var next = document.getElementById('next');


next.onclick = function(){
	var answer;


	var elems = document.myform.elements;
	var max = elems.length;
	for(; max--;){
		if(elems[max].checked){
			answer = true;
			myAnswers.push(elems[max].value);
			break;
		}
	}

	index += 1;
	

	if(index == arrItems.length){
	index = 0;
	endOfTest = true;
//show result

	clearForm();
	checkAnswers();

	endOfTest = false;
	console.log("finish");
	return;
	} 

	clearForm();
	appendQuestion(arrItems);

};

function appendQuestion(arr){
	
	

	var a = arr[index];
	var max = a.length;
	for(; max--;){
		form.insertBefore(a[max],form.lastElementChild);
	}
		var 
			question = data[index].question,
			label = document.createElement('label');
			label.innerHTML = "Question " + (index + 1) + ": <br>" + question;
		form.insertBefore(label, form.firstElementChild)
		
};



appendQuestion(arrItems);

function clearForm(){
		var children = form.childNodes;
		var max = children.length;
		for(; max--;){
			if(children[max].nodeName == "BUTTON") continue;
			form.removeChild(children[max]);
		}
};


function checkAnswers(){
	var result = 0;

	rightAnswer.forEach(function(item,i){
		if(item == myAnswers[i]){
			result += 1;
		}else result = result;

	});
 
	var resContainer = document.createElement('div');
	resContainer.classList.add('result');
	

	resContainer.innerHTML = "Your result is:   <span>" + result + " out of " + arrItems.length + "</span>";
	if(result == arrItems.length){
		alert("Congratulations! You are clever boy!")
	}
	form.removeChild(form.firstElementChild);
	form.appendChild(resContainer,form.firstElementChild);


}