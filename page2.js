function renderPage2() {
  const root = clearRoot();
  const container = document.createElement('div');
  container.style.height = '100vh';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';

  const page2TopDiv = document.createElement('div');
  page2TopDiv.className = 'page2TopDiv';
  page2TopDiv.innerHTML = `
    <h2>AKTA SPRAWY</h2>
  `;

  const page2BottomDiv = document.createElement('div');
  page2BottomDiv.className = 'page2BottomDiv';
  page2BottomDiv.style.flex = '1 1 90%';

  const page2BottomDivText = document.createElement('div');
  page2BottomDivText.className = 'page2BottomDivText';
  page2BottomDivText.textContent = 'Dzień przed Nocą Muzeów wszystko było dopięte na ostatni guzik. Inwentaryzacja przebiegła bez zarzutu – każdy eksponat sprawdzony, podpisany, zamknięty. Dokumenty się zgadzały. Nawet kot Gru zachowywał się podejrzanie spokojnie.\n\nAle rano… coś się nie zgadzało.W dokumentacji brakowało jednego eksponatu. Wszyscy byli przekonani, że dzień wcześniej jeszcze był. W gablocie – pusto. Żadnych śladów włamania. Tylko to uczucie, że coś zniknęło. Kustoszka, chcąc uspokoić sytuację i uniknąć niepotrzebnych pytań, zrobiła to, co zawsze działa:\nzawiesiła kartkę „Eksponat w konserwacji.”\n\nWezwano Detektywa Gąskę. Pojawił się, przejrzał teren, zapisał coś, zamknął się w magazynku… i zniknął. Została tylko jego walizka, nieczytelne notatki i kilka kart wykluczeń, które bardziej komplikowały niż pomagały.\n\nTeraz sprawa trafia do Ciebie.\nZbierz tropy, przeprowadź śledztwo i dowiedz się: kto zawinił, gdzie coś ukryto i… co tak naprawdę zniknęło.';

  const page2BottomDivFolderDiv = document.createElement('div');
  page2BottomDivFolderDiv.className = 'page2BottomDivFolderDiv';
  page2BottomDivFolderDiv.innerHTML = `
  <span class="page2BottomDesc">WYLOSUJ SWÓJ PSEUDONIM DETEKTYWA</span>
  <div class="randNameDiceWrap">
    <span class="page2BottomRand" id="randName"></span>
    <img src="assets/png/kosc.png" alt="Dice icon" class="dice-img" onclick="rollDetectiveName()" />
  </div>
  <div>
  <span class="page2BottomRand" id="randDesc"></span>
  </div>
  <button class="page2BottomNext" onclick="nextIfNameSet()">Dalej</button>
`;

  page2BottomDiv.appendChild(page2BottomDivText);
  page2BottomDiv.appendChild(page2BottomDivFolderDiv);

  container.appendChild(page2TopDiv);
  container.appendChild(page2BottomDiv);

  root.appendChild(container);
}

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

function rollDetectiveName() {
  charGenIndex = Math.floor(Math.random() * names.length);
  detectiveName = names[charGenIndex];
  detectiveDesc = descriptions[charGenIndex];
  document.getElementById("randName").innerText = detectiveName;
  document.getElementById("randDesc").innerText = detectiveDesc;
}

function nextIfNameSet() {
  const randName = document.getElementById('randName');

  if (randName && randName.textContent !== '') {
    goToNextPage()
  }
  else{
    rollDetectiveName()
  }
}