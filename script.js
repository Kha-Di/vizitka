// ===== Кнопка «Тема»: включает и выключает тёмный режим =====
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function () {
  // БАГ №6 (исправлено): в style.css тёмная тема называется классом "dark",
  // а не "dark-mode" — теперь имена совпадают.
  document.body.classList.toggle('dark');
});


// ===== Кнопка «Показать контакт»: показывает и прячет почту =====
// БАГ №3 (исправлено): id совпадает с "contact-btn" из index.html.
const contactBtn = document.getElementById('contact-btn');
const contact = document.getElementById('contact');

contactBtn.addEventListener('click', function () {
  contact.classList.toggle('hidden');
});
