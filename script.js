document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const profile = document.querySelector('.profile-panel');
    const links = document.querySelectorAll('.social-link');
    const catAvatar = document.getElementById('cat-avatar');
    const refreshIcon = document.querySelector('.refresh-icon');
    
    // Анимация появления профиля
    profile.style.opacity = '0';
    profile.style.transform = 'translateY(20px)';
    profile.style.transition = 'opacity 0.5s, transform 0.5s';
    
    setTimeout(() => {
        profile.style.opacity = '1';
        profile.style.transform = 'translateY(0)';
    }, 300);
    
    // Анимация появления ссылок
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(10px)';
        link.style.transition = `opacity 0.3s ${index * 0.1}s, transform 0.3s ${index * 0.1}s`;
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + index * 100);
    });

    // Загрузка случайного котика
    async function fetchRandomCat() {
        try {
            catAvatar.style.opacity = '0.5';
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            catAvatar.src = data[0].url;
            catAvatar.onload = () => {
                catAvatar.style.opacity = '1';
            };
        } catch (error) {
            console.error('Ошибка загрузки котика:', error);
            catAvatar.src = 'assets/images/fallback-cat.jpg'; // Запасное изображение
            catAvatar.alt = 'Котик по умолчанию';
            catAvatar.style.opacity = '1';
        }
    }

    // Обновление котика по клику
    catAvatar.addEventListener('click', function(e) {
        e.preventDefault();
        fetchRandomCat();
    });

    // Показать/скрыть иконку обновления
    catAvatar.addEventListener('mouseenter', function() {
        refreshIcon.style.opacity = '1';
    });
    
    catAvatar.addEventListener('mouseleave', function() {
        refreshIcon.style.opacity = '0';
    });

    // Первая загрузка котика
    fetchRandomCat();
    
    // Автоматическое обновление каждые 30 секунд
    setInterval(fetchRandomCat, 30000);
});