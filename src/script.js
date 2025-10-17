
// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const menuBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('animate-fadeIn');
  });


// slider button next and previous
const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const cards = track.children;
const totalCards = cards.length;
const realCards = totalCards - 2; // karena ada clone di awal dan akhir

let currentIndex = 1; // mulai dari card asli pertama

function updateCarousel(animate = true) {
  const cardWidth = cards[0].offsetWidth;
  if (!animate) {
    track.style.transition = 'none';
  } else {
    track.style.transition = 'transform 0.3s ease-in-out';
  }
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();

  if (currentIndex === totalCards - 1) {
    setTimeout(() => {
      currentIndex = 1;
      updateCarousel(false);
    }, 300);
  }
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();

  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = realCards;
      updateCarousel(false);
    }, 300);
  }
});

window.addEventListener('resize', () => updateCarousel(false));
updateCarousel(false); // posisi awal

// slider button next and previous card2
function setupCarousel(trackId, prevId, nextId) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  let currentIndex = 0;

  function isMobile() {
    return window.innerWidth < 768;
  }

  function updateCarousel() {
    if (!isMobile()) return;
    const cardWidth = track.children[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (!isMobile()) return;
    if (currentIndex < track.children.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (!isMobile()) return;
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      track.style.transform = 'none';
      currentIndex = 0;
    } else {
      updateCarousel();
    }
  });

  updateCarousel();
}

// Inisialisasi carousel 12 card (non-looping)
setupCarousel('carousel-track-12', 'prevBtn12', 'nextBtn12');

//  QNA

const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');

const answer1 = document.getElementById('A1');
const answer2 = document.getElementById('A2');
const answer3 = document.getElementById('A3');

question1.addEventListener('click', () => {
  answer1.classList.toggle('hidden');
});

question2.addEventListener('click', () => {
  answer2.classList.toggle('hidden');
});

question3.addEventListener('click', () => {
  answer3.classList.toggle('hidden');
});