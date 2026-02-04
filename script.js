// ==========================================
// Translations - 4 Languages
// ==========================================
const translations = {
    en: {
        'nav.home': 'Home', 'nav.skills': 'Skills', 'nav.about': 'About', 'nav.contact': 'Contact',
        'hero.badge': 'Okean Portfolio', 'hero.greeting': "I'm", 'hero.subtitle': 'Developer & Creator',
        'hero.contact': 'Contact Me', 'hero.explore': 'Explore Skills', 'hero.scroll': 'Scroll Down',
        'skills.title': 'My Skills', 'skills.subtitle': 'Technologies I\'m learning and working with',
        'skills.python': 'Learning Python for automation and AI',
        'skills.javascript': 'Building interactive web experiences',
        'skills.html': 'Crafting beautiful user interfaces',
        'skills.git': 'Version control and collaboration',
        'about.title': 'About Me',
        'about.description': 'I\'m a passionate developer who loves creating beautiful and functional web experiences. Currently focused on learning Python, JavaScript, and modern web technologies.',
        'about.projects': 'Projects', 'about.years': 'Years Learning', 'about.passion': 'Passion',
        'contact.title': 'Contact Me', 'contact.subtitle': 'Let\'s learning together', 'contact.email': 'Email',
        'footer.rights': 'All rights reserved.'
    },
    ru: {
        'nav.home': 'Главная', 'nav.skills': 'Навыки', 'nav.about': 'Обо мне', 'nav.contact': 'Контакт',
        'hero.badge': 'Портфолио Okean', 'hero.greeting': 'Я', 'hero.subtitle': 'Разработчик и Создатель',
        'hero.contact': 'Связаться', 'hero.explore': 'Мои навыки', 'hero.scroll': 'Прокрутите вниз',
        'skills.title': 'Мои навыки', 'skills.subtitle': 'Технологии, которые я изучаю',
        'skills.python': 'Изучаю Python для автоматизации и ИИ',
        'skills.javascript': 'Создаю интерактивные веб-приложения',
        'skills.html': 'Создаю красивые интерфейсы',
        'skills.git': 'Контроль версий и совместная работа',
        'about.title': 'Обо мне',
        'about.description': 'Я увлечённый разработчик, который любит создавать красивые веб-приложения. Сейчас изучаю Python, JavaScript и современные веб-технологии.',
        'about.projects': 'Проекты', 'about.years': 'Лет обучения', 'about.passion': 'Страсть',
        'contact.title': 'Связаться', 'contact.subtitle': 'Давайте работать вместе', 'contact.email': 'Почта',
        'footer.rights': 'Все права защищены.'
    },
    ko: {
        'nav.home': '홈', 'nav.skills': '기술', 'nav.about': '소개', 'nav.contact': '연락처',
        'hero.badge': 'Okean 포트폴리오', 'hero.greeting': '저는', 'hero.subtitle': '개발자 & 크리에이터',
        'hero.contact': '연락하기', 'hero.explore': '기술 보기', 'hero.scroll': '스크롤',
        'skills.title': '나의 기술', 'skills.subtitle': '배우고 있는 기술들',
        'skills.python': 'AI와 자동화를 위한 Python 학습',
        'skills.javascript': '인터랙티브 웹 경험 구축',
        'skills.html': '아름다운 UI 제작',
        'skills.git': '버전 관리 및 협업',
        'about.title': '소개',
        'about.description': '저는 아름답고 기능적인 웹 경험을 만드는 것을 좋아하는 개발자입니다. 현재 Python, JavaScript 및 현대 웹 기술을 배우고 있습니다.',
        'about.projects': '프로젝트', 'about.years': '학습 기간', 'about.passion': '열정',
        'contact.title': '연락처', 'contact.subtitle': '함께 일해요', 'contact.email': '이메일',
        'footer.rights': '모든 권리 보유.'
    },
    ja: {
        'nav.home': 'ホーム', 'nav.skills': 'スキル', 'nav.about': '私について', 'nav.contact': '連絡先',
        'hero.badge': 'Okean ポートフォリオ', 'hero.greeting': '私は', 'hero.subtitle': '開発者 & クリエイター',
        'hero.contact': '連絡する', 'hero.explore': 'スキルを見る', 'hero.scroll': 'スクロール',
        'skills.title': '私のスキル', 'skills.subtitle': '学んでいる技術',
        'skills.python': 'AIと自動化のためのPython学習',
        'skills.javascript': 'インタラクティブなウェブ体験の構築',
        'skills.html': '美しいUIの作成',
        'skills.git': 'バージョン管理とコラボレーション',
        'about.title': '私について',
        'about.description': '私は美しく機能的なウェブ体験を作ることが大好きな開発者です。現在Python、JavaScript、モダンなウェブ技術を学んでいます。',
        'about.projects': 'プロジェクト', 'about.years': '学習年数', 'about.passion': '情熱',
        'contact.title': '連絡先', 'contact.subtitle': '一緒に仕事しましょう', 'contact.email': 'メール',
        'footer.rights': '全著作権所有。'
    }
};

const langLabels = { en: 'EN', ru: 'RU', ko: 'KO', ja: 'JA' };
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.getElementById('currentLang').textContent = langLabels[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.getElementById('langDropdown').classList.remove('active');
}

// ==========================================
// Theme Toggle
// ==========================================
const themeToggle = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
});

// ==========================================
// Language Dropdown
// ==========================================
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
});

langDropdown.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

document.addEventListener('click', () => langDropdown.classList.remove('active'));

// ==========================================
// Typing Effect
// ==========================================
class TypeWriter {
    constructor(element, words, wait = 2000) {
        this.element = element;
        this.words = words;
        this.wait = wait;
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }
    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];
        this.txt = this.isDeleting
            ? fullTxt.substring(0, this.txt.length - 1)
            : fullTxt.substring(0, this.txt.length + 1);
        this.element.textContent = this.txt;
        let typeSpeed = this.isDeleting ? 50 : 100;
        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 300;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing
new TypeWriter(document.getElementById('nameTyping'), ['Øᴋᴇᴀн'], 3000);

const skillsWords = ['Learning Python...'];
new TypeWriter(document.getElementById('skillsTyping'), skillsWords, 3000);

// ==========================================
// Particle Animation (Google Antigravity Style)
// ==========================================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#3b82f6'][Math.floor(Math.random() * 5)];
        this.opacity = Math.random() * 0.5 + 0.2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.shape = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
            this.y = this.speedY > 0 ? -10 : canvas.height + 10;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        if (this.shape === 0) {
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.shape === 1) {
            ctx.fillRect(-this.size, -this.size, this.size * 2, this.size * 2);
        } else {
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, this.size);
            ctx.lineTo(-this.size, this.size);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();
    }
}

// Create particles
for (let i = 0; i < 80; i++) particles.push(new Particle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ==========================================
// Smooth Scroll
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ==========================================
// Initialize Language
// ==========================================
setLanguage(currentLang);

