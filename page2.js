function renderPage2(){
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
  <button class="page2BottomNext">Dalej</button>
`;

  // Append both to bottom div
  page2BottomDiv.appendChild(page2BottomDivText);
  page2BottomDiv.appendChild(page2BottomDivFolderDiv);

  container.appendChild(page2TopDiv);
  container.appendChild(page2BottomDiv);

  // Append container to body
  document.body.appendChild(container);
}