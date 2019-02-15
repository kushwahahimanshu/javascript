function Call() {
	var txt1=document.getElementById('txt1');
	var txt2=document.getElementById('txt2');
	var result=document.getElementById('result');
	if (txt1.value==txt2.value) {
		result.innerHTML="<h4 style ='color:green;'>Password confirm..</h4>";
	}
	else{
		result.innerHTML="<h4 style='color:red;'>Password Not match </h4>";
	}
}