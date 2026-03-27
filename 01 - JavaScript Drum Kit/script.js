const handleKeyDown = (e) => {
    const audio = document.querySelector(`audio[data-key='${e.code}']`);
    const key = document.querySelector(`.key[data-key='${e.code}']`);

    if(!audio) return; // non existing keys
    audio.currentTime = 0;     // reset to 0 after each play()
    audio.play();
    key.classList.add('playing');
    setTimeout(() => {
        key.classList.remove('playing');
    }, 150);
}

const keys = document.querySelectorAll('.key');
function removeTransition (e) {
    if(!e.propertyName.includes('transform')) return;
    this.classList.remove('playing');
    
}

keys.forEach(k => k.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', handleKeyDown);


