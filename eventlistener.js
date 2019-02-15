document.getElementById('btn').addEventListener('click',function() {
	alert("hello himanshu");
});

document.getElementById('btn').addEventListener('click',function(){
	document.getElementById('h1').innerHTML="PN Infosys";
});

function yellowcolor() {
	document.getElementById('text').style.backgroundColor="yellow";
}
function lightblue() {
	document.getElementById('text').style.backgroundColor="lightblue";
}
document.getElementById('text').addEventListener("focus",yellowcolor);  //here function are 
// define in upper so we dont need to call like blue() i.e. called call back function
document.getElementById('text').addEventListener("focusout",lightblue);//here focusout is event and lightblue is function.
