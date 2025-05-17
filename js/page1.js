// function renderPage1() {
//   const root = clearRoot();
//   const div = document.createElement('div');
//   div.className = 'Page1';
//   div.style.textAlign = 'center';
//   div.style.marginTop = '40px';
//   div.innerHTML = `
//     <h1>EKSPONAT W KONSERWACJI Gra terenowa Noc Muzeów 2025 Grodzisko Sopot</h1>
//     <p>
//       Jak grać?<br>
//       Zapoznaj się z aktem sprawy. Dowiedz się, co (prawdopodobnie) zniknęło i dlaczego wszyscy udają, że nic się nie stało.<br>
//       Wylosuj swój pseudonim detektywa. To Twoja tajna tożsamość operacyjna. Zapisze się w historii Grodziska.<br>
//       Obejrzyj materiał z monitoringu. Może coś (albo ktoś) rzuci Ci się w oczy…<br>
//       Odwiedź 6 punktów oznaczonych lupą. Każdy punkt to część układanki – zdobądź hasło i wróć do aplikacji.<br>
//       Wpisz hasło z każdego miejsca. Aplikacja sama wykreśli jedną błędną opcję: kto, co lub gdzie.<br>
//       Rozwiąż sprawę. Gdy zostanie Ci po jednej odpowiedzi w każdej kolumnie – kliknij „Rozwiąż sprawę” i poznaj prawdę.
//     </p>
//     <button id="startBtn" style="font-size:1.2em;padding:10px 30px;" onclick="goToNextPage()">Zaczynajmy!</button>
//   `;
//   root.appendChild(div);
// }

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

  root.appendChild(page1TopDiv);
  root.appendChild(stripe);
  root.appendChild(button);
}