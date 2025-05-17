// Page 5
function renderPage5() {
  const root = clearRoot();

  // Set root to flex column for vertical alignment
  root.style.display = 'flex';
  root.style.flexDirection = 'column';

  const header = document.createElement('div');
  header.className = 'page5header';
  header.innerHTML = `<h2>ROZWIĄZANIE ŚLEDZTWA</h2>`;

  const content = document.createElement('div');
  content.className = "page5content";

  // Add detective info and description
  content.innerHTML = `
    <div class="page5-note">
      <label><b>ŚLEDZTWO PROWADZIŁ:</b></label><br>
      <label><b>${detectiveName}</b></label><br>
      <label><b>OPIS DETEKTYWA:</b></label><br>
      <label><b>${detectiveDesc}</b></label><br>
      <label><b>OPIS ZDARZENIA:</b></label><br>
      <div class="page5-desc">
        Gratulacje, sprawa rozwiązana! Choć prawda... trochę wymknęła się podręcznikom śledczym.<br><br>
        Otóż: rano kot Gru odbywał swoją rutynową przechadzkę po sali wystawowej. Wskoczył na gablotę, przeciągnął się z godnością i pazurem... przypadkiem otworzył szybę.<br>
        W środku – błyszczący bursztynowy paciorek. Czyli idealna, legalnie zdobyta kulka.<br>
        Gru zrobił to, co zrobiłby każdy szanujący się kot: poturlał paciorek po podłodze, zeskoczył, a ogonem – oczywiście przypadkiem – zatrzasnął szybę z powrotem.<br>
        Nikt niczego nie zauważył.<br>
        Kustoszka dla spokoju zawiesiła kartkę „Eksponat w konserwacji”.<br>
        A Gru? Poszedł z paciorkiem... do epoki kamienia. Spać.<br>
        A Gąska?<br>
        Wyszedł po paczkę. Wrócił, spojrzał na Ciebie i mruknął:<br>
        „No i dobrze. Znowu Gru.”<br>
        Sprawa zamknięta.<br>
        Kot – bez zarzutów.<br>
        Paciorek – cały.<br>
        Ty – bohater.
      </div>
    </div>
  `;

  // Badge and download button container
  const badgeContainer = document.createElement('div');
  badgeContainer.className = "badgeContainer";
  badgeContainer.style.display = 'flex';
  badgeContainer.style.flexDirection = 'column';
  badgeContainer.style.alignItems = 'center';
  badgeContainer.style.margin = '32px 0 0 0';

  // Badge image
  const badgeImg = document.createElement('img');
  badgeImg.src = 'assets/png/odznaka.png';
  badgeImg.alt = 'Detektyw Odznaka';
  badgeImg.style.width = '120px';
  badgeImg.style.height = '120px';
  badgeImg.style.borderRadius = '16px';
  badgeImg.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
  badgeImg.style.marginBottom = '12px';

  // Download button
  const downloadBtn = document.createElement('a');
  downloadBtn.href = 'assets/png/odznaka.png';
  downloadBtn.download = 'odznaka.png';
  downloadBtn.className = 'page5-badge-download';
  downloadBtn.innerText = 'Pobierz nagrodę';

  badgeContainer.appendChild(badgeImg);
  badgeContainer.appendChild(downloadBtn);

  // Sticky note with solution
  const stickyNote = document.createElement('div');
  stickyNote.className = 'page5-sticky-note';
  stickyNote.innerHTML = `
    <div class="page5-sticky-content">
      <b>Kto zawinił:</b><br>Kot Gru<br>
      <b>Co:</b><br> Paciorek Bursztynowy<br>
      <b>Gdzie:</b><br> Osada z epoki kamienia
    </div>
  `;

  // Horizontal container for badge and sticky note
  const rowContainer = document.createElement('div');
  rowContainer.className = 'page5-row-container';

  rowContainer.appendChild(badgeContainer);
  rowContainer.appendChild(stickyNote);

  content.appendChild(rowContainer);

  root.appendChild(header);
  root.appendChild(content);
}
