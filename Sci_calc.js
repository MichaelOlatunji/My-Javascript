var a, b, c, d, e, f, v, w, x, y, z, val;
let pwrState = "";
let state = true;
let powerButton = true;


function powerBtn(){
	if(powerButton == false){
		document.getElementById("screen").innerHTML = "ON";
		powerDisplay.innerHTML = "OFF";
		powerButton = true;

	}
	else{
		document.getElementById("screen").innerHTML = "OFF";
		powerDisplay.innerHTML = "ON";
		powerButton = false;
	}
}


function num(m){
	if(powerButton == true){
		w = document.getElementById('screen');
	if(w.innerText != "ON"){
		w.innerHTML += m;
	}
	else{
		w.innerHTML = "";
		w.innerHTML += m;
	}
	
	}
	
	
}

function operator(n){
	x = w.innerHTML;
	y = n;
	w.innerHTML = " ";
}

function execute(){
	z = w.innerHTML;
	a = Number(x), b = Number(z);
	if(w.innerHTML != isNaN )  {
	if(y == '*'){
		w.innerHTML = a * b;
	}
	else if(y == '/'){
		w.innerHTML = a / b;
	}
	else if(y == '+'){
		w.innerHTML = a + b;
	}
	else if(y == '-'){
		w.innerHTML = a - b;
	}
	else if(pwrState == "on"){
		y = w.innerHTML;
		r = Math.pow(x, y);
		w.innerHTML = r;
		pwrState = "";
	}
	else if(pwrState == "off"){
		f = w.innerHTML;
		w.innerHTML = f**(1/d);
		pwrState = "";
	}
	else if(pwrState == true){
		s = parseInt(w.innerHTML);
		j = m - s;
 		
 		result = 1;

	 		while(j > 0){
	 			result = result * j;
	 			j--;
	 		b = result;
	 		}

 		w.innerHTML = e / b;	
 		pwrState = "";
	}
	else if(pwrState == false){
		l = parseInt(w.innerHTML);
		s = parseInt(w.innerHTML);
		first = 1;

		
		if(l > 0){
			while(l > 0){
		 		first = first * l;
		 		l--;
		 	val = first;
	 		}
	 	}
	 	else if(l == 0){
	 			val = 1;
	 	}
	 		

		j = m - s;
 		
 		result = 1;
 		if(j > 0){
	 		while(j > 0){
	 			result = result * j;
	 			j--;
	 		b = result;
	 		
	 		}
	 	}
	 	
	 	else if(j == 0){
	 		b = 1;
	 	}	
 		w.innerHTML = e/(b*val);	
 		console.log(s,val);
 		pwrState = "";
	}
}
	else{
 			w.innerHTML = "Math Error";
 		}
}
 function showTime(){
 var f = new Date();
 var h = f.getHours();
 var m = f.getMinutes();
 var s = f.getSeconds();
 		z = ' AM'

 		if(h == 0){
			h = 12;
		}

		if(h > 12){
			h = h - 12;
			z = ' PM';
		}

		h = (h < 10)? "0" + h: h;
		m = (m < 10)? "0" + m: m;
		s = (s < 10)? "0" + s: s;

 var j = h+':'+ m +':'+s+z;

 setTimeout(showTime, 1000);

 document.querySelector("#timee").innerHTML = j;
}

function ac(){
	w.innerHTML = " ";
}

 function del(){
 	w.innerHTML = w.innerHTML.slice(0, -1);
 }


function squ(){
	d = w.innerHTML;
	r = d**2;
	w.innerHTML = r;
}

function root(){
	d = w.innerHTML;
	r = d**0.5;
	w.innerHTML = r;
	console.log(r);
}

function pi(){
	w.innerHTML = Math.PI ;
}

function cbrt(){
	d = w.innerHTML;
	r = d**(1/3);
	w.innerHTML = r;
}

function qtrt(){
	d = w.innerHTML;
	r = d**3;
	w.innerHTML = r;
}

function sin(){
	d = w.innerHTML;
	r = Math.sin(d * Math.PI/ 180);
	w.innerHTML = r;
}

function cos(){
	d = w.innerHTML;
	r = Math.cos(d * Math.PI/ 180);
	w.innerHTML = r;
}

function tan(){
	d = w.innerHTML;
	r = Math.tan(d * Math.PI/ 180);
	w.innerHTML = r;
}

function asin(){
	d = w.innerHTML;
	r = Math.asin(d * Math.PI/ 180);
	w.innerHTML = r;
}

function acos(){
	d = w.innerHTML;
	r = Math.acos(d * Math.PI/ 180);
	w.innerHTML = r;
}

function atan(){
	d = w.innerHTML;
	r = Math.atan(d * Math.PI/ 180);
	w.innerHTML = r;
}

// function facto(){
// 	e= parseInt(w.innerHTML);
// 	factorial(e);

// 	function factorial(fct){
// 		let factAnswer = 0;
// 		let factFinal = 0;
// 		let done = 0;
// 		if(fct == 0){
// 		w.innerHTML = 1;
// 	}
// 	else{
// 		for(i = 0;  i <= fct; i++){
// 		factAnswer =	fct * (fct -1);
// 		done += factFinal + factAnswer;
// 		}
// 		w.innerHTML  = done;

// 	}
// 	}
// }

// function facto(v){
// 	if(v == 0){
// 		return 1;
// 	}

// 	return v * fac(v-1);
// }
function fac(){
		result = 1;
		var n = w.innerHTML;
		if(n > 0){
			while(n > 0){
				result = result * n; 
				n--;
		w.innerHTML = result;	
	}
		}
		else if(n == 0){ w.innerHTML = 1;}
}

function pwr(){
	x = w.innerHTML;
	w.innerHTML = "";
	pwrState = "on";
	
}

function log(){
	d = w.innerHTML;
	w.innerHTML = Math.log10(d);
}

function log_2(){
	d = w.innerHTML;
	w.innerHTML = Math.log2(d);
}

function inverse(){
	d = w.innerHTML;
	w.innerHTML = 1/d;
}

function expo(){
	d = w.innerHTML;
	w.innerHTML += " * 10";
}

function surd(){
	d = w.innerHTML;
	w.innerHTML = "";
	pwrState = "off";
}

function rad(){
	d = w.innerHTML;
	w.innerHTML = d * (22/7)/180;
}

function perm(){
	 m = w.innerHTML;
	if(pwrState == "") {
	result = 1;
		f = w.innerHTML;

		while(f > 0){
				result = result * f; 
				f--;
		e = result;
	w.innerHTML = "";
	
}
pwrState = true;
}
console.log(m,f,e);

}

function comb(){
	m = w.innerHTML;
	if(pwrState == "") {
	result = 1;
		f = w.innerHTML;

		while(f > 0){
				result = result * f; 
				f--;
		e = result;
	w.innerHTML = "";
	
}
pwrState = false;
}
console.log(m,f,e);
}

