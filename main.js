const menuBtn = document.querySelector('#abrir-menu-btn');
const cerrarBtn = document.querySelector('#cerrar-menu-btn');
const menu = document.querySelector('.nav__menu');

// abrir barra de navegacioncon el boton

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    cerrarBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})


// cerrar menu con boton

const cerrarNav = () => {
    menu.style.display = 'none';
    cerrarBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

cerrarBtn.addEventListener('click', cerrarNav);

// cerrar menu cuando se valla a una seccion


if (window.innerWidth < 1024) {
    document.querySelectorAll(".nav__menu li a").forEach(navItem => {
        navItem.addEventListener('click', cerrarNav);
    })
}


// cargar estilos en la navegacion al hacer scroll 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})