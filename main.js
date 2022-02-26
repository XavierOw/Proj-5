video=""
status=""
object= [];

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

function gotResult(error, result)
{
    if(error)
    {
        console.log(error);
    }
    console.log(result)
    object=result;
}

function draw()
{
    image(video, 0, 0, 480, 380);
    if(status != "")
    {
        objectDetector.detect(video, gotResult)
            for (i=0; i<object.length; i++)
            {
                document.getElementById("number_objects").innerHTML ="number of objects detected are " + object.length

                fill("orange");
                percentt= Math.floor(object[i].confidence *100);
                text(object[i].label + "" + percentt+"%", object[i].x +15, object[i].y +15);
                noFill();
                stroke("orange");
                rect(object[i].x, object[i].y, object[i].width, object[i].height);

                if(object[i].label==object_namme)
                {
                    video.stop();
                    objectDetector.detect(gotResult);
                    document.getElementById("status").innerHTML=object_namme+"found";
                    synth=window.speechSynthesis;
                    utterThis=new SpeechSynthesisUtterance(object_namme +"found");
                    synth.speak(utterThis);

                }
                else
                {
                    document.getElementById("status").innerHTML=object_namme+"not found";
                }
                
            }
    }
}

function modelLoaded()
{
    console.log("model")
    status = true;
}