document.querySelectorAll('.footer__menu-title').forEach(function (title) {
    title.addEventListener('click', function (e) {
        e.preventDefault();
        const menuItem = this.parentElement;

        // Закрываем другие меню
        document.querySelectorAll('.footer__menu-item').forEach(function (item) {
        if (item !== menuItem) {
            item.classList.remove('active');
        }
        });

        // Открываем/закрываем текущее меню
        menuItem.classList.toggle('active');
    });
});