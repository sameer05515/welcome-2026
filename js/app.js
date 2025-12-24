const resolutionsData = {
    en: {
        title: "🌟 New Year 2026: Inspirational Resolutions 🌟",
        items: [
            "Learn something new every day and upgrade your skills",
            "Prioritize health – regular exercise and a disciplined routine",
            "Respect time and reduce laziness/procrastination",
            "Make time for family, friends, and relationships",
            "Maintain a positive mindset and a spirit of gratitude",
            "Financial discipline – save, invest and control expenses",
            "Focus on consistency and excellence at work",
            "Have the courage to embrace new opportunities",
            "Prioritize self-care, mental peace, and happiness",
            "Try to become a better version of yourself every day"
        ]
    },
    hi: {
        title: "🌟 नया साल 2026: प्रेरणादायक संकल्प 🌟",
        items: [
            "हर दिन कुछ नया सीखना और स्किल्स को अपग्रेड करना",
            "स्वास्थ्य को प्राथमिकता देना – नियमित व्यायाम और अनुशासित दिनचर्या",
            "समय का सम्मान करना और आलस्य/प्रक्रस्टिनेशन कम करना",
            "परिवार, दोस्तों और रिश्तों के लिए समय निकालना",
            "सकारात्मक सोच और आभार की भावना बनाए रखना",
            "वित्तीय अनुशासन – बचत, निवेश और खर्चों पर नियंत्रण",
            "काम में निरंतरता और उत्कृष्टता पर ध्यान देना",
            "नई अवसरों को अपनाने का साहस रखना",
            "स्वयं का देखभाल, मानसिक शांति और खुशियाँ प्राथमिकता देना",
            "हर दिन खुद का बेहतर संस्करण बनने की कोशिश करना"
        ]
    },
    ur: {
        title: "🌟 نیا سال 2026: حوصلہ افزا عزائم 🌟",
        items: [
            "ہر دن کچھ نیا سیکھیں اور اپنی صلاحیتوں میں اضافہ کریں",
            "صحت کو ترجیح دیں – باقاعدہ ورزش اور نظم و ضبط کی روٹین",
            "وقت کی قدر کریں اور سستی/ٹال مٹول کو کم کریں",
            "خاندان، دوستوں اور رشتوں کے لیے وقت نکالیں",
            "مثبت سوچ اور شکرگزاری کا جذبہ برقرار رکھیں",
            "مالی نظم و ضبط – بچت کریں، سرمایہ کاری کریں اور اخراجات پر کنٹرول رکھیں",
            "کام میں تسلسل اور عمدگی پر توجہ دیں",
            "نئے مواقع اپنانے کی ہمت رکھیں",
            "اپنی دیکھ بھال، ذہنی سکون اور خوشیوں کو ترجیح دیں",
            "ہر دن اپنے آپ کو بہتر بنانے کی کوشش کریں"
        ]
    },
    es: {
        title: "🌟 Año Nuevo 2026: Resoluciones Inspiradoras 🌟",
        items: [
            "Aprender algo nuevo cada día y mejorar tus habilidades",
            "Priorizar la salud – ejercicio regular y una rutina disciplinada",
            "Respetar el tiempo y reducir la pereza/la postergación",
            "Dedicar tiempo a la familia, amigos y relaciones",
            "Mantener una mentalidad positiva y un espíritu de gratitud",
            "Disciplina financiera – ahorrar, invertir y controlar los gastos",
            "Centrarse en la constancia y la excelencia en el trabajo",
            "Tener el valor de aceptar nuevas oportunidades",
            "Priorizar el cuidado personal, la paz mental y la felicidad",
            "Intentar ser una mejor versión de uno mismo cada día"
        ]
    },
    de: {
        title: "🌟 Neujahr 2026: Inspirierende Vorsätze 🌟",
        items: [
            "Jeden Tag etwas Neues lernen und Fähigkeiten verbessern",
            "Gesundheit priorisieren – regelmäßige Bewegung und disziplinierte Routine",
            "Zeit respektieren und Faulheit/Aufschieben reduzieren",
            "Zeit für Familie, Freunde und Beziehungen nehmen",
            "Positive Einstellung und Dankbarkeit bewahren",
            "Finanzielle Disziplin – sparen, investieren und Ausgaben kontrollieren",
            "Auf Beständigkeit und Exzellenz bei der Arbeit achten",
            "Mut haben, neue Chancen zu ergreifen",
            "Selbstfürsorge, inneren Frieden und Glück an erste Stelle setzen",
            "Jeden Tag versuchen, eine bessere Version von sich selbst zu werden"
        ]
    },
    ru: {
        title: "🌟 Новый год 2026: Вдохновляющие решения 🌟",
        items: [
            "Каждый день учиться новому и совершенствовать свои навыки",
            "Ставить здоровье в приоритет – регулярные упражнения и режим",
            "Ценить время и уменьшать лень/прокрастинацию",
            "Уделять время семье, друзьям и отношениям",
            "Сохранять позитивное мышление и благодарность",
            "Финансовая дисциплина – сберегать, инвестировать и контролировать расходы",
            "Следить за постоянством и качеством в работе",
            "Не бояться новых возможностей",
            "Заботиться о себе, душевном спокойствии и счастье",
            "Каждый день стараться становиться лучше"
        ]
    }
};

// Language codes and display names
const languageOptions = [
    {code:'en', label:'English'},
    {code:'hi', label:'हिन्दी'},
    {code:'ur', label:'اردو'},
    {code:'es', label:'Español'},
    {code:'de', label:'Deutsch'},
    {code:'ru', label:'Русский'}
];

// Theme: save and load
function getPreferredTheme() {
    // Priority: localStorage > system > default "light"
    let t = localStorage.getItem('theme');
    if (t === 'dark' || t === 'light') return t;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}
function setBodyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
    // Update the theme toggle button icon/text
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        if (theme === 'dark') {
            btn.innerHTML = '<span aria-hidden="true" title="Switch to light mode">🌙</span> Dark';
        } else {
            btn.innerHTML = '<span aria-hidden="true" title="Switch to dark mode">☀️</span> Light';
        }
        btn.setAttribute('aria-pressed', theme === 'dark');
    }
}
function toggleTheme() {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    setBodyTheme(newTheme);
}

// Detect browser language if supported
function getDefaultLanguage() {
    const navLang = navigator.language || navigator.userLanguage || '';
    for (const opt of languageOptions) {
        if (navLang.startsWith(opt.code)) return opt.code;
    }
    return 'en';
}
let currentLang = localStorage.getItem('resolutionLang') || getDefaultLanguage();

function renderResolutions(lang) {
    currentLang = lang;
    localStorage.setItem('resolutionLang', lang);
    document.documentElement.lang = lang;
    const data = resolutionsData[lang] || resolutionsData['en'];

    document.getElementById('resolution-title').innerText = data.title;

    const ul = document.getElementById('resolution-list');
    ul.innerHTML = '';
    for (let i = 0; i < 10; ++i) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'icon';
        span.innerText = (i === 9) ? '🔟' : `${i+1}️⃣`;
        li.appendChild(span);
        li.appendChild(document.createTextNode(data.items[i]));
        ul.appendChild(li);
    }

    // Active button highlight
    document.querySelectorAll('.lang-switcher button').forEach(btn=>{
        btn.classList.toggle('active', btn.dataset.lang===lang);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeContainer = document.getElementById('theme-toggle');
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.type = 'button';
    themeBtn.id = 'theme-toggle-btn';
    themeBtn.setAttribute('aria-label', 'Toggle dark/light mode');
    themeBtn.onclick = toggleTheme;
    themeContainer.appendChild(themeBtn);
    setBodyTheme(getPreferredTheme());

    // Language Switcher
    const switcher = document.getElementById('lang-switcher');
    languageOptions.forEach(opt=>{
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = opt.label;
        btn.dataset.lang = opt.code;
        btn.className = currentLang===opt.code ? 'active' : '';
        btn.onclick = ()=>renderResolutions(opt.code);
        switcher.appendChild(btn);
    });
    renderResolutions(currentLang);
});

