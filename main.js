noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function draw() {
    background('#295a9e');
    document.getElementById("square_sides").innerHTML = "The font size of the text is: " + difference + "px";  
}

function gotPoses(results) {
    if(results.length > 0) {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
        textSize = difference;
    }
}

function textSize() {
    textSize('John', 30, 100);
    fill('#ffffff')
}
    
