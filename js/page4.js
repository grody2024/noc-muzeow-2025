// Page 4
function renderPage4() {
  const root = clearRoot();
  const ROWS = 7, COLS = 3;
  const headers = ['KTO ?', 'CO ?', 'GDZIE ?'];
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
    let html = '<table class="page4-table"><tbody>';
    for (let rowIdx = 0; rowIdx < ROWS; rowIdx++) {
      html += '<tr>';
      for (let colIdx = 0; colIdx < COLS; colIdx++) {
        const isHeader = rowIdx === 0;
        const isActive = active[rowIdx][colIdx];
        html += `<td>
          <button
            data-row="${rowIdx}" data-col="${colIdx}"
            ${isHeader ? 'disabled' : ''}
            class="page4-table-btn${isHeader ? ' page4-table-header' : isActive ? ' page4-table-active' : ' page4-table-inactive'}"
          >${getCellContent(rowIdx, colIdx)}</button>
        </td>`;
      }
      html += '</tr>';
    }
    html += '</tbody></table>';
    return html;
  }

  function update() {
    const tableContainer = document.getElementById('page4Table');
    tableContainer.innerHTML = renderTable();
    Array.from(tableContainer.querySelectorAll('button')).forEach(btn => {
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
      btn.textContent = 'Rozwiąż sprawę';
      btn.className = 'page4-next-btn';
      btn.onclick = () => {
        solution = { who, what, where };
        goToNextPage();
      };
      nextDiv.appendChild(btn);
    }
  }

  function openMapFullscreen() {
    const mapImg = document.getElementById('page4MapImg');
    if (mapImg.requestFullscreen) mapImg.requestFullscreen();
    else if (mapImg.webkitRequestFullscreen) mapImg.webkitRequestFullscreen();
    else if (mapImg.msRequestFullscreen) mapImg.msRequestFullscreen();
  }

  const div = document.createElement('div');
  div.className = 'page4-main';

  div.innerHTML = `
    <div class="page4-container">
      <div class="page4-title-wrap">
        <h2 class="page4-title">MIEJSCA I OSOBY PODEJRZANE</h2>
      </div>
      <div class="page4-content">
        <div class="page4-desc">
          Na każdym punkcie otrzymasz wskazówkę dotyczącą jednej postaci, miejsca i przedmiotu. Przeanalizuj ją i zdecyduj, czy dana postać, miejsce lub przedmiot jest powiązany ze sprawą. Jeśli uznasz, że nie ma nic wspólnego ze zdarzeniem, kliknij go z planszy, aby usunąć go z kręgu podejrzanych.<br><br>
          Gdy w tabeli pozostanie po jednej opcji w każdej z trzech kolumn (postać, miejsce, przedmiot), kliknij „Rozwiąż sprawę” i odkryj prawdę.
        </div>
        <div class="page4-map-wrap">
          <div class="page4-map-box">
            <img id="page4MapImg" src="/assets/png/mapa.png" alt="mapa" class="page4-map-img">
            <img src="/assets/png/lupa.png" alt="lupa" id="page4LupaBtn" class="page4-lupa-btn">
          </div>
        </div>
        <div id="page4Next" class="page4-next"></div>
        <div id="page4Table" class="page4-table-wrap"></div>
      </div>
    </div>
  `;
  root.appendChild(div);

  setTimeout(() => {
    const lupaBtn = document.getElementById('page4LupaBtn');
    if (lupaBtn) lupaBtn.onclick = openMapFullscreen;
  }, 0);

  update();
}
