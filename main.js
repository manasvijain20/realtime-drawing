nose_x = 0;
nose_y = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results)
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x,nose_y);
        leftWrist_x = results[0].pose.leftWrist.x ;
        rightWrist_x = results[0].pose.rightWrist.x;
        difference = leftWrist_x - rightWrist_x
        console.log("wrist position" + leftWrist_x,rightWrist_x)
    }
}
function modelloaded(){
    console.log("model is loaded");
}
function draw(){
    background(221,160,221);
    square(nose_x,nose_y,difference)
    fill(255,215,0)
}
