canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_X=5;
greencar_Y=225;

function add() {
	background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=background_image;

    greencar_imagetag=new Image();
    greencar_imagetag.onload=uploadRover;
    greencar_imagetag.src=rover_image;
}


function uploadBackground() {
	ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imagetag, greencar_X, greencar_Y,greencar_width,greencar_height);
}

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(greencar_Y >=0){
        greencar_Y=greencar_Y-10;
        console.log("when up arrow is pressed, X= "+rover_X+"| Y= "+rover_Y);
        uploadBackground();
        uploadRover();
	}
}

function down()
{
	if(greencar_Y <=500){
        greencar_Y=greencar_Y+10;
        console.log("when down arrow is pressed, X= "+rover_X+"| Y= "+rover_Y);
        uploadBackground();
        uploadRover()
	}
}

function left()
{
	if(greencar_X >=0){
        greencar_X=greencar_X-10;
        console.log("when left arrow is pressed, X= "+rover_X+"| Y= "+rover_Y);
        uploadBackground();
        uploadRover();
	}
}

function right()
{
	if(greencar_X <=700){
        greencar_X=greencar_X+10;
        console.log("when right arrow is pressed, X= "+rover_X+"| Y= "+rover_Y);
        uploadBackground();
        uploadRover();
	}

}	
