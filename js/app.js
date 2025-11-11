async function loadPage(page) {
  try {
    const response = await fetch(`pages/${page}.html`);
    if (!response.ok) throw new Error("Сторінку не знайдено");
    const html = await response.text();
    document.getElementById('content').innerHTML = html;

    // 🟡 Ховаємо головний контент, коли завантажуємо тест
    if (page === 'test-list-1') {
      document.getElementById('home-section').style.display = 'none';
      document.getElementById('header').style.display = 'none';
    } else {
      document.getElementById('home-section').style.display = 'block';
    }

  } catch (error) {
    document.getElementById('content').innerHTML = `<p>Помилка: ${error.message}</p>`;
  }
}
