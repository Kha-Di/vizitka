// ===== Кнопка «Тема»: включает и выключает тёмный режим =====
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  // маленький бонус: иконка тоже меняется — солнце в тёмной теме, луна в светлой
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
});


// ===== Кнопка «Показать контакт»: показывает и прячет почту =====
const contactBtn = document.getElementById('contact-btn');
const contact = document.getElementById('contact');

contactBtn.addEventListener('click', function () {
  contact.classList.toggle('hidden');
});
