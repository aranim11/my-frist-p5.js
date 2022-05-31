function preload(){
}


function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 230, 150, 220, 200);
    fill(0, 0, 255);
    circle(50, 50, 80);

    circle(590, 50, 80);

    circle(50, 440, 80);

    circle(590, 440, 80);

    fill(255, 0, 0);
    rect(90, 40, 459, 20);

    rect(90, 430, 459, 20);

    rect(35, 90, 30, 310);

    rect(575, 90, 30, 310);
}

function take_snapshot(){
    save('student_name.png');
}
