const translations = {
  en: {
    skipLink: "Skip to content", menuLabel: "Open navigation menu",
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      availability: "Available for new projects", eyebrow: "HELLO, I'M", greeting: "A developer",
      description: "I design and build reliable digital solutions—from Discord bots and FiveM systems to focused web experiences that are practical, polished, and made to last.",
      primary: "See my work <span aria-hidden=\"true\">↘</span>", secondary: "Start a project <span aria-hidden=\"true\">↗</span>",
      signoff: "Clear thinking. Strong execution. Useful results.", scroll: "Scroll to explore"
    },
    about: {
      title: "A little about me",
      p1: "I'm VREX, a developer focused on turning complex ideas into dependable digital products. I work across Discord automation, FiveM development, custom tools, and modern web experiences, with an emphasis on clarity, performance, and a thoughtful user experience.",
      p2: "I approach every project with curiosity and care: understanding the goal, choosing the right tools, and delivering a solution that is useful in the real world—not just impressive on the surface."
    },
    skills: { title: "Tools I like to work with", intro: "The languages behind the things I build." },
    projects: { title: "Selected projects", intro: "A collection of experiments, builds, and ideas in progress.", emptyTitle: "Projects coming soon", emptyText: "Real projects will be added here as they are ready to share." },
    contact: { title: "Have an idea?", description: "Tell me what you have in mind. The form opens a prefilled email draft addressed to VREX.", email: "Email" },
    form: { label: "Send a message", name: "Name", email: "Email", subject: "Subject", message: "Message", submit: "Open email draft <span aria-hidden=\"true\">↗</span>", required: "Please complete all required fields.", emailInvalid: "Please enter a valid email address.", opened: "Your email app should open with a draft addressed to VREX." },
    footer: { credit: "Designed and developed by VREX." },
    theme: { light: "Light", dark: "Dark", switchDark: "Switch to dark theme", switchLight: "Switch to light theme" }
  },
  ar: {
    skipLink: "انتقل إلى المحتوى", menuLabel: "فتح قائمة التنقل",
    nav: { home: "الرئيسية", about: "نبذة عني", skills: "المهارات", projects: "المشاريع", contact: "التواصل" },
    hero: {
      availability: "متاح للمشاريع الجديدة", eyebrow: "مرحباً، أنا", greeting: "مطور برمجيات",
      description: "أصمم وأطوّر حلولاً رقمية موثوقة، من بوتات ديسكورد وأنظمة فايف إم إلى تجارب ويب مرتبة وعملية صُممت لتقدم قيمة حقيقية.",
      primary: "شاهد أعمالي <span aria-hidden=\"true\">↘</span>", secondary: "ابدأ مشروعاً <span aria-hidden=\"true\">↗</span>",
      signoff: "تفكير واضح. تنفيذ قوي. نتائج مفيدة.", scroll: "مرر للاستكشاف"
    },
    about: {
      title: "نبذة عني",
      p1: "أنا VREX، مطور أركز على تحويل الأفكار المعقدة إلى منتجات رقمية موثوقة. أعمل على أتمتة ديسكورد، وتطوير أنظمة فايف إم، والأدوات المخصصة، وتجارب الويب الحديثة، مع اهتمام خاص بالوضوح والأداء وتجربة المستخدم.",
      p2: "أتعامل مع كل مشروع باهتمام وفضول: أفهم الهدف، وأختار الأدوات المناسبة، وأقدّم حلاً مفيداً في الواقع، وليس مجرد واجهة تبدو جيدة من الخارج."
    },
    skills: { title: "الأدوات التي أحب العمل بها", intro: "اللغات التي أبني بها مشاريعي." },
    projects: { title: "مشاريع مختارة", intro: "مجموعة من التجارب والمشاريع والأفكار قيد التطوير.", emptyTitle: "المشاريع قريباً", emptyText: "ستتم إضافة المشاريع الحقيقية هنا عند جاهزيتها للمشاركة." },
    contact: { title: "لديك فكرة؟", description: "أخبرني بما تفكر فيه. عند الإرسال سيفتح النموذج مسودة بريد موجهة إلى VREX.", email: "البريد الإلكتروني" },
    form: { label: "أرسل رسالة", name: "الاسم", email: "البريد الإلكتروني", subject: "الموضوع", message: "الرسالة", submit: "فتح مسودة البريد <span aria-hidden=\"true\">↗</span>", required: "يرجى إكمال جميع الحقول المطلوبة.", emailInvalid: "يرجى إدخال بريد إلكتروني صحيح.", opened: "يفترض أن يفتح تطبيق البريد لديك مسودة موجهة إلى VREX." },
    footer: { credit: "تصميم وتطوير VREX." },
    theme: { light: "فاتح", dark: "داكن", switchDark: "التبديل إلى الوضع الداكن", switchLight: "التبديل إلى الوضع الفاتح" }
  }
};

const skills = [
  { name: "Lua", icon: "assets/lua.svg", en: "Scripting and custom gameplay systems.", ar: "كتابة السكربتات وأنظمة اللعب المخصصة." },
  { name: "HTML", icon: "assets/html5.svg", en: "Building the structure of web pages.", ar: "إنشاء هيكل صفحات الويب." },
  { name: "CSS", icon: "assets/css3.svg", en: "Styling and designing web interfaces.", ar: "تنسيق وتصميم واجهات المواقع." },
  { name: "JavaScript", icon: "assets/javascript.svg", en: "Interactive web experiences and application logic.", ar: "إضافة التفاعل إلى المواقع وبرمجة وظائف التطبيقات." },
  { name: "Python", icon: "assets/python.svg", en: "Automation, scripting, and application development.", ar: "الأتمتة وكتابة السكربتات وتطوير التطبيقات." }
];

const projects = [];
let currentLanguage = localStorage.getItem("vrex-language") || "en";
let darkMode = localStorage.getItem("vrex-theme") === "dark";

function getText(path) { return path.split(".").reduce((value, key) => value?.[key], translations[currentLanguage]); }

function renderSkills() {
  document.querySelector("#skills-grid").innerHTML = skills.map((skill) => `
    <article class="skill-card"><div class="skill-icon"><img src="${skill.icon}" alt="${skill.name} logo" loading="lazy" /></div><h3>${skill.name}</h3><p>${currentLanguage === "ar" ? skill.ar : skill.en}</p></article>
  `).join("");
}

function renderProjects() {
  const grid = document.querySelector("#projects-grid");
  if (!projects.length) { grid.innerHTML = `<div class="empty-projects"><strong>${getText("projects.emptyTitle")}</strong><span>${getText("projects.emptyText")}</span></div>`; return; }
  grid.innerHTML = projects.map((project, index) => `<article class="project-card"><div><span class="project-index">0${index + 1}</span><h3>${project.title}</h3><p>${currentLanguage === "ar" ? project.descriptionAr : project.description}</p></div><span class="project-tag">${project.technology}</span></article>`).join("");
}

function applyLanguage() {
  const isArabic = currentLanguage === "ar";
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.dir = document.documentElement.dir;
  document.querySelectorAll("[data-i18n]").forEach((element) => { const text = getText(element.dataset.i18n); if (text !== undefined) element.innerHTML = text; });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => element.setAttribute("aria-label", getText(element.dataset.i18nAriaLabel)));
  const langButton = document.querySelector("[data-lang-toggle]");
  langButton.textContent = isArabic ? "EN" : "AR";
  langButton.setAttribute("aria-label", isArabic ? "Switch to English" : "التبديل إلى العربية");
  document.querySelector("#site-nav").setAttribute("aria-label", isArabic ? "التنقل الرئيسي" : "Primary navigation");
  document.querySelector("[data-theme-toggle]").setAttribute("aria-label", getText(darkMode ? "theme.switchLight" : "theme.switchDark"));
  document.querySelector("[data-theme-label]").textContent = getText(darkMode ? "theme.dark" : "theme.light");
  renderSkills(); renderProjects();
}

function applyTheme() {
  document.body.classList.toggle("dark", darkMode);
  document.querySelector(".theme-icon").textContent = darkMode ? "☾" : "☼";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", darkMode ? "#1d1915" : "#f7f1e7");
  applyLanguage();
}

function setupForm() {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); status.className = "form-status"; status.textContent = "";
    form.querySelectorAll(".invalid").forEach((field) => field.classList.remove("invalid"));
    const required = [...form.querySelectorAll("[required]")]; let valid = true;
    required.forEach((input) => { if (!input.value.trim()) { input.closest(".form-field").classList.add("invalid"); valid = false; } });
    const email = form.querySelector("[type=email]");
    if (email.value && !/^\S+@\S+\.\S+$/.test(email.value)) { email.closest(".form-field").classList.add("invalid"); status.textContent = getText("form.emailInvalid"); valid = false; }
    if (!valid && !status.textContent) status.textContent = getText("form.required");
    if (valid) {
      const subject = encodeURIComponent(form.querySelector("[name=subject]").value);
      const body = encodeURIComponent(`Name: ${form.querySelector("[name=name]").value}\nEmail: ${email.value}\n\n${form.querySelector("[name=message]").value}`);
      window.location.href = `mailto:vrexdev9@gmail.com?subject=${subject}&body=${body}`;
      status.textContent = getText("form.opened"); status.classList.add("success");
    }
  });
}

function setupNavigation() {
  const menu = document.querySelector("#site-nav"); const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => { const open = menu.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
  document.querySelectorAll(".site-nav a").forEach((link) => link.addEventListener("click", () => { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }));
  const sections = [...document.querySelectorAll("main section[id]")]; const links = [...document.querySelectorAll(".nav-link")];
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) links.forEach((link) => link.classList.toggle("active", link.dataset.section === entry.target.id)); }), { rootMargin: "-35% 0px -55%" });
  sections.forEach((section) => observer.observe(section));
}

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("[data-lang-toggle]").addEventListener("click", () => { currentLanguage = currentLanguage === "en" ? "ar" : "en"; localStorage.setItem("vrex-language", currentLanguage); applyLanguage(); });
document.querySelector("[data-theme-toggle]").addEventListener("click", () => { darkMode = !darkMode; localStorage.setItem("vrex-theme", darkMode ? "dark" : "light"); applyTheme(); });
applyTheme(); setupForm(); setupNavigation();
