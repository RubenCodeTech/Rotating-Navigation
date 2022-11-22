let container = document.querySelector('.container');
let circle = document.querySelector('.circle');
let navBar = document.querySelector('nav');


let butonOpen = document.getElementById('open');
butonOpen.addEventListener('click', rotation);
function rotation() {
    container.classList.add('containerRotate');
    butonOpen.classList.add('open');
    circle.classList.add('circleRotate');
    navBar.classList.add('navAppear');
}

let butonClose = document.getElementById('close');
butonClose.addEventListener('click', rotationBack);
function rotationBack() {
    container.classList.remove('containerRotate')
    butonOpen.classList.remove('open');
    circle.classList.remove('circleRotate');
    navBar.classList.remove('navAppear');
}