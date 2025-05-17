// Global state
let page = 1;
let detectiveName = '';
let detectiveDesc = '';
let solution = { who: '', what: '', where: '' };

// CharacterGenerator data
const names = [
  "Inspektor Zawsze-Tam-Gdzie-Ty",
  "Tropiciel To-Nie-Moje-Okruchy",
  "Agent Dlaczego-Mnie-Znowu",
  "Komisarz Chyba-Tędy",
  "Oficer Pamiętam-Coś-Innego",
  "Porucznik Nic-Nie-Widziałem-Ale-Wiem",
  "Detektyw O-To-Chodziło?",
  "Szef Ciii-To-Tajemnica",
  "Major Zaraz-Wracam",
  "Ekspert Zgubiłem-Notatnik"
];
const descriptions = [
  "Zjawił się, zanim pomyślałeś, że coś zniknęło.",
  "Jego alibi to zawsze… „byłem głodny”.",
  "Nie chciał być detektywem. Ale znowu wyszło na niego.",
  "Prowadzi śledztwa... na czuja.",
  "Twierdzi, że widział, ale to był zupełnie inny dzień.",
  "Zna prawdę, mimo że spał całą sprawę.",
  "Myślał, że to gra w berka. Ale i tak rozwiązał sprawę.",
  "Nigdy nic nie mówi... ale wie wszystko.",
  "Wyszedł po dowód. Wrócił z herbatą. I rozwiązaniem.",
  "Nie potrzebuje dowodów. Wystarczy mu intuicja."
];

// Utility
function clearRoot() {
  const root = document.getElementById('root');
  root.innerHTML = '';
  return root;
}

function renderPage0(){
  const root = clearRoot()
  const div = document.createElement('div');
  div.className = 'Page0';
}

// Page 1
function renderPage1() {
  const root = clearRoot();
  const div = document.createElement('div');
  div.className = 'Page1';
  div.style.textAlign = 'center';
  div.style.marginTop = '40px';
  div.innerHTML = `
    <h1>EKSPONAT W KONSERWACJI Gra terenowa Noc Muzeów 2025 Grodzisko Sopot</h1>
    <p>
      Jak grać?<br>
      Zapoznaj się z aktem sprawy. Dowiedz się, co (prawdopodobnie) zniknęło i dlaczego wszyscy udają, że nic się nie stało.<br>
      Wylosuj swój pseudonim detektywa. To Twoja tajna tożsamość operacyjna. Zapisze się w historii Grodziska.<br>
      Obejrzyj materiał z monitoringu. Może coś (albo ktoś) rzuci Ci się w oczy…<br>
      Odwiedź 6 punktów oznaczonych lupą. Każdy punkt to część układanki – zdobądź hasło i wróć do aplikacji.<br>
      Wpisz hasło z każdego miejsca. Aplikacja sama wykreśli jedną błędną opcję: kto, co lub gdzie.<br>
      Rozwiąż sprawę. Gdy zostanie Ci po jednej odpowiedzi w każdej kolumnie – kliknij „Rozwiąż sprawę” i poznaj prawdę.
    </p>
    <button id="startBtn" style="font-size:1.2em;padding:10px 30px;">Zaczynajmy!</button>
  `;
  root.appendChild(div);
  document.getElementById('startBtn').onclick = () => {
    page = 2;
    render();
  };
}


// // Page 2
// function renderPage2() {
//   const root = clearRoot();
//   const div = document.createElement('div');
//   div.className = 'Page2';
//   div.style.display = 'flex';
//   div.style.flexDirection = 'column';
//   div.style.minHeight = '100vh';
//   div.style.textAlign = 'center';

//   // Top section: only "AKTA SPRAWY"
//   const topDiv = document.createElement('div');
//   topDiv.style.margin = '40px 20px 0 20px';
//   topDiv.innerHTML = `
//     <h2 style="background-color: #22415B; color: white; display: inline-block; padding: 20px 120px; border-radius: 40px;">AKTA SPRAWY</h2>
//   `;

//   // Bottom section: rest of the content
//   const bottomDiv = document.createElement('div');
//   bottomDiv.style.display = 'flex';
//   bottomDiv.style.flexDirection = 'column';
//   bottomDiv.style.alignItems = 'center';
//   bottomDiv.style.margin = '0 20px 0 20px';
//   bottomDiv.innerHTML = `
//     <p style="text-align: justify; margin-top: 20px; max-width: 800px; margin-left: auto; margin-right: auto;">
//       Dzień przed Nocą Muzeów wszystko było dopięte na ostatni guzik. Inwentaryzacja przebiegła bez zarzutu – każdy eksponat sprawdzony, podpisany, zamknięty. Dokumenty się zgadzały. Nawet kot Gru zachowywał się podejrzanie spokojnie.
//       <br><br>
//       Ale rano… coś się nie zgadzało.
//       W dokumentacji brakowało jednego eksponatu. Wszyscy byli przekonani, że dzień wcześniej jeszcze był. W gablocie – pusto. Żadnych śladów włamania. Tylko to uczucie, że coś zniknęło. Kustoszka, chcąc uspokoić sytuację i uniknąć niepotrzebnych pytań, zrobiła to, co zawsze działa:
//       <br><i>zawiesiła kartkę „Eksponat w konserwacji.”</i>
//       <br><br>
//       Wezwano Detektywa Gąskę. Pojawił się, przejrzał teren, zapisał coś, zamknął się w magazynku… i zniknął. Została tylko jego walizka, nieczytelne notatki i kilka kart wykluczeń, które bardziej komplikowały niż pomagały.
//       <br><br>
//       Teraz sprawa trafia do Ciebie.
//       <br>
//       Zbierz tropy, przeprowadź śledztwo i dowiedz się: kto zawinił, gdzie coś ukryto i… co tak naprawdę zniknęło.
//     </p>
//     <div style="margin-top: 30px; font-weight: bold;">WYLOSUJ SWÓJ PSEUDONIM DETEKTYWA</div>
//     <div id="charGenContainer" style="margin-top: 10px;">
//       <p style="margin: 5px;">Wylosowany pseudonim</p>
//       <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
//         <div style="display: flex; align-items: center; gap: 10px;">
//           <div id="randomNameBox" style="min-width: 200px; border: 1px solid #ccc; padding: 10px;">[Tu pojawi się pseudonim]</div>
//           <img src="dice-icon.png" alt="Dice icon" style="width: 40px; height: 40px;" onclick="rollDetectiveName()" />
//         </div>
//         <div id="randomDescBox" style="min-width: 200px; border: 1px solid #ccc; padding: 10px;">[Tu pojawi się pseudonim]</div>
//       </div>
//       <button onclick="showDescription()" style="margin-top: 10px; font-size: 1.1em;">opis</button>
//     </div>
//     <div style="margin-top: auto; margin-bottom: 40px;">
//       <button id="page2Next" style="font-size: 1.2em; padding: 10px 30px;">Dalej</button>
//     </div>
//   `;

//   div.appendChild(topDiv);
//   div.appendChild(bottomDiv);
//   root.appendChild(div);
// }

function rollDetectiveName() {
  charGenIndex = Math.floor(Math.random() * names.length);
  document.getElementById("randName").innerText = names[charGenIndex];
  document.getElementById("randDesc").innerText = descriptions[charGenIndex];
}

// Page 3
function renderPage3() {
  const root = clearRoot();
  const div = document.createElement('div');
  div.className = 'Page3';
  div.style.textAlign = 'center';
  div.style.marginTop = '40px';
  div.innerHTML = `
    <h2>Materiał z monitoringu</h2>
    <div id="videoWarning"></div>
    <div id="videoContainer"></div>
  `;
  root.appendChild(div);

  let ack = false;
  function showWarning() {
    const warning = document.getElementById('videoWarning');
    warning.innerHTML = `
      <div style="background:linear-gradient(135deg,#232526 0%,#414345 100%);color:#ffd700;border:2px solid #ffd700;border-radius:12px;padding:32px;max-width:540px;margin:0 auto 32px auto;font-size:1.15em;box-shadow:0 4px 32px rgba(0,0,0,0.45);letter-spacing:0.01em;text-shadow:0 1px 8px #000,0 0px 1px #ffd700;">
        <div style="font-size:1.3em;font-weight:700;margin-bottom:12px;">
          <span role="img" aria-label="warning" style="margin-right:8px;">⚠️</span>
          Uwaga – ostrzeżenie!
        </div>
        <div>
          Materiał wideo może zawierać <span style="color:#fff;">szybko zmieniające się obrazy</span> i <span style="color:#fff;">błyski światła</span>, które mogą wywołać atak epilepsji u osób wrażliwych.
        </div>
        <div style="margin-top:28px;">
          <button id="ackBtn" style="margin-right:18px;font-size:1em;padding:10px 28px;background:rgba(34,34,34,0.95);color:#ffd700;border:2px solid #ffd700;border-radius:6px;cursor:pointer;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,0.25);">Rozumiem, przejdź do wideo</button>
          <button id="skipBtn" style="font-size:1em;padding:10px 28px;background:rgba(255,255,255,0.08);color:#ffd700;border:2px solid #ffd700;border-radius:6px;cursor:pointer;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,0.15);">Pomiń</button>
        </div>
      </div>
    `;
    document.getElementById('ackBtn').onclick = () => {
      ack = true;
      showVideo();
    };
    document.getElementById('skipBtn').onclick = () => {
      page = 4;
      render();
    };
  }
  function showVideo() {
    document.getElementById('videoWarning').innerHTML = '';
    const videoDiv = document.getElementById('videoContainer');
    videoDiv.innerHTML = `
      <video id="mainVideo" width="100%" style="max-width:100vw;max-height:100vh;border-radius:0;box-shadow:0 2px 18px rgba(0,0,0,0.32);background:#000;display:block;margin:0 auto;" src="assets/mp4/video.mp4" autoplay muted playsinline></video>
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

// Page 4
function renderPage4() {
  const root = clearRoot();
  const ROWS = 7, COLS = 3;
  const headers = ['Kto?', 'Co?', 'Gdzie?'];
  const suspects = ['Madame Rosa', 'Pan Szafir', 'Pani Kiełcz', 'Mirek "Myszka"', 'Detektyw Gąska', 'Kot Gru'];
  const items = ['Figurka gliniana', 'Naszyjnik z muszli', 'Grot włóczni', 'Amulet z zęba', 'Kawałek mapy', 'Paciorek bursztynów'];
  const places = ['Kuźnia', 'Koziarnia', 'Staw', 'Drewutnia', 'Pomost koło tarczy', 'Osada z epoki kamienia'];

  // Shuffle
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const shuffledSuspects = shuffle(suspects);
  const shuffledItems = shuffle(items);
  const shuffledPlaces = shuffle(places);

  // State
  let active = Array.from({ length: ROWS }, (_, r) =>
    r === 0 ? Array(COLS).fill(false) : Array(COLS).fill(true)
  );

  function getCellContent(rowIdx, colIdx) {
    if (rowIdx === 0) return headers[colIdx];
    if (colIdx === 0) return shuffledSuspects[rowIdx - 1];
    if (colIdx === 1) return shuffledItems[rowIdx - 1];
    if (colIdx === 2) return shuffledPlaces[rowIdx - 1];
    return '';
  }

  function renderTable() {
    let html = '<table style="margin:0 auto;border-collapse:separate;border-spacing:12px;"><tbody>';
    for (let rowIdx = 0; rowIdx < ROWS; rowIdx++) {
      html += '<tr>';
      for (let colIdx = 0; colIdx < COLS; colIdx++) {
        const isHeader = rowIdx === 0;
        const isActive = active[rowIdx][colIdx];
        html += `<td>
          <button
            data-row="${rowIdx}" data-col="${colIdx}"
            ${isHeader ? 'disabled' : ''}
            style="
              width:110px;height:60px;border-radius:10px;border:2px solid #ffd700;
              background:${isHeader
                ? 'linear-gradient(135deg,#232526 0%,#ffd700 100%)'
                : isActive
                  ? 'linear-gradient(135deg,#ffd700 60%,#fffbe6 100%)'
                  : 'linear-gradient(135deg,#232526 0%,#414345 100%)'};
              color:${isHeader
                ? '#232526'
                : isActive
                  ? '#232526'
                  : '#ffd700'};
              font-weight:${isHeader ? 700 : 600};
              font-size:1.1em;
              box-shadow:${isHeader
                ? '0 2px 16px rgba(255,215,0,0.10)'
                : isActive
                  ? '0 2px 16px rgba(255,215,0,0.18)'
                  : '0 2px 12px rgba(0,0,0,0.18)'};
              cursor:${isHeader ? 'default' : 'pointer'};
              opacity:${isHeader ? 1 : isActive ? 1 : 0.7};
              transition:all 0.25s cubic-bezier(.4,2,.6,1);
            "
          >${getCellContent(rowIdx, colIdx)}</button>
        </td>`;
      }
      html += '</tr>';
    }
    html += '</tbody></table>';
    return html;
  }

  function update() {
    const container = document.getElementById('page4Table');
    container.innerHTML = renderTable();
    Array.from(container.querySelectorAll('button')).forEach(btn => {
      const row = +btn.getAttribute('data-row');
      const col = +btn.getAttribute('data-col');
      if (row !== 0) {
        btn.onclick = () => {
          active = active.map((r, rIdx) =>
            r.map((cell, cIdx) =>
              rIdx === row && cIdx === col ? !cell : cell
            )
          );
          update();
        };
      }
    });

    // Check for solution
    const idxKotGru = shuffledSuspects.indexOf('Kot Gru') + 1;
    const idxPaciorek = shuffledItems.indexOf('Paciorek bursztynów') + 1;
    const idxOsada = shuffledPlaces.indexOf('Osada z epoki kamienia') + 1;
    const onlyThreeActive =
      active.flat().filter(Boolean).length === 3 &&
      active[idxKotGru]?.[0] &&
      active[idxPaciorek]?.[1] &&
      active[idxOsada]?.[2];

    const who = shuffledSuspects[idxKotGru - 1];
    const what = shuffledItems[idxPaciorek - 1];
    const where = shuffledPlaces[idxOsada - 1];

    const nextDiv = document.getElementById('page4Next');
    nextDiv.innerHTML = '';
    if (onlyThreeActive) {
      const btn = document.createElement('button');
      btn.textContent = 'Dalej';
      btn.style = 'font-size:1.1em;padding:10px 32px;background:#232526;color:#ffd700;border:2px solid #ffd700;border-radius:8px;cursor:pointer;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,0.18)';
      btn.onclick = () => {
        solution = { who, what, where };
        page = 5;
        render();
      };
      nextDiv.appendChild(btn);
    }
  }

  const div = document.createElement('div');
  div.style.textAlign = 'center';
  div.style.marginTop = '40px';
  div.innerHTML = `
    <h2>Wybierz, kogo/co/gdzie wykluczasz</h2>
    <div id="page4Table"></div>
    <div id="page4Next" style="margin-top:32px;"></div>
  `;
  root.appendChild(div);
  update();
}

// Page 5
function renderPage5() {
  const root = clearRoot();
  const awardUrl = 'assets/png/award.png';
  const div = document.createElement('div');
  div.className = 'Page5';
  div.style.maxWidth = '540px';
  div.style.margin = '56px auto 0 auto';
  div.style.background = 'rgba(18, 20, 26, 0.88)';
  div.style.borderRadius = '20px';
  div.style.boxShadow = '0 6px 32px 0 rgba(0,0,0,0.45)';
  div.style.padding = '38px 24px 34px 24px';
  div.style.border = '1.5px solid #23242b';
  div.style.textAlign = 'center';
  div.innerHTML = `
    <h2>Podsumowanie śledztwa</h2>
    <div style="margin:24px auto 0 auto;background:rgba(255,255,255,0.85);border-radius:8px;padding:16px 20px;color:#b26a00;font-weight:600;font-size:1.15em;max-width:400px;">
      Twój pseudonim detektywa:<br>
      <span style="color:#ffb300;font-size:1.25em;">${detectiveName}</span>
    </div>
    <div style="margin:18px auto 0 auto;background:rgba(255,255,255,0.85);border-radius:8px;padding:12px 18px;color:#444;font-size:1em;max-width:400px;">
      ${detectiveDesc}
    </div>
    <div style="margin:32px auto 0 auto;background:rgba(40,32,16,0.93);border-radius:8px;padding:18px 18px;color:#ffb300;font-weight:600;font-size:1.13em;max-width:420px;box-shadow:0 2px 8px rgba(0,0,0,0.18);">
      <div>Kto? <span style="color:#ffe082;">${solution.who}</span></div>
      <div>Co? <span style="color:#ffe082;">${solution.what}</span></div>
      <div>Gdzie? <span style="color:#ffe082;">${solution.where}</span></div>
    </div>
    <div style="margin:36px auto 0 auto;">
      <img src="${awardUrl}" alt="Nagroda detektywa" style="width:180px;max-width:90vw;border-radius:12px;box-shadow:0 2px 18px 0 rgba(0,0,0,0.32);margin-bottom:18px;">
      <div>
        <a href="${awardUrl}" download="award.png" style="display:inline-block;margin-top:10px;background:linear-gradient(90deg,#23242b 0%,#ffd700 100%);color:#23242b;border:none;border-radius:10px;padding:13px 38px;font-size:1.08em;font-weight:600;letter-spacing:0.5px;text-decoration:none;box-shadow:0 2px 10px rgba(0,0,0,0.22);transition:background 0.18s,color 0.18s,box-shadow 0.18s;">Pobierz nagrodę</a>
      </div>
    </div>
    <div style="margin-top:32px;">
      <button id="finishBtn" style="font-size:1.1em;padding:10px 32px;">Zakończ</button>
    </div>
  `;
  root.appendChild(div);
  document.getElementById('finishBtn').onclick = () => {
    page = 1;
    render();
  };
}

// Main render function
function render() {
  if (page === 1) renderPage1();
  else if (page === 2) renderPage2();
  else if (page === 3) renderPage3();
  else if (page === 4) renderPage4();
  else if (page === 5) renderPage5();
}

// Start app
window.addEventListener('DOMContentLoaded', render);
