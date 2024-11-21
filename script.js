
    const $card = document.getElementById('card');
    const card = [];
    const captions = [
        "Puppy 1: The curious explorers, always ready for an adventure.",
        "Puppy 2: Observer, waiting for his moment to play.",
        "Puppy 3: Begging to go out to the park",
        "Puppy 4: Brave and ready for trouble.",
        "Puppy 5: A loyal friend who loves to snuggle.",
        "Puppy 6: Puppy eyes: the ultimate weapon.",
        "Puppy 7: A mischievous little one, always getting into trouble.",
        "Puppy 8: The world's tiniest cuddle monster.",
        "Puppy 9: Looking cute and knowing it!",
        "Puppy 10: I may be small, but my personality is HUGE!",
        "Puppy 11: A cute and cuddly ball of fluff enjoying some playtime.",
        "Puppy 12: Giving you the ‘please throw the ball’ look."
    ];

    for (let i = 1; i <= 12; i++) {
        card.push(`
            <img class="image" src="/assets/${i}-puppies.jpg" alt="Puppy ${i}" data-large="/assets/${i}-puppies-hd.jpg" data-caption = "${captions[i - 1]}">
        `);
    }

   
    $card.innerHTML += card.join('');

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');

 
    $card.addEventListener('click', function (e) {
   
        if (e.target && e.target.tagName === 'IMG') {
            const img = e.target;
            const hdImageSrc = img.getAttribute('data-large');
            const imgCaption = img.getAttribute('data-caption');

       
            modal.style.display = "block";
            modalImg.src = hdImageSrc; 
            caption.textContent = imgCaption;
        }
    });

  
    modalImg.addEventListener('click', () => {
    modal.style.display = "none"; 
    });

