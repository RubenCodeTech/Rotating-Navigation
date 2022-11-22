let butonOpen = document.getElementById('open');
let container = document.querySelector('.container');
let circle = document.querySelector('.circle');
let navBar = document.querySelector('nav');


butonOpen.addEventListener('click', rotation);
function rotation() {
    container.classList.add('containerRotate');
    butonOpen.classList.add('open');
    circle.classList.add('circleRotate');
    navBar.classList.add('navAppear');
    // if(navBar.style.display="none"){
    //     navBar.style.display="block"
    // }
   
}

let butonClose = document.getElementById('close');
butonClose.addEventListener('click', rotationBack);
function rotationBack() {
    container.classList.remove('containerRotate')
    butonOpen.classList.remove('open');
    circle.classList.remove('circleRotate');
    navBar.classList.remove('navAppear');
    // navBar.style.display="none"
}