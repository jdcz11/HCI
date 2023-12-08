const cambiarTemaBtn = document.getElementById('cambiar-tema-btn');
const scrollUpBtn = document.getElementById('scroll-top-btn');
const prevSlideBtn = document.getElementById('prev-slide-btn');
const nextSlideBtn = document.getElementById('next-slide-btn');
const enviarBtn = document.getElementById('enviar-btn');
const masInfoBtn = document.getElementById('mas-info-btn')
const masInfoBtn2 = document.getElementById('mas-info-btn2')
const inicioBtn = document.getElementById('inicio-btn')
const searchbtn = document.getElementById('search-btn')




cambiarTemaBtn.addEventListener('click', cambiarTema);

function cambiarTema() {
  const body = document.body;

  if (body.classList.contains('tema-oscuro')) {
    body.classList.remove('tema-oscuro');
    body.classList.add('tema-claro');
    cambiarColorBoton('#cambiar-tema-btn', '#778899', '#4682B4');
    cambiarColorBoton('#scroll-top-btn', '#778899', '#4682B4');
    cambiarColorBoton('#prev-slide-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#next-slide-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#enviar-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#mas-info-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#mas-info-btn2', '#87CEFA', '#4682B4');
    cambiarColorBoton('#inicio-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#search-btn', '#87CEFA', '#4682B4');



    guardarTema('claro');
  } else if (body.classList.contains('tema-claro')) {
    body.classList.remove('tema-claro');
    cambiarColorBoton('#cambiar-tema-btn', '#a0acb8', '#bbc4cc');
    cambiarColorBoton('#scroll-top-btn', '#a0acb8', '#bbc4cc');
    cambiarColorBoton('#prev-slide-btn', '#a0acb8', '#bbc4cc');
    cambiarColorBoton('#next-slide-btn', '#a0acb8', '#bbc4cc');
    cambiarColorBoton('#enviar-btn', '#a0acb8', '#bbc4cc');
    cambiarColorBoton('#mas-info-btn', '#a0acb8', '#bbc4cc');
    cambiarColorBoton('#mas-info-btn2', '#a0acb8', '#bbc4cc');
    cambiarColorBoton('#inicio-btn', '#a0acb8', '#bbc4cc');
    cambiarColorBoton('#search-btn', '#a0acb8', '#bbc4cc');



    guardarTema('predeterminado');
  } else {
    body.classList.add('tema-oscuro');
    cambiarColorBoton('#cambiar-tema-btn', 'orange', 'darkorange');
    cambiarColorBoton('#scroll-top-btn', 'orange', 'darkorange');
    cambiarColorBoton('#prev-slide-btn', 'orange', 'darkorange');
    cambiarColorBoton('#next-slide-btn', 'orange', 'darkorange');
    cambiarColorBoton('#enviar-btn', 'orange', 'darkorange');
    cambiarColorBoton('#mas-info-btn', 'orange', 'darkorange');
    cambiarColorBoton('#mas-info-btn2', 'orange', 'darkorange');
    cambiarColorBoton('#inicio-btn', 'orange', 'darkorange');
    cambiarColorBoton('#search-btn', 'orange', 'darkorange');




    guardarTema('oscuro');
  }
}

function cambiarColorBoton(selector, colorInicial, colorHover) {
  const boton = document.querySelector(selector);
  boton.style.backgroundColor = colorInicial;
  boton.addEventListener('mouseenter', () => {
    boton.style.backgroundColor = colorHover;
  });
  boton.addEventListener('mouseleave', () => {
    boton.style.backgroundColor = colorInicial;
  });
}

function guardarTema(tema) {
  localStorage.setItem('tema', tema);
}

function cargarTemaGuardado() {
  const temaGuardado = localStorage.getItem('tema');

  if (temaGuardado === 'oscuro') {
    document.body.classList.add('tema-oscuro');
    cambiarColorBoton('#cambiar-tema-btn', 'orange', 'darkorange');
    cambiarColorBoton('#scroll-top-btn', 'orange', 'darkorange');
    cambiarColorBoton('#prev-slide-btn', 'orange', 'darkorange');
    cambiarColorBoton('#next-slide-btn', 'orange', 'darkorange');
    cambiarColorBoton('#enviar-btn', 'orange', 'darkorange');
    cambiarColorBoton('#mas-info-btn', 'orange', 'darkorange');
    cambiarColorBoton('#mas-info-btn2', 'orange', 'darkorange');
    cambiarColorBoton('#inicio-btn', 'orange', 'darkorange');
    cambiarColorBoton('#search-btn', 'orange', 'darkorange');



  } else if (temaGuardado === 'claro') {
    document.body.classList.add('tema-claro');
    cambiarColorBoton('#cambiar-tema-btn', '#778899', '#4682B4');
    cambiarColorBoton('#scroll-top-btn', '#778899', '#4682B4');
    cambiarColorBoton('#prev-slide-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#next-slide-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#enviar-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#mas-info-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#mas-info-btn2', '#87CEFA', '#4682B4');
    cambiarColorBoton('#inicio-btn', '#87CEFA', '#4682B4');
    cambiarColorBoton('#search-btn', '#87CEFA', '#4682B4');



  }
}

cargarTemaGuardado();

