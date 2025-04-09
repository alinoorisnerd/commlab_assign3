//array containing images that we use
const images = [
    "", // Initial placeholder
    "assets/wakingup.webp",
    "assets/brushing.webp",
    "assets/walkinside.webp",
    "assets/walkoutsdie.webp",
    "assets/D2.webp",
    "assets/class.webp",
    "assets/beach.webp",
    "assets/pass (1).jpg",
    "assets/fail (1).jpg"

  ];
  //array with all audios
  const audios = [
    "", // no audio for initial state
    "assets/audios/wakeu.mp3",
    "assets/audios/shower3.mp3",
    "assets/audios/walkinginsdie.mp3",
    "assets/audios/outside.mp3",
    "assets/audios/d2.mp3",
    "assets/audios/class.mp3",
    "assets/audios/beach.mp3",
    "assets/audios/Pass.mp3",
    "assets/audios/Fail.mp3",

  ];
  //counter
  let currentIndex = 1;
  //statemachine
  let finish = false ;
  
  const playBtn = document.getElementById("play-btn");
  const image = document.getElementById("main-image");
  const audio = document.getElementById("audio");
  const choiceButtons = document.getElementById("choice-buttons");
  //custom function -> initiates the logic of the program/ storyline
  function startSequence() {
    playBtn.style.display = "none";
    audio.style.display = "block";
    loadAndPlay(currentIndex);
  }
  // renders the appropriate sound and relevant image
  function loadAndPlay(index) {
    image.src = images[index];
    audio.src = audios[index];
    audio.play();
  }
  
  // Handle when audio ends
  audio.addEventListener("ended", () => {
    currentIndex++;
  
    if (currentIndex <= 5) {
      loadAndPlay(currentIndex);
    } else if (currentIndex > 5 && currentIndex < 7) {
         // Show options for Image 6 or 7
      audio.style.display = "none";
      choiceButtons.style.display = "flex";
    }
     else {
      if (currentIndex == 7 && finish == false){
        loadAndPlay(8);
        finish = true ;
      } else if (currentIndex == 8 && finish == false) {
        loadAndPlay (9);
        finish = true ;
      }
     
    }
  });
  
  // Handle user choice
  function loadAlternate(choiceIndex) {
    // exception to prevent repetition of the same scene.
    if (choiceIndex  == 7) {
      currentIndex ++ ;
    }
    choiceButtons.style.display = "none";
    audio.style.display = "block";
    image.src = images[choiceIndex];
    audio.src = audios[choiceIndex];
    audio.play();
  }