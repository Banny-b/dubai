//ToDo Выпадающее окно с переворачивающейся стрелкой
document.addEventListener('DOMContentLoaded', function() {
    const buyLink = document.getElementById('buy-link');
    const menu = document.getElementById('menu');
    const arrow = buyLink.querySelector('.header__nav-arrow');

    buyLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            menu.classList.add('hide');
            arrow.classList.remove('open');
            setTimeout(() => { menu.style.display = 'none'; }, 300); // 300ms соответствует времени анимации
        } else {
            menu.style.display = 'block';
            setTimeout(() => { 
                menu.classList.add('show'); 
                arrow.classList.add('open');
            }, 10); // Небольшая задержка для запуска анимации
            menu.classList.remove('hide');
        }
    });

    document.addEventListener('click', function(event) {
        if (!buyLink.contains(event.target) && !menu.contains(event.target)) {
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                menu.classList.add('hide');
                arrow.classList.remove('open');
                setTimeout(() => { menu.style.display = 'none'; }, 300);
            }
        }
    });
});
