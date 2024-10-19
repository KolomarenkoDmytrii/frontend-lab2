class Dress {
    constructor(
        id,
        name,
        clothType,
        day1ReadCount,
        day2ReadCount,
        sewingTime,
        cost,
        imagePath,
        info,
        careInfo,
    ) {
        this.id = id;
        this.name = name;
        this.clothType = clothType;
        this.day1ReadCount = day1ReadCount;
        this.day2ReadCount = day2ReadCount;
        this.sewingTime = sewingTime;
        this.cost = cost;
        this.imagePath = imagePath;
        this.info = info;
        this.careInfo = careInfo;
    }

    createDressInfo() {
        const id = document.createElement('p');
        id.textContent = `№${this.id}`;

        const img = document.createElement('img');
        img.src = this.imagePath;
        img.height = 128;
        img.alt = this.name;

        const careInfoPara = document.createElement('p');
        careInfoPara.textContent = this.careInfo.join('; ');
        careInfoPara.style.display = 'none';
        careInfoPara.classList.add('careinfo');

        const clothTypePara = document.createElement('p');
        clothTypePara.className = 'cloth-type';
        clothTypePara.textContent = `Тип тканини: ${this.clothType}`;

        const sewingTimePara = document.createElement('p');
        sewingTimePara.textContent = `Час пошиття (у днях): ${this.sewingTime}`;

        const costPara = document.createElement('p');
        costPara.textContent = `Вартість: ${this.cost} грн`;

        const infoListPara = document.createElement('p');
        infoListPara.textContent = 'Основні характеристики:';

        const infoList = document.createElement('ol');
        for (const info of this.info) {
            const listItem = document.createElement('li');
            listItem.textContent = info;

            infoList.appendChild(listItem);
        }

        const dd = document.createElement('dd');
        dd.appendChild(id);
        dd.appendChild(img);
        dd.appendChild(careInfoPara);
        dd.appendChild(clothTypePara);
        dd.appendChild(sewingTimePara);
        dd.appendChild(costPara);
        dd.appendChild(infoListPara);
        dd.appendChild(infoList);

        return dd;
    }
}


let dresses = [
    new Dress(
        id=1,
        name='Cукня вечірня',
        clothType='Шовк',
        day1ReadCount=3,
        day2ReadCount=4,
        sewingTime=2,
        cost=1000,
        imagePath='img/dress_1.jpeg',
        info=[
            'Легка та повітряна структура',
            'Висока драпірувальність',
            'Блискуча поверхня',
            'Зносостійкість',
            'Приємна на дотик'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=2,
        name='Джинси',
        clothType='Денім',
        day1ReadCount=3,
        day2ReadCount=4,
        sewingTime=1,
        cost=800,
        imagePath='img/dress_2.jpeg',
        info=[
            'Висока міцність',
            'Різноманітність кольорів',
            'Комфортна посадка',
            'Стійкість до зносу',
            'Легкість у догляді'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=3,
        name='Блуза жіноча',
        clothType='Бавовна',
        day1ReadCount=5,
        day2ReadCount=4,
        sewingTime=4,
        cost=1200,
        imagePath='img/dress_3.jpeg',
        info=[
            'Легка та м\'яка текстура',
            'Гарна повітропроникність',
            'Різноманітність фасонів',
            'Не мнеться',
            'Ідеально підходить для літнього сезону'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=4,
        name='Костюм чоловічий',
        clothType='Вівсяна шерсть',
        day1ReadCount=3,
        day2ReadCount=5,
        sewingTime=4,
        cost=1200,
        imagePath='img/dress_4.jpeg',
        info=[
            'Добра теплоізоляція',
            'Елегантний вигляд',
            'Стійкість до зморшок',
            'Водонепроникність',
            'Висока міцність швів'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=5,
        name='Спідниця плісирована',
        clothType='Поліестер',
        day1ReadCount=3,
        day2ReadCount=4,
        sewingTime=3,
        cost=900,
        imagePath='img/dress_5.jpeg',
        info=[
            'Легкий догляд',
            'Стійкість до зносу',
            'Довговічність кольору',
            'Чудова форма та структура',
            'Відмінна драпірувальність'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=6,
        name='Топ для тренувань',
        clothType='Бавовна',
        day1ReadCount=3,
        day2ReadCount=2,
        sewingTime=3,
        cost=900,
        imagePath='img/dress_6.jpeg',
        info=[
            'Висока еластичність',
            'Швидке висихання',
            'Зручний крій',
            'Стійкість до деформацій',
            'Додаткова вологопоглинальність'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=7,
        name='Пальто жіноче',
        clothType='Вовняна тканина',
        day1ReadCount=4,
        day2ReadCount=2,
        sewingTime=3,
        cost=1500,
        imagePath='img/dress_7.jpeg',
        info=[
            'Чудова теплоізоляція',
            'Стильний зовнішній вигляд',
            'Стійкість до шкідливих впливів',
            'Довговічність',
            'Різноманітність кольорів і фасонів'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=8,
        name='Футболка чоловіча',
        clothType='Бавовна',
        day1ReadCount=4,
        day2ReadCount=4,
        sewingTime=2,
        cost=900,
        imagePath='img/dress_8.jpeg',
        info=[
            'М\'яка та дихаюча структура',
            'Комфортна для носіння',
            'Легкість в догляді',
            'Різноманітні дизайни та кольори',
            'Стійкість до усадки'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=9,
        name='Шорти для відпочинку',
        clothType='Бавовна',
        day1ReadCount=4,
        day2ReadCount=4,
        sewingTime=2,
        cost=900,
        imagePath='img/dress_9.jpeg',
        info=[
            'Легка і гладка текстура',
            'Приємний на дотик',
            'Не мнуться',
            'Хороша вентиляція',
            'Яскраві кольори'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    ),
    new Dress(
        id=10,
        name='Светр в\'язанний',
        clothType='Вовняна тканина',
        day1ReadCount=4,
        day2ReadCount=4,
        sewingTime=2,
        cost=1000,
        imagePath='img/dress_10.jpeg',
        info=[
            'Теплий і легкий',
            'Висока зносостійкість',
            'Не викликає алергій',
            'Легко прати та сушити',
            'Екологічно чистий матеріал'
        ],
        careInfo=['Прати в холодній воді', 'Не прасувати']
    )
]

function addDressesToCatalog(dresses) {
    const catalog = document.querySelector('.catalog');

    for (const dress of dresses) {
        const dt = document.createElement('dt');
        dt.textContent = dress.name;
        catalog.appendChild(dt);

        catalog.appendChild(dress.createDressInfo());
    }
}

function clearCatalog() {
    const catalog = document.querySelector('.catalog');

    // прибираємо всі пункти в каталозі
    while (catalog.firstChild) {
        catalog.removeChild(catalog.lastChild);
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Упорядкування назв товарів за терміном пошиття
function sortBySewingTime(dresses) {
    const sortedDresses =
        dresses.toSorted((a, b) => a.sewingTime - b.sewingTime);

    const catalog = document.querySelector('.catalog');

    clearCatalog();

    addDressesToCatalog(sortedDresses);
}

// Знаходження середньої кількості користувачів, що читають про товари, з одним
// і тим же терміном
function showMediumViewsBySewingTime(dresses) {
    const mediumViews = document.getElementById('medium-views');
    const grouped = Object.groupBy(dresses, ({sewingTime}) => sewingTime);

    for (const [key, value] of Object.entries(grouped)) {
        const sum = value.reduce(
            (accumulator, currentValue) =>
                accumulator + currentValue.day1ReadCount +
                    currentValue.day2ReadCount,
            0
        );
        // множимо на 2, бо рахуємо і для дня 1, і для дня 2
        const medium = sum / (value.length * 2);

        const listItem = document.createElement('li');
        listItem.textContent = `Середня кількість користувачів для терміну (в днях) тривалістю ${key}: ${medium}`;

        mediumViews.appendChild(listItem);

        // console.log(medium);
    }
}

// Знаходження товару, який має максимальну кількість користувачів, що
// прочитали про нього за добу_2 та вивід типу тканини для пошиття
function showMaxViewedByDay2(dresses) {
    const max = dresses.reduce(
        (a, b) => Math.max(a.day2ReadCount, b.day2ReadCount) === a.day2ReadCount?
            a : b
    )

    const infoList = document.getElementById('max-viewed-day-2');

    const nameItem = document.createElement('li');
    nameItem.textContent = `Назва: ${max.name}`;

    const clothTypeItem = document.createElement('li');
    clothTypeItem.textContent = `Тип тканини: ${max.clothType}`;

    infoList.appendChild(nameItem);
    infoList.appendChild(clothTypeItem);
}

// додавання нового товару до 10 записів: якщо у нього відсутня хоч якась інфо,
// то додаємо в кінець списку; якщо вся інфо є, то шукаємо місце у списку, що
// відсортований у порядку зростання вартості пошиття.
function addDresses(dresses, dress) {
    for (const [key, value] of Object.entries(dress)) {
        if ((value === undefined || value === null || value === '') && key !== 'imagePath' ) {
            dresses.push(dress);
            return;
        }
    }

    dresses.push(dress);
    dresses.sort((a, b) => a.cost - b.cost);
}

const sortButton = document.getElementById('sort-button');
sortButton.addEventListener('click', () => sortBySewingTime(dresses));

const addDressForm = document.getElementById('add-dress-form');
addDressForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const dress = new Dress(
        id=getRandomInt(10000),
        name=addDressForm.elements['name'].value,
        clothType=addDressForm.elements['cloth-type'].value,
        day1ReadCount=0,
        day2ReadCount=0,
        sewingTime=Number(addDressForm.elements['sewing-time'].value),
        cost=Number(addDressForm.elements['cost'].value),
        imagePath='',
        info=addDressForm.elements['info'].value.split(';')
    )

    addDresses(dresses, dress);
    console.dir(dresses);

    clearCatalog();
    addDressesToCatalog(dresses);
});

/*
Обчислити тривалість пошиття всього замовлення (декількох товарів
одночасно) за типом тканини: якщо 1 товар, то тривалість пошиття дорівнює
вказаній, якщо товарів до 3-х, то тривалість пошиття кожного множимо на 1,1
від вказаної у комірці, у всіх інших випадках тривалість пошиття кожного товару
множимо на 2.
*/
const orderForm = document.getElementById('order');
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let orderedDresses = dresses.filter(
        (dress) => dress.clothType.toLowerCase() === orderForm.elements['cloth-type'].value.toLowerCase()
    );

    const totalSewingTime = orderedDresses.reduce(
        (accumulator, currentValue) => accumulator + currentValue.sewingTime,
        0
    )
    const orderSewingTimePara = document.getElementById('order-sewing-time-cost');
    if (orderedDresses.length == 1) {
        orderSewingTimePara.textContent =
            "Загальна тривалість виконання замовлення (в днях): " +
                totalSewingTime.toFixed(2);
    }
    else if (orderedDresses.length <= 3) {
        orderSewingTimePara.textContent =
            "Загальна тривалість виконання замовлення (в днях): " +
                (totalSewingTime * 1.1).toFixed(2);
    }
    else {
        orderSewingTimePara.textContent =
            "Загальна тривалість виконання замовлення (в днях): " +
                (totalSewingTime * 2).toFixed(2);
    }
});

showMediumViewsBySewingTime(dresses);
showMaxViewedByDay2(dresses);
addDressesToCatalog(dresses);


////////////////////////////////////////////////////////////////////////////////

// 2. Користувач має можливість натискаючи на кнопку «Типи тканини» на сторінці
// «Каталог», бачити випадаюче підменю з переліком доступних для шиття тканин.
const dropMenuButton = document.getElementById('dropmenu-button');
const dropMenu = document.getElementById('dropmenu');
dropMenuButton.addEventListener('click', () => {
    dropMenu.style.display = 'block';
});
dropMenu.addEventListener('mouseleave', () => {
    dropMenu.style.display = 'none';
});


// 3. На сторінці «Каталог», при наведені мишки користувачем на ілюстративне
// фото, воно стає фліп-картою, де на зворотній стороні надані умови прання
// виробу з даної тканини, тощо.
const catalog = document.querySelector('.catalog');
catalog.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'IMG') {
        event.target.style.display = 'none';
        console.log(event.target.style);
        // наступний абзац з інформацією про догляд стає видимий
        event.target.nextSibling.style.display = 'block';
    }
});
catalog.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('careinfo')) {
        event.target.style.display = 'none';
        // попереднє зображення стає видиме
        event.target.previousSibling.style.display = 'block';
        event.target.previousSibling.style.marginLeft = 'auto';
        event.target.previousSibling.style.marginRight = 'auto';
        // event.target.previousSibling.style.width = '50%';
    }
});
