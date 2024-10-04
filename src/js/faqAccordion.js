document.querySelectorAll('.faq__header').forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;

        // Свернуть все открытые элементы
        document.querySelectorAll('.faq__item').forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
        }
        });

        // Переключить активное состояние текущего элемента
        accordionItem.classList.toggle('active');
    });
});