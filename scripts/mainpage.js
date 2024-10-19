const miscpics = document.querySelectorAll('img.miscpic');
let miscpicsArray = Array.from(miscpics)

let randomMiscpic = miscpicsArray[Math.floor(Math.random() * miscpics.length)]
randomMiscpic.style.visibility = 'visible';

setInterval(() => {
    randomMiscpic.style.visibility = 'hidden';

    randomMiscpic = miscpicsArray[Math.floor(Math.random() * miscpics.length)]
    randomMiscpic.style.visibility = 'visible';
}, 3000);
