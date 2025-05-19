document.addEventListener('DOMContentLoaded', function() {
    // Анимация профиля
    const profile = document.querySelector('.profile-panel');
    const links = document.querySelectorAll('.social-link');
    
    profile.style.opacity = '0';
    profile.style.transform = 'translateY(20px)';
    profile.style.transition = 'opacity 0.5s, transform 0.5s';
    
    setTimeout(() => {
        profile.style.opacity = '1';
        profile.style.transform = 'translateY(0)';
    }, 300);
    
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(10px)';
        link.style.transition = `opacity 0.3s ${index * 0.1}s, transform 0.3s ${index * 0.1}s`;
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + index * 100);
    });

    // Функция загрузки котика
    const catImg = document.getElementById('random-cat');

    async function fetchRandomCat() {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await response.json();
            catImg.src = data[0].url;
        } catch (error) {
            console.error('Ошибка загрузки:', error);
            catImg.alt = 'Ошибка загрузки котика';
        }
    }

    // Загружаем котика при загрузке страницы
    fetchRandomCat();
    
    // Обновляем котика каждые 10 секунд
    setInterval(fetchRandomCat, 10000);
});