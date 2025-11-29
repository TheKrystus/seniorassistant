import './style.css'
import viteLogo from '/vite.svg'
import { initTheme } from './theme.js'
import { createIcons, Sun, Moon } from 'lucide'

document.querySelector('#app').innerHTML = `
  <nav>
    <div class="nav-left">
      <img src="${viteLogo}" class="nav-logo" alt="Logo" />
      <span class="nav-title">Senior Assistant</span>
    </div>
    <div class="nav-links">
      <a href="#description">Opis</a>
      <a href="#features">Funkcje</a>
      <a href="#contact">Kontakt</a>
      <button id="theme-toggle" class="theme-btn" aria-label="Przełącz motyw">
        <i data-lucide="sun" class="theme-icon-light"></i>
        <i data-lucide="moon" class="theme-icon-dark"></i>
      </button>
    </div>
  </nav>

  <main>
    <section id="description" class="hero-section">
      <div class="hero-content">
        <h1>Twój Osobisty Asystent Cyfrowy</h1>
        <p>Senior Assistant to intuicyjna aplikacja zaprojektowana specjalnie dla Ciebie. Łączymy nowoczesną technologię z prostotą obsługi, abyś mógł cieszyć się cyfrowym światem bez barier.</p>
        <div class="hero-actions">
          <a href="#features" class="btn-primary">Rozpocznij</a>
          <a href="#contact" class="btn-secondary">Dowiedz się więcej</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="/imgs/senior_1.png" alt="Senior korzystający z aplikacji na tablecie" />
      </div>
    </section>

    <section id="features">
      <h1>Funkcje</h1>
      <p>Odkryj możliwości naszej aplikacji. Zaprojektowana z myślą o seniorach, oferuje intuicyjny interfejs i pomocne narzędzia.</p>
    </section>

    <section id="contact">
      <h1>Kontakt</h1>
      <p>Masz pytania? Skontaktuj się z nami. Jesteśmy tutaj, aby Ci pomóc.</p>
    </section>
  </main>
`

// Initialize modules
initTheme()
createIcons({
  icons: {
    Sun,
    Moon
  }
})



