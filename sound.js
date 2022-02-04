function playAudio(sound) {
    // have to put mp3 in sounds folder
    var snd = new Audio('sounds/' + sound + '.mp3');
    snd.play();
}
