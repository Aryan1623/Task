document.querySelector('.search-icon').addEventListener('click', () => {
    document.querySelector('.search-bar').style.display = 'flex';
    document.querySelector('.section-content').style.display = 'none';
    document.querySelector('.section-header').style.display = 'none';
});

document.querySelector('.close-icon').addEventListener('click', () => {
    document.querySelector('.search-bar').style.display = 'none';
    document.querySelector('.section-content').style.display = 'block';
    document.querySelector('.section-header').style.display = 'block';
});

document.querySelectorAll('.row-dropdown').forEach(icon => {
    icon.addEventListener('click', () => {
        const subRows = icon.closest('.row').querySelectorAll('.sub-row');
        subRows.forEach(subRow => {
            subRow.style.display = subRow.style.display === 'none' ? 'block' : 'none';
        });
        icon.classList.toggle('open');
    });
});

document.querySelector('.login-button').addEventListener('click', () => {
    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('#login-box').style.display = 'block';
});

document.querySelector('#show-signup').addEventListener('click', () => {
    document.querySelector('#login-box').style.display = 'none';
    document.querySelector('#signup-box').style.display = 'block';
});

document.querySelector('#show-login').addEventListener('click', () => {
    document.querySelector('#signup-box').style.display = 'none';
    document.querySelector('#login-box').style.display = 'block';
});