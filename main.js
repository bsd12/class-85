canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
nasa_image=["93574.jpg","images.jpeg","mars.jpg","LIFT-Mars_3D-illustration_1600x900.jpg"];
randomnumber=Math.floor(Math.random()*4);
background_image=nasa_image[randomnumber];
rover_image="rover.png";
rover_X=10;
rover_Y=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadbackground(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_X,rover_Y,rover_width,rover_height);
    }

    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
    }

    if(keypressed=='40'){
        down();
    }

    if(keypressed=='37'){
        left();
    }


    if(keypressed=='39'){
        right();
    }


    }

    function up(){
if(rover_Y>=0){
    rover_Y=rover_Y-10;
    uploadbackground();
    uploadrover();
}
    }

    function down(){
        if(rover_Y<=500){
            rover_Y=rover_Y+10;
            uploadbackground();
            uploadrover();   
        }
    }

    function left(){
        if(rover_X>=0){
            rover_X=rover_X-10;
            uploadbackground();
            uploadrover();   
        }
    }


    function right(){
        if(rover_X<=700){
            rover_X=rover_X+10;
            uploadbackground();
            uploadrover();   
        }
    }

