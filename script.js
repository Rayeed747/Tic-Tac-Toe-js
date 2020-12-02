
console.log('connected');
//restart

var restart=document.querySelector('#b');

//grab all box
var box=document.querySelectorAll('td');

//clear all box
function clearbox(){
	for (var i = 0 ; i < box.length; i++) {
		box[i].textContent ='';
	}
}

restart.addEventListener('click', clearbox);


//check box
function changeMarker(){
	if (this.textContent ==='') {
		this.textContent ='X';
	}else if (this.textContent ==='X') {
		this.textContent ='O';
	}else  {
		this.textContent ='';
	}

}

for (var i = 0 ; i < box.length; i++) {
	box[i].addEventListener('click',changeMarker)

}
//for loop 