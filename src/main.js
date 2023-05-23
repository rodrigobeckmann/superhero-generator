import './style.css'
import Swal from 'sweetalert2'

const accesToken = '23929227926676258';
const baseUrl = `https://superheroapi.com/api.php/${accesToken}`;

const sortBtn = document.querySelector('#sort-btn');
const heroImg = document.querySelector('#hero-img');
const heroName = document.querySelector('#hero-name');

sortBtn.addEventListener('click', () => {

    const randomHero = Math.floor(Math.random() * 1000) + 1;

    fetch(`${baseUrl}/${randomHero}`)
        .then((char) => char.json())
        .then((data) => {
            heroImg.src = data.image.url;
            heroName.innerHTML = data.name;
        })
        .catch((error) => Swal.fire({
            icon: 'error',
            title: 'Erro!!!',
            text: error.message,
        }));
})


