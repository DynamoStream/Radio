document.addEventListener("DOMContentLoaded", function() {
  const sportsWidget = document.getElementById("sports-widget");
  sportsWidget.innerHTML = `
    <div class="news-item">
      <h3>⚽ Argentina gana la Copa América 2024</h3>
      <p>La selección liderada por Messi consigue su tercer título consecutivo.</p>
    </div>
    <div class="news-item">
      <h3>🏀 NBA: Denver Nuggets campeones</h3>
      <p>Nikola Jokić es elegido MVP de las finales.</p>
    </div>
  `;
});