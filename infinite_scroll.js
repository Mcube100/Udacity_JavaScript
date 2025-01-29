const container = document.querySelector('.container');

const URL = 'https://randomfox.ca/images/';


function getRandomNumber(){
    return Math.floor(Math.random() * 100);
};

function loadImages(numImages = 6){
    let i = 0;
    while(i < numImages){
        const img = document.createElement('img');
        img.src = '${URL}${getRandomNumber()}.jpg';
        container.appendChild(img);
        i++;
    }
}

loadImages();

window.addEventListener('scroll', () => {
    if(window.scrolly + window.innerHeight >= documentElement.scrollHeight){
        loadImages();
    }
});