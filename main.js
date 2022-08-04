function setup(){
    canvas = createCanvas(620, 590);
    canvas.position(811, 149); 

    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(100, 149);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FFFFFF');
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}