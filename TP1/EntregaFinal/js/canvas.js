

var ctx = document.getElementById("canvas").getContext("2d");

var imageData;

var image1=new Image();
image1.src = "images.jpg";

image1.onload = function(){
	ctx.drawImage(this,0,0);

	imageData= ctx.getImageData(0,0,this.width, this.height);


	for (x = 0; x < this.width; x++) {
		for (y = 0; y <this.height; y++){
			var r= getRed(imageData,x,y);
			var g= getGreen(imageData,x,y);
			var b= getBlue(imageData,x,y);

			setPixel(imageData,x,y,220-r,220-g,220-b,255 );
		}
	}

	ctx.putImageData(imageData,0,0);

}
function getRed(imageData,x,y){
	indice= (x + y * imageData.width) *4;
	return imageData.data[indice];
}
function getGreen(imageData,x,y){
	indice= (x + y * imageData.width) *4;
	return imageData.data[indice+1];
}
function getBlue(imageData,x,y){
	indice= (x + y * imageData.width) *4;
	return imageData.data[indice+2];
}

function setPixel(imageData,x,y,r,g,b,a)
{
	index= (x+y * imageData.width)*4;
	imageData.data[index+0]=r;
	imageData.data[index+1]=g;
	imageData.data[index+2]=b;
	imageData.data[index+3]=a;
}

<!-- JavaScript code -->
