let select = (name) => document.querySelector(`${name}`);
let create = (el) => document.createElement(`${el}`);

let inp = select('.tasks input');
let ul = select('.tasklist ul');


inp.addEventListener('keyup', (e) => {

    if (e.key == 'Enter') {

        if (inp.value == '' || inp.value == ' ' || inp.value == '   ') {
            alert('Please Enter Text');
        } else {
            let li = create('li');
            let inpp = create('input');
            let img = create('img');

            li.appendChild(inpp);
            inpp.setAttribute('type', 'checkbox');
            li.innerHTML += inp.value;
            li.appendChild(img);
            img.setAttribute('src', 'images/icon-cross.svg');

            img.addEventListener('click', (e) => {
                e.target.parentElement.remove();
            })

            li.appendChild(img);
            ul.appendChild(li);
            inp.value = '';
        }



    }
})


let toggleButton = select('.head button');

let lightM = false;

toggleButton.addEventListener('click', () => {
    if (lightM == false) {
        eanbleLighMode();
    } else {
        disableLightMode();
    }
});

let sun = select('.head button img#sun');
let moon = select('.head button img#moon');
let body = select('body');
let r = select(':root');
let x = window.matchMedia("(min-width: 700px)");

function eanbleLighMode() {

    sun.classList.add('dnone');
    moon.classList.remove('dnone');

    if (x.matches) {
        body.style.backgroundImage = 'url(images/bg-desktop-light.jpg)';

    } else {
        body.style.backgroundImage = 'url(images/bg-mobile-light.jpg)';
    }


    r.style.setProperty('--main', 'var(--lightM)');
    r.style.setProperty('--bg', 'var(--lightB)');
    r.style.setProperty('--txtClr', 'var(--darkM)');

    lightM = true;
};

function disableLightMode() {

    moon.classList.add('dnone');
    sun.classList.remove('dnone');

    if (x.matches) {
        body.style.backgroundImage = 'url(images/bg-desktop-dark.jpg)';

    } else {
        body.style.backgroundImage = 'url(images/bg-mobile-dark.jpg)';
    }

    r.style.setProperty('--main', 'var(--darkM)');
    r.style.setProperty('--bg', 'var(--darkB)');
    r.style.setProperty('--txtClr', 'var(--lightM)');
    lightM = false;
};