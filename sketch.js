// setup() is called once at page-load
// let width = 800; //1600;
// let height = 800; //1200;
let width = 1200;
let height = 1200;
let divisions = 3;
let section_width = width  / divisions;
let section_height = height / divisions;
// let radians_start = radians(0);
// let radians_stop = radians(360);

let center_hr_x = width /6;
let center_min_x = 3 * center_hr_x;
let center_sec_x = 5 * center_hr_x;

let hrMax = width/divisions;
let minMax = width/divisions;
let secMax = width/divisions;

let center_hr_y = height / 2;
let center_min_y = height / 2;
let center_sec_y = height / 2;

let priorMinute;
let priorHour;


let sMax = 60;
let mMax = 60;
let hMax = 24;

function setup() {
    
    createCanvas(width, height); // make an HTML canvas element width x height pixels
    background(225);

    fill(180);

    priorHour = hour();
    priorMinute = minute();
    
    drawHoursBackground();
    drawMinutesBackground();
    drawSecondsBackground();
}

// draw() is called 60 times per second
function draw() {

    let hr = map(hour(), 0, hMax, 0, hrMax);
    let min = map(minute(), 0, mMax, 0, minMax);
    let sec = map(second(), 0, sMax-1, 0, secMax);

    hr_x = width/2;
    hr_y = height/2;

    let total_hr = 24
    let total_min = 60
    let total_sec = 60

    fill(120, 120, 120);
    circle(center_hr_x, center_hr_y, hr);
    circle(center_min_x, center_min_y, min);
    circle(center_sec_x, center_sec_y, sec);

    let currentHour = hour();
    let currentMinute = minute();


    if (currentHour !== priorHour) {
        priorHour = currentHour;

        drawMinutesBackground();
    }
    
    if (currentMinute!== priorMinute) {
        console.log('current minute = ', currentMinute);
        priorMinute = currentMinute;

        drawSecondsBackground();
    }

}

function drawSecondsBackground() {
    for (let s = sMax; s > 0; s--) {
        fill(255, 0, 0,  s/sMax* 50);
        circle(center_sec_x, center_sec_y, s * section_width /sMax);
    }
}


function drawMinutesBackground() {
    for (let m = mMax; m > 0; m--) {
        fill(0, 255, 0,  m/mMax* 50);
        circle(center_min_x, center_min_y, m * section_width /mMax);
    }
}

function drawHoursBackground() {
    for (let h = hMax; h > 0; h--) {
        fill(0, 0, 255, h/hMax* 100);
        circle(center_hr_x, center_hr_y, h * section_width /hMax);
    }
}