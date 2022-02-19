video=""
status=""


function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(480, 380);
}

function start()
{
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting object(s)";
    object_namme=document.getElementById("objectid").value;
}
function draw()
{
    image(video, 0, 0, 480, 380);
}

function modelLoaded()
{
    console.log("model")
    status = true;
}