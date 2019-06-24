var y=0;
var index=60;
var nextswing=false;
var time=0;
var frames=120;
var speed=6;
var bmin;
var bsec;

function setup(){
    createCanvas(500,500);
   frameRate(frames);
   bsec=millis();
    bmin=minute();
}
function draw(){
    var rsec;
	clear();
	background(250,250,251);
	if (nextswing){index=index-speed;if (index<59){nextswing=false;}}
    else { index=index+speed;if (index>441){nextswing=true;}}
    y=abs(1/700*(index-250)*(index-250)-250);
	stroke(1,1,1);
	strokeWeight(2);
	line(250,0,index,y);
	fill(250,251,254);
	strokeWeight(3);
	ellipse(index,y,35,35);
    time=time+1;
    fill(3);
    var sec=Math.floor((millis()-bsec)/1000);
    var min=Math.floor(sec/60);
    textSize(30);
    if (sec>60){rsec=sec-min*60}
    else {rsec=sec;}	
    text(min + ":"+rsec ,20,490);

}


