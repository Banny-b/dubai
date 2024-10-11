document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.apartments__video');
    const video = document.getElementById('apartment-video');

    // Функция для начала воспроизведения видео
    function playVideo() {
        videoContainer.style.backgroundImage = 'none'; // Убираем фоновую картинку
        video.classList.remove('apartments__video-content');              // Показываем видео
        video.play();                                  // Воспроизводим видео
    }

    // Функция для возврата фона после окончания видео
    function showScreensaver() {
        video.pause();                                 // Останавливаем видео
        video.currentTime = 0;                         // Возвращаем видео в начало
        video.classList.add('apartments__video-content');                 // Скрываем видео
        videoContainer.style.backgroundImage = 'url(././images/apartments/screensaver.png)'; // Возвращаем фоновую картинку
    }

    // Клик для начала воспроизведения
    videoContainer.addEventListener('click', function() {
        if (video.classList.contains('apartments__video-content')) {
            playVideo();  // Начинаем воспроизведение, если видео скрыто
        }
    });

    // Возврат фона после окончания видео
    video.addEventListener('ended', showScreensaver);

    // Возврат фона при нажатии клавиши ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !video.classList.contains('apartments__video-content')) {
            showScreensaver();
        }
    });
});
