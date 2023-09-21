const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'message ',
        'message  2', 'message  3', 'message  4', 'message  5', 'message  6']

        button.addEventListener('click', () => createNotifiction());

function createNotifiction() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = messages[Math.floor(Math.random() * messages.length)];
    toasts.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}