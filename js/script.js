function initPlayer(){

const songs=[

{
title:"Blue Caffe",
file:"song1.mp3",
cover:"cover1.jpg"
},

{
title:"Замок на песке",
file:"song2.mp3",
cover:"cover2.jpg"
},

{
title:"На заре",
file:"song3.mp3",
cover:"cover3.jpg"
},

{
title:"Небо на ладони",
file:"song4.mp3",
cover:"cover4.jpg"
},

{
title:"Мой Сувенир",
file:"song5.mp3",
cover:"cover5.jpg"
},

{
title:"Песня 6",
file:"song6.mp3",
cover:"cover6.jpg"
},
{
title:"Песня 7",
file:"song7.mp3",
cover:"cover7.jpg"
},
{
title:"Песня 8",
file:"song8.mp3",
cover:"cover8.jpg"
},


];

const audio=document.getElementById("audio");
const cover=document.getElementById("cover");
const title=document.getElementById("title");
const list=document.querySelectorAll("#playlist li");

let current=0;

function loadSong(i){

current=i;

audio.src=songs[i].file;

cover.src=songs[i].cover;

title.innerHTML=songs[i].title;

list.forEach(li=>li.classList.remove("active"));

list[i].classList.add("active");

}

list.forEach((li,i)=>{

li.onclick=()=>{

loadSong(i);

audio.play();

}

});

audio.onplay = () => {
    cover.classList.add("play");
};

audio.onpause = () => {
    cover.classList.remove("play");
};

audio.onended = () => {
    cover.classList.remove("play");

    current++;

    if(current >= songs.length){
        current = 0;
    }

    loadSong(current);
    audio.play();
};

}

const btn=document.getElementById("togglePlaylist");
const list=document.getElementById("playlist2");

btn.onclick=function(){

list.classList.toggle("open");

if(list.classList.contains("open")){

btn.innerHTML="▲ Свернуть";

}else{

btn.innerHTML="▼ Слушать ещё";

}

}


initPlayer();

function initSlider(){

const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));

slides[index].classList.add("active");

}

document.querySelector(".next").onclick=()=>{

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

}

document.querySelector(".prev").onclick=()=>{

current--;

if(current<0){

current=slides.length-1;

}

showSlide(current);

}

setInterval(()=>{

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

},5000);

}

initSlider();