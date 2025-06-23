// API de Noticias Deportivas (NewsAPI)
async function loadSportsNews() {
  const API_KEY = "TU_API_KEY"; // Regístrate en https://newsapi.org/
  const response = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&language=es&apiKey=${API_KEY}`);
  const data = await response.json();
  const widget = document.getElementById("sports-widget");
  
  if (data.articles) {
    widget.innerHTML = data.articles.slice(0, 3).map(article => `
      <div class="news-item">
        <h3>${article.title}</h3>
        <p>${article.description || ""}</p>
        <a href="${article.url}" target="_blank">Leer más</a>
      </div>
    `).join("");
  }
}

// Cargar noticias al iniciar
window.onload = loadSportsNews;