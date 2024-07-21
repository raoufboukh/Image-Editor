const inputPh = document.querySelector("input[type='file']");
const bri = document.getElementById("bri");
const hue = document.getElementById("hue");
const blu = document.getElementById("bl");
const inv = document.getElementById("inv");
const gry = document.getElementById("gry");
const con = document.getElementById("con");
const sep = document.getElementById("sep");
const sat = document.querySelector("#sat");
const op = document.getElementById("op");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');


const settings = {};
let image = null;

function firstSettings(){
    settings.brightness = '100';
    settings.hue = '0';
    settings.blur = '0';
    settings.invert = '0';
    settings.grayscale = '0';
    settings.contrast = '100';
    settings.sepia = '0';
    settings.saturate = '100';
    settings.opacity = '100'


    bri.value = settings.brightness;
    hue.value = settings.hue;
    blu.value = settings.blur;
    inv.value = settings.invert;
    con.value = settings.contrast;
    gry.value = settings.grayscale;
    sep.value = settings.sepia;
    sat.value = settings.saturate;
    op.value = settings.opacity;
}

firstSettings();

function update(key,value){
    if(image != null){
        settings[key] = value;
        useFilter();
    }
}
function useFilter(){
    canvas.style.filter = ` blur(${settings.blur}px) brightness(${settings.brightness}%) invert(${settings.invert}%) hue-rotate(${settings.hue}deg)
                            grayscale(${settings.grayscale}%) contrast(${settings.contrast}%) sepia(${settings.sepia}%)  saturate(${settings.saturate}%)
                            opacity(${settings.opacity}%)`;
}


bri.oninput = function(){
    update('brightness',this.value);
}
hue.oninput = function(){
    update('hue',this.value);
}
blu.oninput = function(){
    update('blur',this.value);
}
inv.oninput = function(){
    update('invert',this.value);
}
gry.oninput = function(){
    update('grayscale',this.value);
}
con.oninput = function(){
    update('contrast',this.value);
}
sep.oninput = function(){
    update('sepia',this.value);
}
sat.oninput = function(){
    update('saturate',this.value);
}

op.oninput = function(){
    update('opacity',this.value);
}

inputPh.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            img.src = e.target.result;
            image = img;
        };
        reader.readAsDataURL(file);
    }
});