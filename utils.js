// Global state
let page = 0;
let currentTrack = 1;
let detectiveName = '';
let detectiveDesc = '';
let solution = { who: '', what: '', where: '' };

const tracks = [
    'assets/mp3/track2.mp3',
    'assets/mp3/track1.mp3'
  ];
let current = 0;
let audio = null;

// Utility
function clearRoot() {
  const root = document.getElementById('root');
  root.innerHTML = '';
  return root;
}

// Main render function
function render() {
  switch (page) {
    case 0: { renderPage0(); break; }
    case 1: { renderPage1(); break; }
    case 2: { renderPage2(); break; }
    case 3: { renderPage3(); break; }
    case 4: { renderPage4(); break; }
    case 5: { renderPage5(); break; }
  }
}

function goToNextPage() {
  page++;
  render()
}

function playNext() {
  audio = new Audio(tracks[current]);
  audio.addEventListener('ended', () => {
    current = (current + 1) % tracks.length;
    playNext();
  });
  audio.play();
}

// Start app
window.addEventListener('DOMContentLoaded', render);
