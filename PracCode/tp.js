const declineButton = document.getElementById('declineBtn');
const container = document.querySelector('.container');
const acceptButton = document.querySelector('.buttonOne');

acceptButton.addEventListener('click', () => {
    alert('You clicked Accept!');
});

declineButton.addEventListener('click', () => {
    
const containerRect = container.getBoundingClientRect();
const randomx = Math.random() * (containerRect.width - declineButton.offsetWidth);
const randomy = Math.random() * (containerRect.height - declineButton.offsetHeight);

declineButton.style.left = `${randomx}px`;
declineButton.style.top = `${randomy}px`;
});