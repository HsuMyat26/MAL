document.querySelectorAll('.dropdown-item a').forEach(icon => {
    icon.addEventListener('click', (e) => { e.preventDefault();
        const action= icon.classList.contains('fa-heart') ? 'liked ❤️':
        icon.classList.contains('fa-share') ? 'shared 📤':
        icon.classList.contains('fa-comment') ? 'commented 💬':
        'Action';
        alert(`You${action}`)
    });
});