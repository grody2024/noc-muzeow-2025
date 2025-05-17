function renderPage0() {
  const root = clearRoot();

  const container = document.createElement('div');
  container.className = "page0";
  container.style.height = '100vh';
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';

  const stripe = document.createElement('div');
  stripe.className = 'page0-stripe';

  const title = document.createElement('div');
  title.className = 'page0-title';
  title.textContent = 'EKSPONAT W KONSERWACJI';

  const big = document.createElement('div');
  big.className = 'page0-big';
  big.textContent = 'Gra terenowa';

  const medium = document.createElement('div');
  medium.className = 'page0-medium';
  medium.textContent = 'Grodzisko Sopot';

  const small = document.createElement('div');
  small.className = 'page0-small';
  small.textContent = 'Noc Muzeów 2025';

  const buttonImg = document.createElement('img');
  buttonImg.className = 'page0-button';
  buttonImg.src = 'assets/png/zagraj.png';
  buttonImg.onclick = goToNextPage;

  stripe.appendChild(title);
  stripe.appendChild(big);
  stripe.appendChild(medium);
  stripe.appendChild(small);
  stripe.append(buttonImg);

  container.appendChild(stripe);
  root.appendChild(container);
}