// Background mein sitare (stars) banane ke liye
function createStars() {
    const body = document.querySelector('body');
    for (let i = 0; i < 200; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        
        star.style.position = 'absolute';
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random();
        
        body.appendChild(star);
    }
}

createStars();