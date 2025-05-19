document.addEventListener('DOMContentLoaded', function() {
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
});