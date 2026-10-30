// SLIDERS AND DISPLACEMENT

const slider = document.getElementById('distortion-slider');
const displacementMap = document.getElementById('displacement-map')

slider.addEventListener('input', (event) => {
    const sliderValue = event.target.value;

    displacementMap.setAttribute('scale', sliderValue);

});




const zoomSlider = document.getElementById('zoom-slider');
const image = document.querySelector('.distortedtext img');

zoomSlider.addEventListener('input', (event) => {

    image.style.transform = `scale(${event.target.value})`; 

});

// IMAGE INDEX

const displayImg = document.querySelector('.display-img');
const index = document.querySelector('.index');
const items = document.querySelectorAll('.index .item');

function clearActive() {

    index.classList.remove('hasactive');
    items.forEach(item => item.classList.remove('active'));

}


document.querySelectorAll('.index .work').forEach(p => {

    p.addEventListener('click', () => {

        const item = p.closest('.item');
        const src = p.closest('.item').dataset.src;

        if (displayImg.getAttribute('src') === src && displayImg.style.display === 'block') {

            displayImg.style.display = 'none';
            clearActive();
            return;

        }

        displayImg.src = src;
        displayImg.style.display = 'block';

        clearActive();
        index.classList.add('hasactive');
        item.classList.add('active');

    });



});



