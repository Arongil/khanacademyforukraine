// hearts.js

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '<img src="/images/heart.svg" alt="Ukrainian heart" width="100%" height="100%">';
    heart.classList.add('floating-heart');
    // Randomly choose left or right side
    const side = Math.random() < 0.5 ? 'left' : 'right';
    const position = Math.random() * 8 + 6; // Random position between 6% and 14%
    heart.style[side] = position + 'vw';
    document.querySelector('.hearts-container').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 15000);
    // Schedule the next heart creation
    scheduleNextHeart();
}

function scheduleNextHeart() {
    // Only actually create the heart if not on mobile
    if (window.innerWidth > 768) {
        const delay = Math.random() * 10000 + 10000; // Random delay between 10000ms and 20000ms
        setTimeout(createHeart, delay);
    }
}

function initHearts() {
    // Create hearts container if it doesn't exist
    if (!document.querySelector('.hearts-container')) {
        const container = document.createElement('div');
        container.className = 'hearts-container';
        document.body.appendChild(container);
    }

    // Start creating hearts
    let heartsScheduled = true;
    scheduleNextHeart();

    // Add event listener for window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            // Remove all existing hearts
            heartsScheduled = false;
            document.querySelector('.hearts-container').innerHTML = "";
        } else if (!heartsScheduled) {
            // Resume creating hearts
            heartsScheduled = true;
            scheduleNextHeart();
        }
    });
}

// Initialize hearts animation when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initHearts);
