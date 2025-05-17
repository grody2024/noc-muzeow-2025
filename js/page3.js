function renderPage3() {
  const root = clearRoot();
  const div = document.createElement('div');
  div.className = 'Page3';
  div.style.textAlign = 'center';
  div.style.marginTop = '0'; // Remove margin, handled by CSS

  div.innerHTML = `
    <div class="Page3Header">
      <div class="Page3HeaderBar">
        <span>MATERIAŁ MONITORINGU</span>
      </div>
    </div>
    <img src="assets/png/kamera.png" alt="kamera" class="Page3Camera" />
    <div id="videoWarning"></div>
    <div id="videoContainer"></div>
  `;
  root.appendChild(div);

  let ack = false;
  function showWarning() {
    const warning = document.getElementById('videoWarning');
    warning.innerHTML = `
      <div class="Page3WarningBox">
        <div class="Page3WarningTop">
          <img src="assets/png/uwaga.png" alt="uwaga" class="Page3WarningIcon" />
          <span class="Page3WarningTitle">UWAGA!</span>
        </div>
        <div class="Page3WarningText">
          Materiał wideo może zawierać szybko zmieniający się obraz i błyski światła, które mogą wywoływać atak epilepsji u osób wrażliwych.
        </div>
        <button id="ackBtn" class="Page3WarningBtn Page3WarningBtnMain">Rozumiem, przejdź do wideo</button>
        <button id="skipBtn" class="Page3WarningBtn">Pomiń</button>
      </div>
    `;
    document.getElementById('ackBtn').onclick = () => {
      ack = true;
      showVideo();
    };
    document.getElementById('skipBtn').onclick = () => {
      goToNextPage();
    };
  }
  function showVideo() {
    document.getElementById('videoWarning').innerHTML = '';
    const videoDiv = document.getElementById('videoContainer');
    videoDiv.innerHTML = `
      <video id="mainVideo" width="100%" src="assets/mp4/video.mp4" autoplay muted playsinline></video>
    `;
    const video = document.getElementById('mainVideo');
    video.onplay = () => {
      if (document.fullscreenElement == null) {
        if (video.requestFullscreen) video.requestFullscreen();
        else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
        else if (video.msRequestFullscreen) video.msRequestFullscreen();
      }
    };
    video.onended = () => {
      page = 4;
      render();
    };
  }
  showWarning();
}