document.addEventListener('DOMContentLoaded', function() {
    const balloonContainer = document.querySelector('.balloons');
    const confettiContainer = document.querySelector('.confetti');
    const bgMusic = document.getElementById('bgMusic');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.createElement('div');
    
    surpriseMessage.id = 'surpriseMessage';
    surpriseMessage.textContent = 'Espero que la pases de lo mejor hoy, aunque avanzas un año más a tu muerte, que no te impida mejorar, no cambies que eso te hace especial';
    document.body.appendChild(surpriseMessage);

    // Reproducir música de fondo automáticamente
    function playMusic() {
        bgMusic.play().catch(() => {
            bgMusic.play();
        });
    }
    playMusic();

    // Crear globos
    function createBalloon() {
        for (let i = 0; i < 3; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 100 + 'vw';
            balloon.style.backgroundColor = getRandomColor();
            balloonContainer.appendChild(balloon);

            setTimeout(() => {
                balloon.remove();
            }, 5000);
        }
    }

    function getRandomColor() {
        const colors = ['#ff6347', '#ff69b4', '#ffd700', '#32cd32', '#87ceeb'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setInterval(createBalloon, 500);

    // Crear serpentina
    function createConfetti() {
        for (let i = 0; i < 20; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.className = 'confetti-piece';
            confettiPiece.style.left = Math.random() * 100 + 'vw';
            confettiPiece.style.backgroundColor = getRandomColor();
            confettiPiece.style.animationDuration = (Math.random() * 2 + 3) + 's';
            confettiPiece.style.animationDelay = Math.random() + 's';
            confettiPiece.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            confettiContainer.appendChild(confettiPiece);

            setTimeout(() => {
                confettiPiece.remove();
            }, 5000);
        }
    }

    setInterval(createConfetti, 1000);

    // Funcionalidad del botón de sorpresa
    surpriseBtn.addEventListener('click', function() {
        alert('Espero que estés pasando un buen día. Aunque avanzas un año más hacia tu destino, no dejes de mejorar. No cambies, eso es lo que te hace especial.');
        playMusic(); // Reproducir música cuando se presiona el botón de sorpresa
    });
});
