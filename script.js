function toggleDarkMode() {
    var container = document.getElementById('container');
    var h1 = document.querySelector('.container h1');
    var modeText = document.getElementById('modeText');

    container.classList.toggle('dark-mode');

    if (container.classList.contains('dark-mode')) {
        modeText.textContent = 'Dark';
    } else {
        modeText.textContent = 'Light';
    }
}