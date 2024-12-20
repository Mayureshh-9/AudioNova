  console.log("Welcome to Spotify");

  // Initialize the Variables
  let songIndex = 0;
  let audioElement = new Audio('songs/1.mp3');
  let masterPlay = document.getElementById('masterPlay');
  let myProgressBar = document.getElementById('myProgressBar');
  let gif = document.getElementById('gif');
  let masterSongName = document.getElementById('masterSongName');
  let songItems = Array.from(document.getElementsByClassName('songItem'));
  let songs = [
    {songName: "Its always Blue" , filepath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Trap", filepath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "They mad", filepath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Rich the Kill", filepath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Love me", filepath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Safety Dance", filepath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Back it up", filepath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Beautiful", filepath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "True Love", filepath:"songs/9.mp3", coverPath: "covers/9.jpg"},
  ]

  songItems.forEach((element, i)=>{
    debugger;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
  })
  
  // Handle play pause click
  masterPlay.addEventListener('click' , ()=>{
    debugger;
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0 ;

    }
  })

  //masterPlay.addEventListener('click' , ()=>{
    audioElement.pause();
 // })

  // Listen to Events
  audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    myProgressBar.value = progress;
  })

  myProgressBar.addEventListener('change', ()=>{
    debugger;
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
  })

  const makeAllPlays = ()=>{
   // debugger;
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
  }

  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    debugger;
    element.addEventListener('click', (e) => {
        makeAllPlays(); 
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
  debugger;
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
  debugger;
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

