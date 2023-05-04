console.log("Welcome To Spotify");

//Intitialize the variables
let songindex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "mujhko itna bata da koi", filPath: "song/1.mp3", coverPath: "cover/1.jpeg"},
    {songName: "Snake Musc", filPath: "song/2.mp3", coverPath: "cover/2.jpeg"},
    {songName: "Sasslam-e-", filPath: "song/3.mp3", coverPath: "cover/3.jpeg"},
    {songName: "Ishssssssq", filPath: "song/4.mp3", coverPath: "cover/4.jpeg"},
    {songName: "e-Ishssssq", filPath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Sa-e-sxswq", filPath: "song/6.mp3", coverPath: "cover/6.png"},
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});
// audioElement.play();

//Handle play / pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Event
audioElement.addEventListener('timeupdate', ()=>{
//Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        makeAllPlays(e.target.id);
        console.log(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${e.target.id}.mp3`;
        audioElement.currentTime = 0 ;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})