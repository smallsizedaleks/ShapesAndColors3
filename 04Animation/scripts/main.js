

changing individual properties with code and using setInterval
var rotationSpeed = 0.06;
var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
	myOtherBox.object3D.rotation.y.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.y.rotation.x);
 }

setInterval(spin, 16); //equivalent to 60 fps
