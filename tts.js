// Text to Speech
// Web Speech API
const speech = new SpeechSynthesisUtterance();

textToSpeech = (text) => {
  speech.text = text;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  speech.lang = "en-US";
  speechSynthesis.speak(speech);
};

textToSpeech("Hi, This is a web speech API");
