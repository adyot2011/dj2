Avatar_classics = "";
Somewhere_in_my_memory ="";

function preload()
{
    Avatar_classics = loadSound("Avatar the last airbender theme.mp3");
    Somewhere_in_my_memory = loadSound("Somewhere in my memory.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    
}

function draw()
{
    image(video, 0, 0, 600, 500);
}