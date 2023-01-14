Song_1 = "";
Song_2 = "";

function preload() {
    Song_1 = loadSound("music.mp3");
    Song_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}