const currentColorBtn = document.querySelector('#currentColor'),
    options = document.querySelector('.options');

currentColorBtn.addEventListener('click', () => {
    options.classList.toggle('active');
})

// -------------------------------------------------------------------------------------------------
const darkLight = document.querySelector('#darkLight'),
    root = document.querySelector(':root'),
    color1 = getComputedStyle(root).getPropertyValue('--color1'),
    color2 = getComputedStyle(root).getPropertyValue('--color2'),
    color3 = getComputedStyle(root).getPropertyValue('--color3'),
    color4 = getComputedStyle(root).getPropertyValue('--color4'),
    colorDark = getComputedStyle(root).getPropertyValue('--dark');

// color1
const colorBtn1 = document.querySelector('#color1');
colorBtn1.addEventListener('click', () => {
    root.style.setProperty('--currentColor', color1);
    localStorage.setItem('currentColor', getComputedStyle(root).getPropertyValue('--currentColor'));
})

// color2
const colorBtn2 = document.querySelector('#color2');
colorBtn2.addEventListener('click', () => {
    root.style.setProperty('--currentColor', color2);
    localStorage.setItem('currentColor', getComputedStyle(root).getPropertyValue('--currentColor'));
})

// color3
const colorBtn3 = document.querySelector('#color3');
colorBtn3.addEventListener('click', () => {
    root.style.setProperty('--currentColor', color3);
    localStorage.setItem('currentColor', getComputedStyle(root).getPropertyValue('--currentColor'));
})

// color4
const colorBtn4 = document.querySelector('#color4');
colorBtn4.addEventListener('click', () => {
    root.style.setProperty('--currentColor', color4);
    localStorage.setItem('currentColor', getComputedStyle(root).getPropertyValue('--currentColor'));
})

// darkMode
darkLight.addEventListener('click', () => {
    root.classList.toggle('dark');
    root.classList.remove('null');
    localStorage.setItem('rootClass', root.classList);

    if (localStorage.getItem('rootClass', 'dark')) {
        darkLight.innerHTML = '<i class="fas fa-moon"></i>'
        localStorage.setItem('darkLightHTML', darkLight.innerHTML)

        darkLight.style.background = '#000'
        localStorage.setItem('darkLightBG', darkLight.style.background)
    } else {
        darkLight.innerHTML = '<i class="fas fa-sun"></i>'
        localStorage.setItem('darkLightHTML', darkLight.innerHTML)

        darkLight.style.background = 'rgb(168, 168, 168)'
        localStorage.setItem('darkLightBG', darkLight.style.background)
    }
});

const localclass = () => {
    let currentColor = localStorage.getItem('currentColor');
    root.style.setProperty('--currentColor', currentColor);

    let getRootClass = localStorage.getItem('rootClass');
    root.classList.add(getRootClass);

    const darkLightHTML = localStorage.getItem('darkLightHTML');
    if (!darkLightHTML) {
        darkLight.innerHTML = '<i class="fas fa-sun"></i>';
        darkLight.style.background = localStorage.getItem('darkLightBG')
    } else {
        darkLight.innerHTML = darkLightHTML;
        darkLight.style.background = localStorage.getItem('darkLightBG')
    }
}

localclass();