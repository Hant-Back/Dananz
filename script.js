// Звичайни джс файл, тут нічого не змінюється
// Виконуємо код лише після того, як вся сторінка завантажиться
document.addEventListener('DOMContentLoaded', () => {
    // Знаходимо бургер-кнопку
    const burger = document.querySelector('.header__burger');
    // Знаходимо меню навігації
    const nav = document.querySelector('.header__nav');
    // Зберігаємо доступ до body, щоб блокувати прокрутку сторінки
    const body = document.body;

    // Функція для відкриття/закриття меню
    const toggleMenu = () => {
        // Перемикаємо клас 'active' на бургер-кнопці і зберігаємо стан (чи активний бургер)
        const isActive = burger.classList.toggle('active');
        // Якщо бургер активний, додаємо клас 'active' до меню, інакше прибираємо
        nav.classList.toggle('active', isActive);
        // Якщо бургер активний, блокуємо прокрутку сторінки, додаючи клас 'no-scroll'
        body.classList.toggle('no-scroll', isActive);
    };

    // Додаємо обробник кліку на бургер-кнопку
    burger.addEventListener('click', (e) => {
        // Зупиняємо поширення події, щоб клік не вплинув на інші елементи
        e.stopPropagation();
        // Викликаємо функцію перемикання меню
        toggleMenu();
    });

    // Додаємо обробник кліку на документ (будь-де на сторінці)
    document.addEventListener('click', (e) => {
        // Якщо користувач клацнув поза меню і бургер-кнопкою
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            // Прибираємо клас 'active' з бургер-кнопки
            burger.classList.remove('active');
            // Прибираємо клас 'active' з меню
            nav.classList.remove('active');
            // Розблоковуємо прокрутку сторінки, видаляючи клас 'no-scroll'
            body.classList.remove('no-scroll');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.header__nav a');
    let page = window.location.pathname.split('/').pop();

    if (!page || page === '') {
      page = 'index.html';
    }

    links.forEach(link => {
      const href = link.getAttribute('href').replace('./', '');
      if (href === page) {
        link.classList.add('active');
      }
    });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 40) { // Якщо скрол більше 50px
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});