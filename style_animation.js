function expand(element){
var target = document.getElementById(element);
	var h = target.offsetHeight;
	var sh = 60;
	
	//var sh = target.scrollHeight;
	var loopTimer = setTimeout('expand(\''+element+'\')',8);
	if(h < sh){
		h += 5;
	} else {
		clearTimeout(loopTimer);
	}
	target.style.height = 60;
}

function retract(element){
	var target = document.getElementById(element);
	var h = 60;
	var loopTimer = setTimeout('retract(\''+element+'\')',8);
	if(h > 0){
		h -= 5;
	} else {
		target.style.height = 0;
		clearTimeout(loopTimer);
	}
	target.style.height = 0;
}