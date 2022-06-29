const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const imgsClass = document.querySelector('.carousel-image');

images.forEach((element, i, array) => {
    console.log(`
    ${element.title}, 
    ${element.description},
    ${element.url}
    `);

    const img = document.createElement('div');
    img.classList.add('position-relative', 'carousel-image-item');

    img.innerHTML =
    `   <img class="img-thumbnail" src="${element.url}" alt="">
            <div class="text_img position-absolute top-0 end-0 text-end m-4">
                <h1 class="text-white">${element.title}</h1>
                <p class="text-white">${element.description}</p>
            </div> `;

    img.classList.add('d-none');
    imgsClass.appendChild(img);
});

let activeImg = 0;
const imgList = imgsClass.children;
imgList[activeImg].classList.remove('d-none');



/* button */
const buttonNext = document.querySelector('#next-btn');
buttonNext.addEventListener('click', function() {

imgList[activeImg].classList.remove('active');
imgList[activeImg].classList.add('d-none');

activeImg++;
    if (activeImg >= imgList.length) {
        activeImg = 0;
    }

imgList[activeImg].classList.remove('d-none');
imgList[activeImg].classList.add('active');


});

const buttonPrevious = document.querySelector('#previous-btn');
buttonPrevious.addEventListener('click', function() {

imgList[activeImg].classList.remove('active');
imgList[activeImg].classList.add('d-none');

activeImg--;
    if (activeImg < 0) {
        activeImg = imgList.length - 1;
    }

imgList[activeImg].classList.remove('d-none');
imgList[activeImg].classList.add('active');
}); 