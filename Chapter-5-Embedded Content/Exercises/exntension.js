const sounds = ["Dark Element", "Dark Slam", "Death", "Glitch Distort", "Spider", "Creepy Laugh", "Rigor Flesh", "Monster Screeh", "Heavy Wing", "Ghost Breath"];

sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
  
    btn.innerText = sound;
  
    btn.addEventListener("click", () => {
      stopSongs();
  
      document.getElementById(sound).play();
    });
  
    document.getElementById("buttons").appendChild(btn);
  });
  
  function stopSongs() {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);
  
      song.pause();
      song.currentTime = 0;
    });
  }

  function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 10;
    speech.rate = -10;
    speech.pitch = -20;
    window.speechSynthesis.speak(speech);
    }