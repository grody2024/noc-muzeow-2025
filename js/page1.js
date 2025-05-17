function renderPage1() {
  const root = clearRoot();

  const page1TopDiv = document.createElement('div');
  page1TopDiv.className = 'page1TopDiv';

  const page1h2 = document.createElement('h2');
  page1h2.className = 'page1-h2';
  page1h2.textContent = 'INSTRUKCJA:';
  page1TopDiv.appendChild(page1h2);

  // Stripe (like on page0)
  const stripe = document.createElement('div');
  stripe.className = 'page1-stripe';
  stripe.innerHTML = `
    <ul>
      <li>Zapoznaj się z aktami sprawy</li>
      Przeczytaj dokumenty, by poznać okoliczności zdarzenia.
      <li>Wylosuj swój pseudonim detektywa</li>
      To Twoja tajna tożsamość operacyjna – zapisze się w historii Grodziska.
      <li>Obejrzyj materiał z monitoringu</li>
      Może coś (albo ktoś) rzuci Ci się w oczy…
      <li>Odwiedź 6 punktów oznaczonych lupą</li>
      Na każdym punkcie otrzymasz wskazówkę dotyczącą jednej postaci, miejsca i przedmiotu. Przeanalizuj ją i zdecyduj, czy dana postać, miejsce lub przedmiot jest powiązany ze sprawą. Jeśli uznasz, że nie ma nic wspólnego ze zdarzeniem, kliknij go na planszy, aby usunąć go z kręgu podejrzanych.
      <li>Rozwiąż sprawę</li>
      Gdy w tabeli pozostanie po jednej opcji w każdej z trzech kolumn (postać, miejsce, przedmiot), kliknij „Rozwiąż sprawę” i odkryj prawdę.
    </ul>
    <button class="page1BottomNext" onclick="goToNextPage()">Zaczynamy!</button>
  `;
  page1TopDiv.appendChild(stripe);

  root.appendChild(page1TopDiv);
  root.appendChild(button);
}