// Cargar datos deportivos (ejemplo con NewsAPI)
async function loadSportsNews() {
    const API_KEY = "TU_API_KEY"; // Regístrate en https://newsapi.org/
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=sports&language=es&apiKey=${API_KEY}`);
    const data = await response.json();
    const widget = document.getElementById("sports-widget");
    
    if (data.articles) {
        widget.innerHTML = data.articles.slice(0, 5).map(article => `
            <div class="news-item">
                <h3>${article.title}</h3>
                <p>${article.description || ""}</p>
                <a href="${article.url}" target="_blank">Leer más</a>
            </div>
        `).join("");
    }
}

// Búsqueda web (ejemplo con Google Custom Search)
document.getElementById("search-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = document.getElementById("search-input").value;
    const resultsDiv = document.getElementById("search-results");
    resultsDiv.innerHTML = `<p>Buscando "${query}"...</p>`;
    
    // Usar la API de búsqueda de Google o Algolia
    // Ejemplo ficticio:
    setTimeout(() => {
        resultsDiv.innerHTML = `
            <div class="result">
                <h3>Resultados para "${query}"</h3>
                <p>Integra una API como <a href="https://developers.google.com/custom-search" target="_blank">Google CSE</a>.</p>
            </div>
        `;
    }, 1000);
});

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    loadSportsNews();
});