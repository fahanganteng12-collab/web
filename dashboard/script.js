const i18n = {
  id: {
    "nav.home": "Home",
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",
    "nav.cta": "Mari Bicara",
    "hero.title": "Welcome<br>To My Website",
    "hero.sub": "Saya Fahan, membangun sebuah program yang clean, cepat, dan terasa hidup — dari ide kasar sampai jadi sesuatu yang orang benar-benar pakai.",
    "hero.cta1": "Lihat Proyek",
    "hero.cta2": "Hubungi Saya",
    "about.tag": "Berbasis di Jember, ID",
    "about.eyebrow": "Tentang Saya",
    "about.title": "AS FAHAN ZULFI",
    "about.p1": "Saya developer yang senang merapikan hal-hal berantakan jadi antarmuka yang masuk akal. Lima tahun terakhir saya habiskan untuk membangun website, dashboard, dan eksperimen kecil yang kadang berakhir jadi produk sungguhan.",
    "about.p2": "Di luar coding, saya mengoleksi referensi desain lama, suka tipografi yang berani, dan percaya kalau detail kecil — jarak antar huruf, transisi 0.2 detik — adalah yang membedakan produk biasa dari yang diingat orang.",
    "about.p3": "Saya merupakan siswa dari <strong>SMK PGRI 05 Jember</strong>, tempat saya mengasah kemampuan di bidang teknologi dan pengembangan web.",
    "about.stat1": "Tahun Pengalaman",
    "about.stat2": "Proyek Selesai",
    "about.stat3": "Klien Puas",
    "skills.eyebrow": "Keahlian Teknis",
    "skills.title": "Bahasa & Framework",
    "skill.expert": "Expert",
    "skill.advanced": "Advanced",
    "skill.intermediate": "Intermediate",
    "collage.kicker1": "Edisi Khusus",
    "collage.headline": "Developer Lokal Bangun Produk Skala Global",
    "collage.body": "\"Detail kecil yang sering diabaikan justru yang paling diingat pengguna,\" ujarnya dalam wawancara singkat.",
    "collage.meta": "Hal. 04 — Teknologi",
    "collage.stamp": "Terverifikasi",
    "collage.quote": "\"Saya percaya antarmuka yang baik tidak perlu berteriak untuk terlihat bagus.\"",
    "collage.kicker3": "Keahlian",
    "collage.caption": "Sesi kerja, 2026",
    "projects.eyebrow": "Proyek",
    "projects.title": "Beberapa Pekerjaan Terbaru",
    "tag.analytic": "Analitik",
    "project1.desc": "Aplikasi Sistem Manajemen Gym & Fitnes.",
    "project2.desc": "Toko Parfum online dengan checkout satu halaman , dirancang untuk mempercepat proses belanja di perangkat mobile.",
    "project.visit": "Kunjungi situs",
    "contact.eyebrow": "Kontak",
    "contact.title": "Mari Buat Sesuatu",
    "contact.desc": "Ada proyek, ide, atau sekadar mau ngobrol soal desain? Isi form di samping atau hubungi langsung lewat kanal di bawah.",
    "form.name": "Nama",
    "form.namePlaceholder": "Nama kamu",
    "form.message": "Pesan",
    "form.messagePlaceholder": "Ceritakan proyekmu...",
    "form.submit": "Kirim Pesan",
    "form.sending": "Mengirim...",
    "form.success": "Pesan terkirim! Saya akan balas secepatnya.",
    "form.error": "Gagal mengirim pesan. Coba lagi atau email langsung.",
    "footer.built": "Dibangun dengan HTML, CSS & JavaScript"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cta": "Let's Talk",
    "hero.title": "Welcome<br>To My Website",
    "hero.sub": "I'm Fahan, building programs that are clean, fast, and feel alive — from rough ideas to something people actually use.",
    "hero.cta1": "View Projects",
    "hero.cta2": "Contact Me",
    "about.tag": "Based in Jember, ID",
    "about.eyebrow": "About Me",
    "about.title": "AS FAHAN ZULFI",
    "about.p1": "I'm a developer who enjoys turning messy things into interfaces that make sense. The last five years I've spent building websites, dashboards, and small experiments that sometimes turn into real products.",
    "about.p2": "Outside of coding, I collect old design references, love bold typography, and believe that small details — letter spacing, a 0.2s transition — are what separate ordinary products from the ones people remember.",
    "about.p3": "I am a student at <strong>SMK PGRI 05 Jember</strong>, where I hone my skills in technology and web development.",
    "about.stat1": "Years Experience",
    "about.stat2": "Projects Done",
    "about.stat3": "Happy Clients",
    "skills.eyebrow": "Technical Skills",
    "skills.title": "Languages & Frameworks",
    "skill.expert": "Expert",
    "skill.advanced": "Advanced",
    "skill.intermediate": "Intermediate",
    "collage.kicker1": "Special Edition",
    "collage.headline": "Local Developer Builds Global-Scale Products",
    "collage.body": "\"The small details often overlooked are exactly what users remember most,\" he said in a brief interview.",
    "collage.meta": "Page 04 — Technology",
    "collage.stamp": "Verified",
    "collage.quote": "\"I believe a good interface doesn't need to shout to look great.\"",
    "collage.kicker3": "Skills",
    "collage.caption": "Work session, 2026",
    "projects.eyebrow": "Projects",
    "projects.title": "Some Recent Work",
    "tag.analytic": "Analytics",
    "project1.desc": "Real-time analytics dashboard for operational teams, built with React and WebSocket so data stays in sync without refreshing.",
    "project2.desc": "Online Perfume store with a single-page checkout, designed to speed up the shopping process on mobile devices.",
    "project.visit": "Visit site",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's Build Something",
    "contact.desc": "Have a project, idea, or just want to chat about design? Fill out the form or reach out directly through the channels below.",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.message": "Message",
    "form.messagePlaceholder": "Tell me about your project...",
    "form.submit": "Send Message",
    "form.sending": "Sending...",
    "form.success": "Message sent! I'll reply as soon as possible.",
    "form.error": "Failed to send. Try again or email me directly.",
    "footer.built": "Built with HTML, CSS & JavaScript"
  }
};

let currentLang = "id";

function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.documentElement.lang = lang;
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    applyLang(btn.getAttribute("data-lang"));
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const sections = document.querySelectorAll("main section[id]");
const linkMap = {};
document.querySelectorAll(".nav-link").forEach(link => {
  linkMap[link.getAttribute("href").replace("#", "")] = link;
});

const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Object.values(linkMap).forEach(l => l.classList.remove("active"));
      const activeLink = linkMap[entry.target.id];
      if (activeLink) activeLink.classList.add("active");
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });

sections.forEach(section => spyObserver.observe(section));

const revealItems = document.querySelectorAll(".about-photo-wrap, .about-text, .skills-section, .clip, .contact-text, .contact-form, .section-title");
revealItems.forEach(el => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(el => revealObserver.observe(el));

emailjs.init("wVH-FZjIJl23ivTOi");

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitBtn = contactForm.querySelector(".form-submit");
const submitText = document.getElementById("submitText");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitText.textContent = i18n[currentLang]["form.sending"];
  formStatus.textContent = "";
  formStatus.className = "form-status";

  emailjs.sendForm("service_e0cs2qf", "template_647p6lq", contactForm)
    .then(() => {
      formStatus.textContent = i18n[currentLang]["form.success"];
      formStatus.classList.add("success");
      contactForm.reset();
    })
    .catch(() => {
      formStatus.textContent = i18n[currentLang]["form.error"];
      formStatus.classList.add("error");
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitText.textContent = i18n[currentLang]["form.submit"];
    });
});

function toggleProject(item) {
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".project-item").forEach(i => i.classList.remove("open"));
  if (!isOpen) item.classList.add("open");
}