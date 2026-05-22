(function blockDevTools() {


    setInterval(function () {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;

        // Si la ventana de herramientas del desarrollador se abre y quita espacio:
        if (widthThreshold || heightThreshold) {
            document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:20vh;'>¡Ups! La magia se rompió. Cierra el inspeccionador para ver la invitación.</h1>";
            setTimeout(() => {
                location.reload();
            }, 1000); // Recarga la página después de mostrar el mensaje
            debugger;
        }
    }, 40);
    setInterval(function () {
        // Esta función congela la página si el inspector está abierto
        /* debugger; */
        /* window.location.reload(); */
    }, 50); // Se ejecuta cada 50 milisegundos
    // Borrar el contenido visual si intentan inspeccionar

})();
// FLUJO DE CARGA Y PANTALLA CINEMATOGRÁFICA
window.addEventListener('load', () => {
    // 1. Espera 2.5s y oculta el loader original
    setTimeout(() => {
        document.getElementById('loader').classList.add('hide');

        // 2. Muestra la pantalla negra de cine
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('pantalla-intro').style.display = 'flex';
        }, 1000); // Tiempo de fade del loader

    }, 2500);
});
// 3. Al hacer clic en entrar:
const btnEntrar = document.getElementById('btn-entrar');
const music = document.getElementById('music');
let playing = false;

btnEntrar.addEventListener('click', () => {
    const intro = document.getElementById('pantalla-intro');
    const scene = document.getElementById('main-scene');

    intro.style.opacity = '0';

    // Reproducir música automáticamente
    music.play();
    playing = true;

    setTimeout(() => {
        intro.style.display = 'none';
        scene.style.display = 'block'; // Esto reinicia las animaciones CSS de la escena
    }, 1000);
});

// =========================
// CONFETTI
// =========================
const confetti = document.getElementById('confetti');
const colors = ['#ff5252', '#42a5f5', '#ffee58', '#66bb6a', '#ff80ab'];
for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (Math.random() * 4 + 4) + 's';
    piece.style.animationDelay = Math.random() * 5 + 's';
    confetti.appendChild(piece);
}

// =========================
// COUNTDOWN
// =========================
const targetDate = new Date('2026-08-01T13:00:00');
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return; // Si ya pasó, no hacer nada negativo

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// =========================
// BOTÓN DE MÚSICA
// =========================
const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click', () => {
    if (!playing) {
        music.play();
        musicBtn.innerHTML = '♫';
    } else {
        music.pause();
        musicBtn.innerHTML = '♪';
    }
    playing = !playing;
});

// =========================
// CAMERA EFFECT (Movimiento suave de la escena)
// =========================
let move = 0;
function animate() {
    move += 0.01;
    document.querySelector('.scene').style.transform = `translateY(${Math.sin(move) * 2}px)`;
    requestAnimationFrame(animate);
}
animate();
// Bloquear clic derecho
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Bloquear atajos de teclado comunes para inspeccionar código
document.addEventListener('keydown', function (e) {
    // Bloquear F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
    }
    // Bloquear Ctrl+Shift+I (Inspeccionar)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
    }
    // Bloquear Ctrl+Shift+J (Consola)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
    }
    // Bloquear Ctrl+U (Ver código fuente)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
    }
    // Bloquear Ctrl+S (Guardar página)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
    }
});