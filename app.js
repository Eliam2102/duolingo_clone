//Comenzamos agregadno el favicon
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = 'src/favicon96x96.png';
const head = document.querySelector('head');
//lo asignamos como hijo al head
head.appendChild(link);


// Creaciòn de  la barra de navegación y sus estilos
const navBar = document.createElement('nav');
navBar.style.display = 'flex';
navBar.style.justifyContent = 'space-between';
navBar.style.alignItems = 'center';
navBar.style.padding = '16px';
navBar.style.backgroundColor = 'white';
navBar.style.borderBottom = '2px solid grey';
navBar.style.borderRadius = '4px';
navBar.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
navBar.id='barraNav';

//Creacion de la funcion para que se muestre el borde inferior de la barra de naveagción la hacer scroll.
window.addEventListener('scroll', () => {
    // Cambiar el estilo de la barra de navegación
    navBar.style.borderBottom = window.scrollY > 0 ? '2px solid rgb(200, 200, 200)' : 'none';
});

// Crear el logo en la navBar
const logo = document.createElement('img');
logo.src = './src/logo.svg'
logo.style.width = '570px';
logo.style.height = '40px';
logo.style.cursor = 'pointer';

// Función para mostrar el enlace en la parte inferior como un div
function mostrarEnlace() {
    const enlace = document.createElement('div');
    enlace.href = 'https://es.duolingo.com';
    enlace.textContent = 'https://es.duolingo.com';
    enlace.style.position = 'absolute';
    enlace.style.bottom = '0';
    enlace.style.fontFamily = 'Arial, sans-serif';
    enlace.style.fontSize = '12px';
    enlace.style.background ='rgba(0, 0, 458, 0.1)';
    enlace.id = 'enlaceInferior';

    //lo agregamos al body
    document.body.appendChild(enlace);

}

// Función para ocultar el enlace en la parte inferior
function ocultarEnlace() {
    const enlace = document.getElementById('enlaceInferior');
    if (enlace) {
        document.body.removeChild(enlace);
    }
}

// Agregar eventos al logo
//para cuando el mouse esta sobre y esta fuera, se ejecuta una de las funciones
//anteriomente establecidas.
logo.addEventListener('mouseover', mostrarEnlace);
logo.addEventListener('mouseout', ocultarEnlace);

// Agregar el logo al documento
document.body.appendChild(logo);

// Crear el elemento span para contener el texto y el icono
const btn = document.createElement('span');
btn.textContent = 'IDIOMA DE LA PÁGINA: ESPAÑOL';
btn.style.cursor = 'pointer';
btn.style.display = 'inline-flex';
btn.style.alignItems = 'center';
btn.style.padding = '8px 19px';
btn.style.backgroundColor = 'white';
btn.style.border = 'none';
btn.style.color = 'rgba(0, 0, 0, 0.2)';
btn.style.fontFamily = 'Arial, sans-serif';
btn.style.fontWeight = 'bold';
btn.style.fontSize = '14px';
btn.style.marginLeft = '15px';
btn.id='btnSpan';

// Agregar el botón al documento
document.body.appendChild(btn);


// Crear el elemento svg para el icono de flecha hacia abajo
const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgIcon.setAttribute("class", "icon icon-tabler icon-tabler-arrow-badge-down");
svgIcon.setAttribute("width", "24");
svgIcon.setAttribute("height", "24");
svgIcon.setAttribute("viewBox", "0 0 24 24");
svgIcon.setAttribute("stroke-width", "1.5");
svgIcon.setAttribute("stroke", "#9e9e9e");
svgIcon.setAttribute("fill", "none");
svgIcon.setAttribute("stroke-linecap", "round");
svgIcon.setAttribute("stroke-linejoin", "round");
svgIcon.id='flechaIcon';
// Crear el elemento path para el ícono que se mostrara a lado del text
const pathIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathIcon.setAttribute("d", "M17 13v-6l-5 4l-5 -4v6l5 4z");
svgIcon.appendChild(pathIcon);

// Agregar el icono al botón de texto Aprender IDIomas
btn.appendChild(svgIcon);

// Agregar el botón al documento
document.body.appendChild(btn);

//Un vez creado tal cual lo queremos, solo lo agregagamos cada uno como hijo a la navBar (barra de navegacióm)
// Agregar el logo y el botón a la barra de navegación
navBar.appendChild(logo);
navBar.appendChild(btn);

//Posterior la navBar, la agregaremos al header.
// Obtener el encabezado y agregar la barra de navegación
const header = document.getElementById('header');
header.appendChild(navBar);

window.addEventListener('scroll', function() {
    const navBar = document.querySelector('nav');
    const header = document.querySelector('header');
    const section5 = document.querySelector('#section5');
    const section8 = document.querySelector('#section8');
    const section9 = document.querySelector('#section9');
    const section13 = document.querySelector('#section13');
    const footer = document.querySelector('footer');

    if (window.scrollY >= header.offsetTop && window.scrollY < section5.offsetTop) {
        navBar.style.position = 'fixed';
        navBar.style.top = '0';
        navBar.style.left = '0';
        navBar.style.right = '0';
        navBar.style.zIndex = '999';
        document.body.style.paddingTop = `${navBar.offsetHeight}px`;
    } else if (window.scrollY >= section5.offsetTop && window.scrollY < section8.offsetTop) {
        navBar.style.position = 'relative';
        document.body.style.paddingTop = '0';
    } else if (window.scrollY >= section8.offsetTop && window.scrollY < section9.offsetTop) {
        navBar.style.position = 'fixed';
        navBar.style.top = '0';
        navBar.style.left = '0';
        navBar.style.right = '0';
        navBar.style.zIndex = '999';
        document.body.style.paddingTop = `${navBar.offsetHeight}px`;
    } else if (window.scrollY >= section9.offsetTop && window.scrollY < section13.offsetTop) {
        navBar.style.position = 'fixed';
        navBar.style.top = '0';
        navBar.style.left = '0';
        navBar.style.right = '0';
        navBar.style.zIndex = '999';
        document.body.style.paddingTop = `${navBar.offsetHeight}px`;
    } else if (window.scrollY >= section13.offsetTop && window.scrollY < footer.offsetTop) {
        navBar.style.position = 'relative';
        document.body.style.paddingTop = '0';
    } else if (window.scrollY >= footer.offsetTop) {
        navBar.style.position = 'fixed';
        navBar.style.bottom = '0';
        navBar.style.left = '0';
        navBar.style.right = '0';
        navBar.style.zIndex = '999';
        document.body.style.paddingBottom = `${navBar.offsetHeight}px`;
    }
});



// Creación de la sección 1
const section1 = document.createElement('section');
section1.id = 'section1';
section1.style.padding = '20px';
section1.style.marginBottom = '100px';
section1.style.display = 'flex';
section1.style.alignItems = 'center';
section1.style.justifyContent = 'center';

// Crear el contenedor de la sección 1
const container1 = document.createElement('div');
container1.style.display = 'flex';
container1.style.alignItems = 'center';
container1.style.width = '100%';
section1.appendChild(container1);

// Creación de la subsección para el GIF
const gifSubsection = document.createElement('div');
gifSubsection.style.flex = '1';

// Crear el GIF
const gif = document.createElement('img');
gif.src = 'src/perrolingo.gif';
gif.style.width = '100%';
gif.style.height = 'auto';
gifSubsection.appendChild(gif);

// Crear la subsección para el título y los botones
const contentSubsection = document.createElement('div');
contentSubsection.style.flex = '1';
contentSubsection.style.display = 'flex';
contentSubsection.style.flexDirection = 'column';
contentSubsection.style.alignItems = 'center';

// Crear el título
const title = document.createElement('h2');
title.textContent = '¡La forma divertida, efectiva y gratis de aprender un idioma!';
title.style.textAlign = 'center';
title.style.fontFamily = 'din-round';
title.style.fontStyle = 'normal';
title.style.fontWeight = '700';
title.style.fontSize = '32px';
title.style.color = '#4B4B4B';
contentSubsection.appendChild(title);

// Crear el botón "EMPEZAR AHORA"
const startButton = document.createElement('a');
startButton.textContent = 'EMPEZAR AHORA';
startButton.style.backgroundColor = '#58CC02';
startButton.style.color = 'white';
startButton.style.padding = '15px 125px';
startButton.style.border = 'none';
startButton.style.borderRadius = '8px';
startButton.style.cursor = 'pointer';
startButton.style.marginBottom = '20px';
startButton.style.fontWeight = 'bold';
startButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.9)';
startButton.href = 'https://es.duolingo.com/register';
startButton.style.textDecoration = 'none';
startButton.addEventListener('mouseover', function () {
    startButton.style.filter = 'brightness(120%)';
    startButton.style.cursor = 'pointer';
});
startButton.addEventListener('mouseout', function () {
    startButton.style.filter = 'brightness(100%)';
});
contentSubsection.appendChild(startButton);

// Crear el botón "YA TENGO UNA CUENTA"
const accountButton = document.createElement('a');
accountButton.textContent = 'YA TENGO UNA CUENTA';
accountButton.style.backgroundColor = 'white';
accountButton.style.color = '#199EDD';
accountButton.style.padding = '14px 100px';
accountButton.style.border = '#CECECE solid 2px';
accountButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.6)';
accountButton.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
accountButton.style.borderRadius = '10px';
accountButton.style.cursor = 'pointer';
accountButton.style.fontWeight = 'bold';
accountButton.style.transition = 'background-color 0.3s';
accountButton.href = 'https://es.duolingo.com/?isLoggingIn=true';
accountButton.style.textDecoration = 'none';
accountButton.addEventListener('mouseover', function () {
    accountButton.style.backgroundColor = '#f0f0f0';
    accountButton.style.cursor = 'pointer';
});
accountButton.addEventListener('mouseout', function () {
    accountButton.style.backgroundColor = 'white';
});
contentSubsection.appendChild(accountButton);

// Agregar la subsección del GIF y la subsección del contenido al contenedor de la sección 1
container1.appendChild(gifSubsection);
container1.appendChild(contentSubsection);


// Agregar un evento scroll al objeto window para agregar un objeto
// Almacena una referencia al botón de idiomas y al navbar
const idiomasBtn = document.getElementById('btnSpan');
const navbarInit = document.querySelector('nav');

// Creación del botón "EMPIEZA AHORA"
const btnEmpiezaNow = document.createElement('a');
btnEmpiezaNow.textContent = 'EMPIEZA AHORA';
btnEmpiezaNow.style.backgroundColor = '#58CC02';
btnEmpiezaNow.style.color = '#ffffff';
btnEmpiezaNow.style.padding = '10px 20px';
btnEmpiezaNow.style.border = 'none';
btnEmpiezaNow.style.borderRadius = '10px';
btnEmpiezaNow.style.cursor = 'pointer';
btnEmpiezaNow.style.fontWeight = 'bold';
btnEmpiezaNow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
btnEmpiezaNow.style.transition = 'filter 0.3s';
btnEmpiezaNow.style.borderBottom = '3px solid #ccc';
btnEmpiezaNow.href  = 'https://es.duolingo.com/register';
btnEmpiezaNow.style.textDecoration = 'none';
btnEmpiezaNow.id = 'btnVerdeNow';

// Cambiar le brillo con el cursos
btnEmpiezaNow.addEventListener('mouseover', function() {
    btnEmpiezaNow.style.filter = 'brightness(120%)';
});

// Brillo normal al quitar el cursor
btnEmpiezaNow.addEventListener('mouseout', function() {
    btnEmpiezaNow.style.filter = 'brightness(100%)';
});

// Función para manejas si se agrega o se quita el btn verde y el de btnSpan
window.addEventListener('scroll', () => {
    if (window.scrollY > 360) {
        // Quitar el btnSpan
        if (idiomasBtn && navbarInit.contains(idiomasBtn)) {
            navbarInit.removeChild(idiomasBtn);
        }
        
        // Agregar btnEmpiezaNow
        if (!navbarInit.contains(btnEmpiezaNow)) {
            navbarInit.appendChild(btnEmpiezaNow);
        }
    } else {
        // Quitar el btnEmpiezaNow
        if (navbarInit.contains(btnEmpiezaNow)) {
            navbarInit.removeChild(btnEmpiezaNow);
        }
        
        // Regresa todo a como estab en el inicio.
        if (idiomasBtn && !navbarInit.contains(idiomasBtn)) {
            navbarInit.appendChild(idiomasBtn);
        }
    }
});

// Agregar la sección 1 al cuerpo del documento
document.body.appendChild(section1);

// Creación de la subsección horizontal para las banderas
const subSectionHorizontal = document.createElement('div');
subSectionHorizontal.style.width = "100%";
subSectionHorizontal.style.height = "118px";
subSectionHorizontal.style.backgroundColor = "#FFFFFF";
subSectionHorizontal.style.borderTop = "1px solid #ccc";
subSectionHorizontal.style.borderBottom = "1px solid #ccc";

const containerBanderas = document.createElement('nav');
containerBanderas.style.display = "flex";
containerBanderas.style.alignItems = "center";
containerBanderas.style.justifyContent = "flex-middle-end";
containerBanderas.style.width = "1600px";
containerBanderas.style.height = "26px";
containerBanderas.style.padding = "13px";
containerBanderas.style.margin = "50px 80px -1890px 150px";
containerBanderas.style.border = "none";
containerBanderas.style.marginTop = "30px";

// Agregar containerBanderas al subSectionHorizontal
subSectionHorizontal.appendChild(containerBanderas);

// Agregar subSectionHorizontal al cuerpo del documento
document.body.appendChild(subSectionHorizontal);


// Insertar la subsecciónHorizontal para mostrar las banderas antes de la section1
document.body.insertBefore(subSectionHorizontal, document.getElementById('section2'));


    // Creación de lista de banderas
    const idiomas = document.createElement("ul");
    idiomas.style.display = "flex";
    idiomas.style.padding = "0";
    idiomas.style.margin = "0";
    containerBanderas.appendChild(idiomas);

    // Crear el elemento svg para la flecha izquierda
    const svgFlechaIzquierda = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgFlechaIzquierda.setAttribute("width", "20");
    svgFlechaIzquierda.setAttribute("height", "20");
    svgFlechaIzquierda.setAttribute("viewBox", "0 0 20 20");
    svgFlechaIzquierda.style.marginTop = "8px";
    svgFlechaIzquierda.style.cursor = "pointer";
    

    // Crear el elemento path para la flecha izquierda
    const pathFlechaIzquierda = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathFlechaIzquierda.setAttribute("d", "M10 5 L5 10 L10 15");
    pathFlechaIzquierda.setAttribute("stroke", "gray");
    pathFlechaIzquierda.setAttribute("fill", "none");

    // Agregar el path a svgFlechaIzquierda
    svgFlechaIzquierda.appendChild(pathFlechaIzquierda);
    // Agregar al container de banderas
    idiomas.appendChild(svgFlechaIzquierda);

    // Creación de la bandera USA
    const usaBand = document.createElement("li");
    usaBand.style.display = "flex";
    usaBand.style.marginRight = "18px";
    usaBand.style.alignItems = "center";
    usaBand.style.cursor = "pointer";
    const btnBand = document.createElement("a");
    btnBand.href = "https://es.duolingo.com/course/en/es/Aprender-ingl%C3%A9s";
    const imgBand = document.createElement("img");
    imgBand.src = "src/ingles.webp";
    imgBand.style.height = "25px";
    const spanUsa = document.createElement("span");
    spanUsa.textContent ="INGLÉS";
    spanUsa.style.fontSize = "15px";
    spanUsa.style.fontFamily = '"din-round", san-serif';
    spanUsa.style.color= "#777777";
    spanUsa.style.fontWeight = "bold";
    spanUsa.href = "https://es.duolingo.com/course/en/es/Aprender-ingl%C3%A9s";
    spanUsa.style.marginLeft = "5px";

    // Agregar elementos al contenedor de la bandera
    btnBand.appendChild(imgBand);
    usaBand.appendChild(btnBand);
    usaBand.appendChild(spanUsa);
    idiomas.appendChild(usaBand);

    //BANDERA DE FRANCIA
    const franBand = document.createElement ("li");
    franBand.style.display ="flex";
    franBand.style.alignItems = "center";
    franBand.style.cursor = "pointer";
    franBand.style.marginRight = "18px";
    const btnBand2 = document.createElement("a");
    btnBand2.href = "https://es.duolingo.com/course/fr/es/Aprender-franc%C3%A9ss";
    const imgBand2 = document.createElement("img");
    imgBand2.src = "src/Francia_bandera.webp";
    imgBand2.style.height = "25px";
    const spanFran = document.createElement("span");
    spanFran.textContent = "FRANCÉS";
    spanFran.style.fontSize = "15px";
    spanFran.style.fontFamily = '"din-round", san-serif';
    spanFran.style.color= "#777777";
    spanFran.style.fontWeight = "bold";
    spanFran.href = "https://es.duolingo.com/course/fr/es/Aprender-franc%C3%A9ss";
    spanFran.style.marginLeft = "6px";

    //Agregar elementos de la bandera de francia
    btnBand2.appendChild(imgBand2);
    franBand.appendChild(btnBand2);
    franBand.appendChild(spanFran);
    idiomas.appendChild(franBand);

    //Bandera Alemán
    const gerBand = document.createElement ("li");
    gerBand.style.display ="flex";
    gerBand.style.alignItems = "center";
    gerBand.style.cursor = "pointer";
    gerBand.style.marginRight = "18px"
    const btnBand3 = document.createElement("a");
    btnBand3.href = "https://es.duolingo.com/course/de/es/Aprender-alem%C3%A1n";
    const imgBand3 = document.createElement("img");
    imgBand3.src = "src/Alemania_bandera.webp";
    imgBand3.style.height = "25px";
    const spanGer = document.createElement("span");
    spanGer.textContent = "ALEMÁN";
    spanGer.style.fontSize = "15px";
    spanGer.style.fontFamily = '"din-round", san-serif';
    spanGer.style.color= "#777777";
    spanGer.style.fontWeight = "bold";
    spanGer.href = "https://es.duolingo.com/course/de/es/Aprender-alem%C3%A1n";
    spanGer.style.marginLeft = "6px";

    //Agregar elementos de la bandera de alemania
    btnBand3.appendChild(imgBand3);
    gerBand.appendChild(btnBand3);
    gerBand.appendChild(spanGer);
    idiomas.appendChild(gerBand);

    //Bandera Italiana
    const italyBand = document.createElement ("li");
    italyBand.style.display ="flex";
    italyBand.style.alignItems = "center";
    italyBand.style.cursor = "pointer";
    italyBand.style.marginRight = "18px"
    const btnBand4 = document.createElement("a");
    btnBand4.href = "https://es.duolingo.com/course/it/es/Aprender-italiano";
    const imgBand4 = document.createElement("img");
    imgBand4.src = "src/bandera4.webp";
    imgBand4.style.height = "25px";
    const spanItaly = document.createElement("span");
    spanItaly.textContent = "ITALIANO";
    spanItaly.style.fontSize = "15px";
    spanItaly.style.fontFamily = '"din-round", san-serif';
    spanItaly.style.color= "#777777";
    spanItaly.style.fontWeight = "bold";
    spanItaly.href = "https://es.duolingo.com/course/it/es/Aprender-italiano";
    spanItaly.style.marginLeft = "6px";

    //Agregar elementos de la bandera de Italia
    btnBand4.appendChild(imgBand4);
    italyBand.appendChild(btnBand4);
    italyBand.appendChild(spanItaly);
    idiomas.appendChild(italyBand);

    //Bandera brasil
    const braBand = document.createElement ("li");
    braBand.style.display ="flex";
    braBand.style.alignItems = "center";
    braBand.style.cursor = "pointer";
    braBand.style.marginRight = "18px"
    const btnBand5 = document.createElement("a");
    btnBand5.href = "https://es.duolingo.com/course/pt/es/Aprender-portugu%C3%A9s";
    const imgBand5 = document.createElement("img");
    imgBand5.src = "src/bandera5.webp";
    imgBand5.style.height = "25px";
    const spanBra = document.createElement("span");
    spanBra.textContent = "PORTUGUÉS";
    spanBra.style.fontSize = "15px";
    spanBra.style.fontFamily = '"din-round", san-serif';
    spanBra.style.color= "#777777";
    spanBra.style.fontWeight = "bold";
    spanBra.href = "https://es.duolingo.com/course/pt/es/Aprender-portugu%C3%A9s";
    spanBra.style.marginLeft = "6px";

    //Agregar elementos de la bandera de brasil
    btnBand5.appendChild(imgBand5);
    braBand.appendChild(btnBand5);
    braBand.appendChild(spanBra);
    idiomas.appendChild(braBand);

    //Bandera CATALAN
    const catBand = document.createElement ("li");
    catBand.style.display ="flex";
    catBand.style.alignItems = "center";
    catBand.style.cursor = "pointer";
    catBand.style.marginRight = "18px"
    const btnBand6 = document.createElement("a");
    btnBand6.href = "https://es.duolingo.com/course/ca/es/Aprender-catal%C3%A1n";
    const imgBand6 = document.createElement("img");
    imgBand6.src = "src/catalan.svg";
    imgBand6.style.height = "30px";
    const spanCat = document.createElement("span");
    spanCat.textContent = "CATALÁN";
    spanCat.style.fontSize = "15px";
    spanCat.style.fontFamily = '"din-round", san-serif';
    spanCat.style.color= "#777777";
    spanCat.style.fontWeight = "bold";
    spanCat.href = "https://es.duolingo.com/course/ca/es/Aprender-catal%C3%A1n";
    spanCat.style.marginLeft = "6px";

    //Agregar elementos de la bandera de CATALAN
    btnBand6.appendChild(imgBand6);
    catBand.appendChild(btnBand6);
    catBand.appendChild(spanCat);
    idiomas.appendChild(catBand);

    //Bandera RUSO
    const russBand = document.createElement ("li");
    russBand.style.display ="flex";
    russBand.style.alignItems = "center";
    russBand.style.cursor = "pointer";
    russBand.style.marginRight = "18px"
    const btnBand7 = document.createElement("a");
    btnBand7.href = "https://es.duolingo.com/course/ru/es/Aprender-ruso";
    const imgBand7 = document.createElement("img");
    imgBand7.src = "src/RUSO.png";
    imgBand7.style.height = "25px";
    const spanRuss = document.createElement("span");
    spanRuss.textContent = "RUSO";
    spanRuss.style.fontSize = "15px";
    spanRuss.style.fontFamily = '"din-round", san-serif';
    spanRuss.style.color= "#777777";
    spanRuss.style.fontWeight = "bold";
    spanRuss.href = "https://es.duolingo.com/course/ru/es/Aprender-ruso";
    spanRuss.style.marginLeft = "6px";

    //Agregar elementos de la bandera de ruso
    btnBand7.appendChild(imgBand7);
    russBand.appendChild(btnBand7);
    russBand.appendChild(spanRuss);
    idiomas.appendChild(russBand);

    //Bandera suecia
    const sueBand = document.createElement ("li");
    sueBand.style.display ="flex";
    sueBand.style.alignItems = "center";
    sueBand.style.cursor = "pointer";
    sueBand.style.marginRight = "18px"
    const btnBand8 = document.createElement("a");
    btnBand8.href = "https://es.duolingo.com/course/sv/es/Aprender-sueco";
    const imgBand8 = document.createElement("img");
    imgBand8.src = "src/suecia.png";
    imgBand8.style.height = "35px";
    const spanSue = document.createElement("span");
    spanSue.textContent = "SUECO";
    spanSue.style.fontSize = "15px";
    spanSue.style.fontFamily = '"din-round", san-serif';
    spanSue.style.color= "#777777";
    spanSue.style.fontWeight = "bold";
    spanSue.href = "https://es.duolingo.com/course/sv/es/Aprender-sueco";
    spanSue.style.marginLeft = "6px";

    //Agregar elementos de la bandera de suecia
    btnBand8.appendChild(imgBand8);
    sueBand.appendChild(btnBand8);
    sueBand.appendChild(spanSue);
    idiomas.appendChild(sueBand);

    // Agregar el elemento svg para la flecha derecha
    const svgFlechaDerecha = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgFlechaDerecha.setAttribute("width", "20");
    svgFlechaDerecha.setAttribute("height", "20");
    svgFlechaDerecha.setAttribute("viewBox", "0 0 20 20");
    svgFlechaDerecha.style.marginTop = "9px";
    svgFlechaDerecha.style.cursor = "pointer";

    // Crear el elemento path para la flecha derecha
    const pathFlechaDerecha = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathFlechaDerecha.setAttribute("d", "M5 5 L10 10 L5 15");
    pathFlechaDerecha.setAttribute("stroke", "gray");
    pathFlechaDerecha.setAttribute("fill", "none");

    // Agregar el path a svgFlechaDerecha
    svgFlechaDerecha.appendChild(pathFlechaDerecha);
    //Agregar la flecha al container de banderas
    idiomas.appendChild(svgFlechaDerecha);

    


// Crear la segunda sección con título
const section2 = document.createElement('section');
section2.id = "section2";
section2.style.padding = "0px";
section2.style.marginBottom = "100px";
section2.style.display = "flex";
section2.style.alignItems = "center";
section2.style.justifyContent = "center";
document.body.appendChild(section2);

// Crear la parte izquierda con título y párrafo
const leftDiv2 = document.createElement('div');
leftDiv2.style.marginRight = "10px";
leftDiv2.style.width = "490px";
leftDiv2.style.marginLeft = "60px";
section2.appendChild(leftDiv2);

const title2 = document.createElement('h2');
title2.textContent = 'divertido, efectivo y gratis';
title2.style.fontFamily = 'feather';
title2.style.color= "#58CC02";
title2.style.fontWeight = "750";
title2.style.fontSize = "48px"
title2.style.alignContent="justify-left";
title2.style.fontWeight = 'bold';
leftDiv2.appendChild(title2);

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Aprender con Duolingo es divertido y los estudios demuestran que funciona. ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!';
parrafo2.style.alignContent="left"
parrafo2.innerHTML = parrafo2.textContent.replace('los estudios demuestran que funciona.', '<span style="color: #1CB0F6; font-weight: bold; cursor: pointer;">los estudios demuestran que funciona.</span>');
parrafo2.style.fontFamily = '"din-round", san-serif;';
parrafo2.style.fontWeight = "500";
parrafo2.style.fontSize = "17px";
parrafo2.style.color = "#777777";
leftDiv2.appendChild(parrafo2);

// Crear la parte derecha con gif
const rightDiv2 = document.createElement('div');
rightDiv2.style.marginLeft = "0px";
section2.appendChild(rightDiv2);

const gifImage2 = document.createElement('img');
gifImage2.src = 'src/LINGO-SEÑOR.gif';
rightDiv2.appendChild(gifImage2);

//SECIION3
// Crear la tercera sección con título
const section3 = document.createElement('section');
section3.id = 'section3';
section3.style.padding ='150px';
section3.style.marginBottom = '150px';
section3.style.display = "flex";
section3.style.alignItems = "center";
section3.style.justifyContent = "center";
document.body.appendChild(section3);

// Crear la parte izquierda con gif
const leftDiv3 = document.createElement('div');
leftDiv3.style.marginRight = "80px";
leftDiv3.style.width = "900px"
section3.appendChild(leftDiv3);

const gifImage3 = document.createElement('img');
gifImage3.src = 'src/lingo_niña.gif';
leftDiv3.appendChild(gifImage3);

// Crear la parte derecha con título y párrafo
const rightDiv3 = document.createElement('div');
rightDiv3.style.marginLeft = "10px";
rightDiv3.style.marginRight = "80px";
section3.appendChild(rightDiv3);

const title3 = document.createElement('h2');
title3.textContent = 'respaldado por la ciencia';
title3.style.fontFamily = 'feather';
title3.style.color= "#58CC02";
title3.style.fontWeight = "700";
title3.style.fontSize = "48px"
title3.style.alignContent="justify-left";
title3.style.fontWeight = 'bold';
rightDiv3.appendChild(title3);

const parrafo3 = document.createElement('p');
parrafo3.textContent = 'Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar en otros idiomas.';
parrafo3.textContent.alignContent = "left";
parrafo3.style.alignContent="left"
parrafo3.style.fontFamily = '"din-round", san-serif;';
parrafo3.style.fontWeight = "500";
parrafo3.style.fontSize = "17px";
parrafo3.style.color = "#777777";
rightDiv3.appendChild(parrafo3);


// Crear la cuarta sección con título
const section4 = document.createElement('section');
section4.id = 'section4';
section4.style.padding ='150px';
section4.style.marginBottom = '150px';
section4.style.display = "flex";
section4.style.alignItems = "center";
section4.style.justifyContent = "center";
document.body.appendChild(section4);

// Crear la parte izquierda con título y párrafo
const leftDiv4 = document.createElement('div');
leftDiv4.style.marginRight = "10px";
leftDiv4.style.width = "360px";
section4.appendChild(leftDiv4);

const title4 = document.createElement('h2');
title4.textContent = 'mantén tu motivación';
title4.style.fontFamily = 'feather';
title4.style.color= "#58CC02";
title4.style.fontWeight = "700";
title4.style.fontSize = "48px"
title4.style.alignContent="justify-left";
title4.style.fontWeight = 'bold';
leftDiv4.appendChild(title4);

const parrafo4 = document.createElement('p');
parrafo4.textContent = 'Nuestras funcionalidades y desafíos son divertidos y hacen que aprender se sienta como un juego. ¡Vas a poder formar un hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios de nuestra adorable mascota, Duo, el búho.';
parrafo4.textContent.alignContent = "left";
parrafo4.style.alignContent="left"
parrafo4.style.fontFamily = '"din-round", san-serif;';
parrafo4.style.fontWeight = "500";
parrafo4.style.fontSize = "17px";
parrafo4.style.color = "#777777";
leftDiv4.appendChild(parrafo4);

// Crear la parte derecha con gif
const rightDiv4 = document.createElement('div');
rightDiv4.style.marginLeft = "50px";
rightDiv4.style.marginRight = '-80px';
section4.appendChild(rightDiv4);

const gifImage4 = document.createElement('img');
gifImage4.src = 'src/Eddy_jumprope-.gif';
rightDiv4.appendChild(gifImage4);



// Crear la quinta sección con título
const section5 = document.createElement('section');
section5.id = 'section5';
section5.style.padding = '100px';
section5.style.marginBottom = '100px';
section5.style.display = 'flex';
section5.style.alignItems = 'center';
document.body.appendChild(section5);

// Crear la parte izquierda con gif
const leftDiv5 = document.createElement('div');
leftDiv5.style.marginLeft = "80px";
section5.appendChild(leftDiv5);

const gifImage5 = document.createElement('img');
gifImage5.src = 'src/lingo_lesb.gif';
leftDiv5.appendChild(gifImage5);

// Crear la parte derecha con título y párrafo
const rightDiv5 = document.createElement('div');
rightDiv5.style.marginLeft = "100px";
rightDiv5.style.width = "500px";
rightDiv5.style.marginRight = '80px'
section5.appendChild(rightDiv5);

const title5 = document.createElement('h2');
title5.textContent = 'aprendizaje personalizado';
title5.style.fontFamily = 'feather';
title5.style.color= "#58CC02";
title5.style.fontWeight = "700";
title5.style.fontSize = "48px"
title5.style.alignContent="justify-left";
title5.style.fontWeight = 'bold';
rightDiv5.appendChild(title5);

const parrafo5 = document.createElement('p');
parrafo5.textContent = 'Al combinar lo mejor de la inteligencia artificial y las ciencias de idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender al nivel adecuado y a tu propio ritmo.';
parrafo5.textContent.alignContent = "left";
parrafo5.style.alignContent="left"
parrafo5.style.fontFamily = '"din-round", san-serif;';
parrafo5.style.fontWeight = "500";
parrafo5.style.fontSize = "17px";
parrafo5.style.color = "#777777";
rightDiv5.appendChild(parrafo5);


// Crear la sección
const section6 = document.createElement('section');
section6.id = 'section6';
section6.style.padding = '100px';
section6.style.marginBottom = '100px';
section6.style.display = 'flex';
section6.style.flexDirection = 'column';
section6.style.alignItems = 'center';
section6.style.backgroundImage = 'url("src/fondo_btns.svg")';
section6.style.backgroundRepeat = 'no-repeat';
section6.style.backgroundSize = 'contain';
section6.style.backgroundPosition = 'center bottom';
document.body.appendChild(section6);



// Título centrado de la sección.
const title6 = document.createElement('h2');
title6.textContent = 'Aprende cuando quieras y donde quieras';
title6.style.fontFamily = 'feather';
title6.style.color = "#042C60";
title6.style.fontWeight = "750";
title6.style.fontSize = "65px";
title6.style.textAlign = "center";
title6.style.lineHeight = "1";
title6.style.maxWidth = "600px";
section6.appendChild(title6);

// Crear los contenedores para los botones
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'space-between';
buttonContainer.style.width = '60%';
buttonContainer.style.margin = 'auto';
buttonContainer.style.marginBottom = '20px';
section6.appendChild(buttonContainer);

// Funcion para cambiar a obscurecer el btn por ello se le baja el brillo
function lightenButton(button) {
    button.style.filter = 'brightness(80%)';
}

// Cuando se quita el curso el btn regresa a su brillo original.
function restoreButton(button) {
    button.style.filter = 'brightness(100%)';
}

// Dispoible en la Appstore
const appStoreButton = document.createElement('button');
appStoreButton.type = 'button';
appStoreButton.style.backgroundColor = 'white';
appStoreButton.style.color = '#777777';
appStoreButton.style.padding = '8px 16px';
appStoreButton.style.border = '2px solid #DDDDDD';
appStoreButton.style.borderRadius = '20px';
appStoreButton.style.cursor = 'pointer';
appStoreButton.style.height = '90px';
appStoreButton.style.width = '250px';
appStoreButton.style.marginRight = '10px';
appStoreButton.innerHTML = '<div style="display:flex; align-items:center; justify-content: center;"><img src="src/iconoapple.png" alt="apple" style="width: 30px;"><div style="text-align: center; padding-left: 5px;"><p>Descárgalo en la</p><p>App Store</p></div></div>';

// Eventos para estilos del btn
appStoreButton.addEventListener('mouseover', function() {
    lightenButton(appStoreButton);
});

appStoreButton.addEventListener('mouseout', function() {
    restoreButton(appStoreButton);
});
//Agregarlo como hijo al btn correspondiente
buttonContainer.appendChild(appStoreButton);

// Creación del botón de Google Play
const googlePlayButton = document.createElement('button');
googlePlayButton.type = 'button';
googlePlayButton.style.backgroundColor = 'white';
googlePlayButton.style.color = '#777777';
googlePlayButton.style.padding = '8px 16px';
googlePlayButton.style.border = '2px solid #DDDDDD';
googlePlayButton.style.borderRadius = '20px';
googlePlayButton.style.cursor = 'pointer';
googlePlayButton.style.height = '90px';
googlePlayButton.style.width = '250px';
googlePlayButton.innerHTML = '<div style="display:flex; align-items:center; justify-content: center;"><img src="src/google-play.png" alt="GP" style="width: 25px;"><div style="text-align: center; padding-left: 5px;"><p>Disponible en</p><p>Google Play</p></div></div>';

// Eventos estilo del boton respecto al cursor
googlePlayButton.addEventListener('mouseover', function() {
    lightenButton(googlePlayButton);
});

googlePlayButton.addEventListener('mouseout', function() {
    restoreButton(googlePlayButton);
});
//Agregarlo como hijo al btn correspondiente
buttonContainer.appendChild(googlePlayButton);


//Gif del área dos.
const gifArea2 = document.createElement('div');
gifArea2.style.width = '30%';
gifArea2.style.padding = '20px';
gifArea2.style.border = 'none';
const imgGif2 = document.createElement('img');
imgGif2.src = 'src/cofre.gif';
gifArea2.appendChild(imgGif2);
section6.appendChild(gifArea2);



// Crear la séptima sección con título
const section7 = document.createElement('section');
section7.id = 'section7';
section7.style.padding = '100px';
section7.style.height ='150';
section7.style.marginBottom = '100px';
section7.style.background = '#100F3E';
section7.style.display = 'flex';
document.body.appendChild(section7);

// Crear la parte izquierda con gif
const leftDiv7 = document.createElement('div');
leftDiv7.style.marginRight = "50px";
section7.appendChild(leftDiv7);

const gifImage7 = document.createElement('img');
gifImage7.src = 'src/sp_lingo.gif';
gifImage7.style.height = '500px';
leftDiv7.appendChild(gifImage7);

// Crear la parte derecha con título y párrafo
const rightDiv7 = document.createElement('div');
rightDiv7.style.display = 'flex';
rightDiv7.style.flexDirection = 'column';
rightDiv7.style.justifyContent = 'center';
section7.appendChild(rightDiv7);

// Crear la imagen SVG
const svgImageSp = document.createElement('img');
svgImageSp.src = 'src/Sp_duolingo.svg';
svgImageSp.style.width = '500px';
svgImageSp.style.height = 'auto';
svgImageSp.style.marginBottom = '10px';

// Agregar la imagen al contenedor  rightDiv7
rightDiv7.appendChild(svgImageSp);


// Crear el botón blanco
const whiteButton7 = document.createElement('btn');
whiteButton7.textContent = 'PRUEBA DOS SEMANAS GRATIS';
whiteButton7.style.backgroundColor = 'white';
whiteButton7.style.color = '#00043C';
whiteButton7.style.padding = '15px 30px';
whiteButton7.style.border = 'none';
whiteButton7.style.borderRadius = '8px';
whiteButton7.style.cursor = 'pointer';
whiteButton7.style.fontWeight = 'bold';
whiteButton7.style.alignSelf = 'center';
whiteButton7.style.borderBottom = '4px solid #CCCCCC';
whiteButton7.href = 'https://es.duolingo.com/?isLoggingIn=true';
rightDiv7.appendChild(whiteButton7);




// Crear la octava sección con título
const section8 = document.createElement('section');
section8.id = 'section8';
section8.style.padding = '100px';
section8.style.marginBottom = '100px';
section8.style.display = 'flex';
document.body.appendChild(section8);

// Crear la sección izquierda con título, párrafo y botón
const leftSection = document.createElement('div');
leftSection.style.flex = '1';
leftSection.style.padding = '20px';
leftSection.style.background = '#00000';
leftSection.style.marginLeft = '80px';
section8.appendChild(leftSection);

const titleLeft = document.createElement('h3');
titleLeft.textContent = 'duolingo English Test';
titleLeft.style.fontFamily = 'feather';
titleLeft.style.color= "#58CC02";
titleLeft.style.fontWeight = "700";
titleLeft.style.fontSize = "48px"
titleLeft.style.alignContent="justify-left";
titleLeft.style.fontWeight = 'bold';
leftSection.appendChild(titleLeft);

const parrafoLeft = document.createElement('p');
parrafoLeft.textContent = 'Nuestro examen de inglés es conveniente, rápido y económico. El Duolingo English Test integra los últimos avances en la ciencia e inteligencia artificial para dar a todas las personas la posibilidad de elegir dónde y cuándo hacer el examen y que puedan dar lo mejor de sí.';
parrafoLeft.textContent.alignContent = "left";
parrafoLeft.style.alignContent="left"
parrafoLeft.style.fontFamily = '"din-round", san-serif;';
parrafoLeft.style.fontWeight = "500";
parrafoLeft.style.fontSize = "17px";
parrafoLeft.style.color = "#777777";
leftSection.appendChild(parrafoLeft);


// Crear el botón "Certifica tu inglés"
const certificationButton = document.createElement('button');
certificationButton.textContent = 'Certifica tu inglés';
certificationButton.style.backgroundColor = 'white';
certificationButton.style.color = '#199EDD';
certificationButton.style.padding = '14px 100px';
certificationButton.style.border = '#CECECE solid 2px';
certificationButton.style.borderBottomColor = 'rgba(0, 0, 0, 0.2)';
certificationButton.style.borderRadius = '10px';
certificationButton.style.cursor = 'pointer';
certificationButton.style.fontWeight = 'bold';
certificationButton.style.borderBottom = '4px solid #CCCCCC';
certificationButton.style.transition = 'background-color 0.3s';
certificationButton.addEventListener('mouseover', function () {
    certificationButton.style.backgroundColor = '#f0f0f0';
    certificationButton.style.cursor = 'pointer';
});
certificationButton.addEventListener('mouseout', function () {
    certificationButton.style.backgroundColor = 'white';
});

leftSection.appendChild(certificationButton);

// sección de gif
const rightSection = document.createElement('div');
rightSection.style.flex = '1';
rightSection.style.padding = '20px';
rightSection.style.textAlign = 'center';
section8.appendChild(rightSection);

const image = document.createElement('img');
image.src = 'src/lingo_niña.gif';
image.style.maxWidth = '100%';
rightSection.appendChild(image);

// Crear la novena sección con título
const section9 = document.createElement('section');
section9.id = 'section9';
section9.style.padding = '100px';
section9.style.marginBottom = '100px';
section9.style.display = 'flex';
document.body.appendChild(section9);

// Crear la sección izquierda con el gif
const leftSection9 = document.createElement('div');
leftSection9.style.flex = '1';
leftSection9.style.padding = '20px';
section9.appendChild(leftSection9);

const gifImage9 = document.createElement('img');
gifImage9.src = 'src/patinete.gif';
gifImage9.style.maxWidth = '100%';
leftSection9.appendChild(gifImage9);

// Crear la sección derecha con título, párrafo y botón
const rightSection9 = document.createElement('div');
rightSection9.style.flex = '1';
rightSection9.style.padding = '20px';
rightSection9.style.textAlign = 'center';
section9.appendChild(rightSection9);

// Título y párrafo
const title9 = document.createElement('h3');
title9.textContent = 'duolingo for schools';
title9.style.fontFamily = 'feather';
title9.style.color= "#58CC02";
title9.style.fontWeight = "700";
title9.style.fontSize = "48px"
title9.style.alignContent="justify-left";
title9.style.fontWeight = 'bold';
rightSection9.appendChild(title9);

const parrafo9 = document.createElement('p');
parrafo9.textContent = 'Maestras y maestros: ¡estamos para ayudarlos! Nuestra herramienta gratuita ayuda a tus estudiantes a aprender idiomas a través de la app de Duolingo, tanto dentro como fuera del salón de clases.';
parrafo9.textContent.alignContent = "justify-left";
parrafo9.style.alignContent="justify-left";
parrafo9.style.fontFamily = '"din-round", san-serif;';
parrafo9.style.fontWeight = "500";
parrafo9.style.fontSize = "17px";
parrafo9.style.color = "#777777";
rightSection9.appendChild(parrafo9);

// Crear el botón blanco con letras azules
const btn9 = document.createElement('button');
btn9.textContent = 'POTENCIA TU SALÓN DE CLASE';
btn9.style.color = "#199EDD";
btn9.style.backgroundColor = 'white';
btn9.style.padding = '15px 125px';
btn9.style.border = '#CECECE solid 2px';
btn9.style.borderRadius = '8px';
btn9.style.cursor = 'pointer';
btn9.style.marginTop = '20px';
btn9.style.fontWeight = 'bold';
btn9.style.borderBottom = '4px solid #CCCCCC';
btn9.addEventListener('mouseover', function () {
    btn9.style.filter = 'brightness(80%)';
});
btn9.addEventListener('mouseout', function () {
    btn9.style.filter = 'brightness(100%)';
});
rightSection9.appendChild(btn9);


// Crear la décima sección con título
const section10 = document.createElement('section');
section10.id = 'section10';
section10.style.padding = '100px';
section10.style.marginBottom = '100px';
section10.style.display = 'flex';
section10.style.marginLeft = '50px';
document.body.appendChild(section10);

// Crear la sección izquierda con título, párrafo y botón
const leftSection10 = document.createElement('div');
leftSection10.style.flex = '1';
leftSection10.style.padding = '20px';
leftSection10.style.textAlign = 'left';
section10.appendChild(leftSection10);

// Título y párrafo
const title10 = document.createElement('h3');
title10.textContent = 'duolingo abc';
title10.style.fontFamily = 'feather';
title10.style.color= "#58CC02";
title10.style.fontWeight = "700";
title10.style.fontSize = "48px"
title10.style.alignContent="justify-left";
title10.style.fontWeight = 'bold';
leftSection10.appendChild(title10);

const parrafo10 = document.createElement('p');
parrafo10.textContent = '¡Desde aprender idiomas hasta alfabetismo! Con lecciones de fonética y cuentos divertidos, Duolingo ABC enseña a niños y niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente gratis!';
parrafo9.textContent.alignContent = "justify";
parrafo9.style.alignContent="left"
parrafo9.style.fontFamily = '"din-round", san-serif;';
parrafo9.style.fontWeight = "500";
parrafo9.style.fontSize = "17px";
parrafo9.style.color = "#777777";
leftSection10.appendChild(parrafo10);

// Crear el botón abc
const btn10 = document.createElement('button');
btn10.textContent = 'CONOCE DUOLINGO ABC';
btn10.style.backgroundColor = 'white';
btn10.style.color = '#199EDD';
btn10.style.padding = '15px 125px';
btn10.style.border = '#CECECE solid 2px';
btn10.style.borderRadius = '8px';
btn10.style.cursor = 'pointer';
btn10.style.marginTop = '20px';
btn10.style.borderBottom = '4px solid #CCCCCC';
btn10.style.fontWeight = 'bold';
btn10.style.marginLeft = '50px';

btn10.addEventListener('mouseover', function () {
    btn10.style.filter = 'brightness(80%)';
});
btn10.addEventListener('mouseout', function () {
    btn10.style.filter = 'brightness(100%)';
});
leftSection10.appendChild(btn10);

// Crear la sección derecha con el gif
const rightSection10 = document.createElement('div');
rightSection10.style.flex = '1';
rightSection10.style.padding = '20px';
rightSection10.style.marginRight = '-290px';
section10.appendChild(rightSection10);

const gifImage10 = document.createElement('img');
gifImage10.src = 'src/bear.gif';
gifImage10.style.maxWidth = '100%';
rightSection10.appendChild(gifImage10);


// Crear la undécima sección con título
const section11 = document.createElement('section');
section11.id = 'section11';
section11.style.padding = '100px';
section11.style.marginBottom = '100px';
section11.style.display = 'flex';
document.body.appendChild(section11);


// Crear la sección izquierda con el gif
const leftSection11 = document.createElement('div');
leftSection11.style.flex = '1';
leftSection11.style.padding = '20px';
section11.appendChild(leftSection11);

const gifImage11 = document.createElement('img');
gifImage11.src = 'src/math.gif';
gifImage11.style.maxWidth = '100%';
leftSection11.appendChild(gifImage11);

// Crear la sección derecha con título, párrafo y botón
const rightSection11 = document.createElement('div');
rightSection11.style.flex = '1';
rightSection11.style.padding = '20px';
rightSection11.style.textAlign = 'center';
section11.appendChild(rightSection11);

// Título y párrafo
const titleRight11 = document.createElement('h3');
titleRight11.textContent = 'duolingo math';
titleRight11.textContent = 'Duolingo Math';
titleRight11.style.fontFamily = 'feather';
titleRight11.style.color= "#58CC02";
titleRight11.style.fontWeight = "700";
titleRight11.style.fontSize = "48px"
titleRight11.style.alignContent="justify-left";
titleRight11.style.fontWeight = 'bold';
rightSection11.appendChild(titleRight11);

const parrafo11 = document.createElement('p');
parrafo11.textContent = '¡Prueba nuestras lecciones cortas y gratis para matemáticas! Con Duolingo Math, los estudiantes podrán adelantarse en sus clases de matemáticas y los adultos podrán practicar para mejorar su destreza matemática.';
parrafo11.textContent.alignContent = "justify";
parrafo11.style.alignContent="justify";
parrafo11.style.fontFamily = '"din-round", san-serif;';
parrafo11.style.fontWeight = "500";
parrafo11.style.fontSize = "17px";
parrafo11.style.color = "#777777";
rightSection11.appendChild(parrafo11);

// Crear el botón blanco con letras azules
const btn11 = document.createElement('button');
btn11.textContent = 'Botón Blanco';
btn11.style.backgroundColor = 'white';
btn11.style.color = '#199EDD';
btn11.style.padding = '15px 125px';
btn11   .style.border = '#CECECE solid 2px';
btn11.style.borderRadius = '8px';
btn11.style.cursor = 'pointer';
btn11.style.marginTop = '20px';
btn11.style.fontWeight = 'bold';
btn11.style.borderBottom = '4px solid #CCCCCC';
btn11.addEventListener('mouseover', function () {
    btn11.style.filter = 'brightness(80%)';
});
btn11.addEventListener('mouseout', function () {
    btn11.style.filter = 'brightness(100%)';
});
rightSection11.appendChild(btn11);

// Crear la duodécima sección con título
const section12 = document.createElement('section');
section12.id = 'section12';
section12.style.padding = '100px';
section12.style.marginBottom = '0';
section12.style.display = 'flex';
section12.style.flexDirection = 'column';
section12.style.height = '600px';
section12.style.position = 'relative';



// Título con color verde
const title12 = document.createElement('h2');
title12.textContent = 'Aprende idiomas con Duolingo';
title12.style.color = '#58CC02';
title12.style.fontWeight = '700';
title12.style.fontSize = '64px';
title12.style.textAlign = 'center';
section12.appendChild(title12);

// Botón verde más pequeño
const btn12 = document.createElement('a');
btn12.textContent = 'EMPIEZA AHORA';
btn12.style.backgroundColor = '#58CC02';
btn12.style.color = 'white';
btn12.style.padding = '10px 30px';
btn12.style.border = 'none';
btn12.style.borderRadius = '8px';
btn12.style.cursor = 'pointer';
btn12.style.fontWeight = 'bold';
btn12.style.width = '250px';
btn12.style.margin = '20px auto';
btn12.style.textDecoration = 'none';
btn12.style.textAlign = 'center';
btn12.href = 'https://es.duolingo.com/register';
btn12.addEventListener('mouseover', function () {
    btn12.style.filter = 'brightness(120%)';
});
btn12.addEventListener('mouseout', function () {
    btn12.style.filter = 'brightness(100%)';
});
section12.appendChild(btn12);

// Div para la imagen de fondo (SVG)
const backgroundDiv = document.createElement('div');
const svg = document.createElement('img');
svg.src = 'src/fondoverde.svg';
svg.style.width = '100%';
svg.style.height = '100%';
backgroundDiv.appendChild(svg);
backgroundDiv.style.position = 'absolute';
backgroundDiv.style.top = '160px';
backgroundDiv.style.left = '0';
backgroundDiv.style.width = '100%';
backgroundDiv.style.height = '100%';
section12.appendChild(backgroundDiv);

// Agregar la sección al cuerpo del documento
document.body.appendChild(section12);


//Creacion del footer
const footer = document.createElement('footer');
footer.style.backgroundColor = '#58CC02';
footer.style.fontFamily = 'din-round, sans-serif';
footer.style.fontSize = '18px';
footer.style.fontWeight = 'bold';
footer.style.color = 'white';
footer.style.alignContent = 'center';

//Creacion de los div dentro de contenedor por medio de divs hijos
const footerDiv = document.createElement('div');
footer.appendChild(footerDiv);

//Contenedor del footer, ya que, este footer se compone de dos secciones
const containerFooter = document.createElement('div');
footer.appendChild(containerFooter);

//Creacion de divisiones "columnas" por cada uno de las listas que hay en el footer
//Seccion sobre nosotros
const infoSobreNosotros = document.createElement('div');

//Instancia para la lista de vinculos abajo de cada sección.
const vinculosSobreNosotros = document.createElement('div');
vinculosSobreNosotros.textContent = 'Sobre nosotros';

//agregamos como hijo la seccion anterior al contenedor de InfoSobre nosotros
infoSobreNosotros.appendChild(vinculosSobreNosotros);


//Creacion  de la instacian donde se albergara el arreglo procesado y recorrido por un forEach
const ulSobreNosotros = document.createElement('ul');
ulSobreNosotros.style.listStyleType = 'none';

//Arreglo de los elementos de cada sección
const enlacesSobreNosotros = [
    { text: 'Cursos', href: 'https://es.duolingo.com/info' },
    { text: 'Misión', href: 'https://es.duolingo.com/info' },
    { text: 'Método de enseñanza', href: 'https://es.duolingo.com/approach' },
    { text: 'Eficacia', href: 'https://es.duolingo.com/efficacy' },
    { text: 'Equipo', href: 'https://careers.duolingo.com/about' },
    { text: 'Investigación', href: 'https://research.duolingo.com/' },
    { text: 'Empleo', href: 'https://careers.duolingo.com/' },
    { text: 'Guía para uso de marca', href: 'https://design.duolingo.com/' },
    { text: 'Tienda', href: 'https://store.duolingo.com/' },
    { text: 'Prensa', href: 'https://press.duolingo.com/' },
    { text: 'Inversionistas', href: 'https://investors.duolingo.com/' },
    { text: 'Contáctanos', href: 'https://es.duolingo.com/contact' }
];

//creamos una función para iterar el arra enlacesSobreNosotros y con ellos creamos instancias para albergarlos
//y poder hacer uso de ellos asi como asignamos porpiedades para eficientizar el esctructura.
enlacesSobreNosotros.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    a.style.color = '#a5ed6e';
    a.style.textDecoration = 'none';
    a.style.type ='none';
    li.appendChild(a);
    li.style.listStyleType = 'none';
    li.style.marginLeft = '-40px';
    ulSobreNosotros.appendChild(li);
});

//Agregamos como hijo el contenedor de ulSobrenosotros que es la lista
//a que se muestre en el contenedor  principal infoSobreNosotros
infoSobreNosotros.appendChild(ulSobreNosotros);

//Creacion de la sección Productos ahi se mostraran todos los elementos.
const infoProductos = document.createElement('div');

//Instancia para la lista de vinculos que aparecen abajo de cada sección.
const vinculosProductos = document.createElement('div');
vinculosProductos.textContent = 'Productos';

//agregamos como hijo la seccion anterior al contenedor de InfoProductos
infoProductos.appendChild(vinculosProductos);

//Creacion  de la instacian donde se albergara el arreglo procesado y recorrido por un forEach
const ulProductos = document.createElement('ul');

//Arreglo de la información de la siguiente seccion.
const enlacesProductos = [
    { text: 'Duolingo', href: 'https://es.duolingo.com/' },
    { text: 'Duolingo for Schools', href: 'https://schools.duolingo.com/' },
    { text: 'Duolingo English Test', href: 'https://englishtest.duolingo.com/es' },
    { text: 'Podcast', href: 'https://podcast.duolingo.com/' },
    { text: 'Duolingo for Business', href: 'https://es.duolingo.com/business' },
    { text: 'Súper Duolingo', href: 'https://es.duolingo.com/super' },
    { text: 'Regala Súper Duolingo', href: 'https://es.duolingo.com/gift' }
];

//Recibi el arreglo  para recorrerlo con un forEach
enlacesProductos.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    a.style.color = '#a5ed6e';
    a.style.textDecoration = 'none';
    a.style.type ='none';
    li.appendChild(a);
    li.style.listStyleType = 'none';
    li.style.marginLeft = '-40px';
    li.style.marginTop = '  19  px';
    ulProductos.appendChild(li);
});

//El resultado lo mandamos al contenedor principal como hijo.
infoProductos.appendChild(ulProductos);


//Creacion de la seccion o columna de las aplicaciones.
const appInfo = document.createElement('div');

//Instancia para la lista de vinculos abajo de cada sección.
const vinculosAplicaciones = document.createElement('div');
vinculosAplicaciones.textContent = 'Aplicaciones';

//agregamos como hijo la seccion anterior al contenedor de InfoApli.
appInfo.appendChild(vinculosAplicaciones);

//Creacion de la instancia donde se albergara el arreglo que contien lo elementos de esa sección
const ulAplicaciones = document.createElement('ul');

//Creación del arreglo
const enlacesAplicaciones = [
    { text: 'Duolingo para Android', href: 'https://play.google.com/store/apps/details?hl=es&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsite_map' },
    { text: 'Duolingo para iOS', href: 'https://itunes.apple.com/es/app/duolingo-learn-spanish-french/id570060128?mt=8&at=1010lwpr' }
];

//Recorrer el arreglo y asignar las propiedads para eficientizar le tratado de cada uno de ellos.
enlacesAplicaciones.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    a.style.color = '#a5ed6e';
    a.style.textDecoration = 'none';
    a.style.type ='none';
    li.appendChild(a);
    li.style.listStyleType = 'none';
    li.style.marginLeft = '-40px';
    li.style.marginTop = '40px';
    ulAplicaciones.appendChild(li);
});

//Agregamos al contenedor principal la instacia que albergar el arrelgo procesado.
appInfo.appendChild(ulAplicaciones);

//Creacion de la division principal que se mostrara el pantalla.
const infoAyudaSoporte = document.createElement('div');

//Creacion de la primera div el titulo de dicha.
const vinculosAyudaSoporte = document.createElement('div');
vinculosAyudaSoporte.textContent = 'Ayuda y soporte';

//Agregamos como hijo al contenedor principal, la seccion anterior.
infoAyudaSoporte.appendChild(vinculosAyudaSoporte);

//Instancia que albergara el arreglo procesado.
const ulAyudaSoporte = document.createElement('ul');

//metodo que nos permite la creación del arreglo.
const enlacesAyudaSoporte = [
    { text: 'App de Duolingo', href: 'https://support.duolingo.com/hc/es' },
    { text: 'Schools', href: 'https://duolingoschools.zendesk.com/hc/en-us' },
    { text: 'Duolingo English Test', href: 'https://englishtest.duolingo.com/faq' },
    { text: 'Estado', href: 'https://status.duolingo.com/' }
];

//Procesar el arreglo
enlacesAyudaSoporte.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    a.style.color = '#a5ed6e';
    a.style.textDecoration = 'none';
    a.style.type ='none';
    li.appendChild(a);
    li.style.listStyleType = 'none';
    li.style.marginLeft = '-40px';
    li.style.marginTop = '  25px';
    ulAyudaSoporte.appendChild(li);
});
//Agregamos la instancia al contenedor principal.
infoAyudaSoporte.appendChild(ulAyudaSoporte);

//Creacion de la division principal que se mostrara el pantalla.
const ultimaColumn = document.createElement('div');

//Creacion de la primera div el titulo de dicha.
const ultimoFooter = document.createElement('div');

//Agregamos como hijo al contenedor principal, la seccion anterior.
const vinculosPrivacidad = document.createElement('div');
vinculosPrivacidad.textContent = 'Términos y privacidad';

//Agregamos como hijo al contenedor principal, la seccion anterior.
ultimoFooter.appendChild(vinculosPrivacidad);

const TerminosPrivacidad = document.createElement('ul');

const enlacesTerminosPrivacidad = [
    { text: 'Normas de la comunidad', href: 'https://es.duolingo.com/guidelines' },
    { text: 'Términos', href: 'https://es.duolingo.com/terms' },
    { text: 'Privacidad', href: 'https://es.duolingo.com/privacy' }
];

enlacesTerminosPrivacidad.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    a.style.color = '#a5ed6e';
    a.style.textDecoration = 'none';
    a.style.type ='none';
    li.appendChild(a);
    li.style.listStyleType = 'none';
    li.style.marginLeft = '-40px';
    li.style.marginTop = '  25px';
    TerminosPrivacidad.appendChild(li);
});

//Agreamos el resultado al contenedor principal.
ultimoFooter.appendChild(TerminosPrivacidad);


////Creacion de la division principal que se mostrara el pantalla.
const ultimoSecFoo = document.createElement('div');

//Creacion de la primera div el titulo de dicha.
const vinculosSocF = document.createElement('div');
vinculosSocF.textContent = 'Social';

//Agregamos como hijo al contenedor principal, la seccion anterior.
ultimoSecFoo.appendChild(vinculosSocF);

//Instancia que albergara el arreglo procesado.
const Social = document.createElement('ul');
Social.style.listStyleType = 'none';

//Creación del arreglo.
const enlacesTerminosPrivacidad1 = [
    { text: 'Normas de la comunidad', href: 'https://es.duolingo.com/guidelines' },
    { text: 'Términos', href: 'https://es.duolingo.com/terms' },
    { text: 'Privacidad', href: 'https://es.duolingo.com/privacy' }
];

//Procesar el arreglo
enlacesTerminosPrivacidad1.forEach(enlace => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = enlace.href;
    a.textContent = enlace.text;
    a.style.color = '#a5ed6e';
    a.style.textDecoration = 'none';
    li.appendChild(a);
    li.style.listStyleType = 'none';
    li.style.marginLeft = '-40px';
    Social.appendChild(li);
});
//Agrego los elementos a la sección principal.
ultimoSecFoo.appendChild(Social);

//Agregamos las dos seciones que queda alineads una arriba de la otra
//en la parte inferior derecha
//al contenedor princal que se mostrara en pantalla.
ultimaColumn.appendChild(ultimoFooter);
ultimaColumn.appendChild(ultimoSecFoo);

//
const footerEnd = document.createElement('div');
footerEnd.style.display = 'flex';
footerEnd.style.justifyContent = 'center';
footerEnd.style.alignItems = 'center';
footerEnd.style.width = '95%';
footerEnd.style.height = '600px';
footerEnd.style.margin = '0 auto';
footerEnd.style.gap = '30px';
footerEnd.appendChild(infoSobreNosotros);
footerEnd.appendChild(infoProductos);
footerEnd.appendChild(appInfo);
footerEnd.appendChild(infoAyudaSoporte);
footerEnd.appendChild(ultimaColumn);
footer.appendChild(footerEnd);

//Agregamos el cotenedo de la seccion final al footer principal.
footer.appendChild(footerEnd);

//Agregamos la linea blanca ue divide la secciones con la etiquieta HTML hr
const lineaBlanca = document.createElement('hr');
footer.appendChild(lineaBlanca);

//Creamos una seccion final para ir colocando los elementos qeu se traeran luego.
const footerFinalSec = document.createElement('div');
footerFinalSec.style.display = 'flex';
footerFinalSec.style.flexDirection = 'column';
footerFinalSec.style.alignItems = 'justify-left';
footerFinalSec.style.padding = '20px';
footerFinalSec.style.width = '90%';
footerFinalSec.style.height = '180px';
footerFinalSec.style.backgroundColor = '#58CC02';
footerFinalSec.style.gap = '25px';

//TITULO DE LA SECCION "Idiomas de la página: "
const textoFooterUlt = document.createElement('div');
textoFooterUlt.textContent = 'Idiomas de la página:';
textoFooterUlt.style.fontSize= '18px' ;
textoFooterUlt.style.marginLeft = '30px';

//Agregamos como hijo la seccion anterior.
footerFinalSec.appendChild(textoFooterUlt);

//Instancia que albergara el arreglo procesa
const idiomasUlti = document.createElement('ul');
idiomasUlti.style.display = 'flex';
idiomasUlti.style.flexWrap = 'wrap';
idiomasUlti.style.gap = '15px';
idiomasUlti.style.marginLeft='50px';

//ARREGLOOOO DE IDIOMAS ULTIMASEC.
const idiomasFinal = [
    { text: 'العربية', href: 'https://ar.duolingo.com/' },
    { text: 'বাংলা', href: 'https://bn.duolingo.com/' },
    { text: 'Čeština', href: 'https://cs.duolingo.com/' },
    { text: 'Deutsch', href: 'https://de.duolingo.com/' },
    { text: 'Ελληνικά', href: 'https://el.duolingo.com/' },
    { text: 'English', href: 'https://en.duolingo.com/' },
    { text: 'Español', href: 'https://es.duolingo.com/' },
    { text: 'Français', href: 'https://fr.duolingo.com/' },
    { text: 'हिंदी', href: 'https://hi.duolingo.com/' },
    { text: 'Magyar', href: 'https://hu.duolingo.com/' },
    { text: 'Bahasa Indonesia', href: 'https://id.duolingo.com/' },
    { text: 'Italiano', href: 'https://it.duolingo.com/' },
    { text: '日本語', href: 'https://ja.duolingo.com/' },
    { text: '한국어', href: 'https://ko.duolingo.com/' },
    { text: 'Nederlands', href: 'https://dn.duolingo.com/' },
    { text: 'Polski', href: 'https://pl.duolingo.com/' },
    { text: 'Português', href: 'https://pt.duolingo.com/' },
    { text: 'Română', href: 'https://ro.duolingo.com/' },
    { text: 'Русский', href: 'https://ru.duolingo.com/' },
    { text: 'తెలుగు', href: 'https://te.duolingo.com/' },
    { text: 'ภาษาไทย', href: 'https://th.duolingo.com/' },
    { text: 'Tagalog', href: 'https://tl.duolingo.com/' },
    { text: 'Türkçe', href: 'https://tr.duolingo.com/' },
    { text: 'Українською', href: 'https://uk.duolingo.com/' },
    { text: 'Tiếng Việt', href: 'https://vi.duolingo.com/' },
    { text: '中文', href: 'https://zs.duolingo.com/' }
];

//Procesas idiomas.
idiomasFinal.forEach((idioma, index) => {
    const idiomaItem = document.createElement('li');
    const idiomaLink = document.createElement('a');
    idiomaLink.href = idioma.href;
    idiomaLink.textContent = idioma.text;
    idiomaLink.style.color = '#a5ed6e';
    idiomaLink.style.textDecoration = 'none';
    idiomaLink.style.type ='none';
    idiomaItem.appendChild(idiomaLink);
    idiomaItem.style.listStyleType = 'none';
    idiomasUlti.appendChild(idiomaItem);
    if (index === 13) {
        const br = document.createElement('br');
        idiomasUlti.appendChild(br);
    }
});

//Le agregamos los idiomas del ultimo div al dic de footer final que la ulitma parte.
footerFinalSec.appendChild(idiomasUlti);

//Agregamos al footer nuestra ultima división que es el footer final anterioemtne creado.
footer.appendChild(footerFinalSec);


//Agregamos el footer como hijo al body del document html.
document.body.appendChild(footer);
