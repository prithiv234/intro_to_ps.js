function preload() {
}

function setup() {
 canvas=createCanvas(640,480);
 canvas.position(150,150);
 video=createCapture(VIDEO);
 video.hide();

}

function draw() {
   image(video,230,150,220,200);
   fill("blue");
   stroke("red");
   circle(50,50,80)
   circle(580,50,80)
   circle(580,420,80)
   circle(50,420,80)
   fill("green")
   rect(30,80,40,300)
   rect(80,30,480,40)
   rect(560,80,40,300)
   rect(80,400,480,40)
}

function take_snapshot(){
   save('prithiv.png')
}