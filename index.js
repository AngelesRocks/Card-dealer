let numberEl = document.getElementById('number-el');
let topIconEl = document.getElementById('top-icon');
let bottomIconEl = document.getElementById('bottom-icon');

function getRandomCard() {
    const icons = ['♠', '♣', '♥', '♦'];
    const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    
    let iconIndex = Math.floor(Math.random() * icons.length);
    let numberIndex = Math.floor(Math.random() * numbers.length);

    
    let icon = icons[iconIndex];
    let number = numbers[numberIndex];

    
    topIconEl.textContent = icon;
    bottomIconEl.textContent = icon;

    
    numberEl.textContent = number;
}

getRandomCard();
