const translations = {
    en: {
        'nav.home': 'HOME',
        'nav.skills': 'KNOWLEDGE',
        'nav.contact': 'MESSAGE',
        'hero.title': 'Okean is Back',
        'hero.subtitle': 'Silence is the loudest sound.',
        'skills.title': 'Technical Arts'
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.skills': '知識',
        'nav.contact': 'メッセージ',
        'hero.title': 'オケアノスが戻ってきた',
        'hero.subtitle': '沈黙は最大の音である。',
        'skills.title': '技術芸術'
    }
};

let currentLang = 'en';

// Loading fade out
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1500);
});

// Language Switcher
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.style.opacity = 0;
        setTimeout(() => {
            el.innerText = translations[currentLang][key];
            el.style.opacity = 1;
        }, 200);
    });
});

// Minimal smooth transition
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
