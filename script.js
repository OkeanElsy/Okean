// Translations
const translations = {
    en: {
        'nav.home': 'TERMINAL',
        'nav.skills': 'MODULES',
        'nav.contact': 'ENCRYPTED_LINK',
        'hero.title': 'OKEAN IS BACK',
        'hero.subtitle': 'RE-ESTABLISHING CONNECTION TO THE VOID',
        'skills.title': 'LOADED_MODULES'
    },
    ja: {
        'nav.home': 'ターミナル',
        'nav.skills': 'モジュール',
        'nav.contact': '暗号化リンク',
        'hero.title': 'オケアノスが戻ってきた',
        'hero.subtitle': 'ボイドへの接続を再確立する',
        'skills.title': 'ロードされたモジュール'
    }
};

let currentLang = 'en';

// Loading Screen Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const bar = document.getElementById('loaderBar');
    const percent = document.getElementById('percent');
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 500);
            }, 500);
        } else {
            width += Math.floor(Math.random() * 15);
            if (width > 100) width = 100;
            bar.style.width = width + '%';
            percent.innerText = width;
        }
    }, 150);
});

// Matrix Background Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "0101010101010101ABCDEFHIJKLMNOPQRSTUVWXYZ日本語オケアノス";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff41";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

// Language Toggle
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = translations[currentLang][key];
        if (el.hasAttribute('data-text')) {
            el.setAttribute('data-text', translations[currentLang][key]);
        }
    });
});
