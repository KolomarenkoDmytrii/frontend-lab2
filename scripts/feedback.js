class Feedback {
    constructor(
        name,
        familyName,
        age,
        email,
        purposeOfFeedback,
        isClient,
        details,
        date
    ) {
        this.name = name;
        this.familyName = familyName;
        this.age = age;
        this.email = email;
        this.purposeOfFeedback = purposeOfFeedback;
        this.isClient = isClient;
        this.details = details;
        this.date = date === undefined? new Date(Date.now()) : date;
    }

    createFeedbackInfo() {
        const nameItem = document.createElement('li');
        nameItem.textContent = `Ім'я: ${this.name}`;

        const familyNameItem = document.createElement('li');
        familyNameItem.textContent = `Прізвище: ${this.familyName}`;

        const ageItem = document.createElement('li');
        ageItem.textContent = `Вік: ${this.age}`;

        const emailItem = document.createElement('li');
        emailItem.textContent = `Електронна пошта: ${this.email}`;

        const purposeOfFeedbackItem = document.createElement('li');
        switch (this.purposeOfFeedback) {
            case 'collaboration':
                purposeOfFeedbackItem.textContent =
                    'Причина звернення: співпраця';
                break;
            case 'complaint':
                purposeOfFeedbackItem.textContent =
                    'Причина звернення: скарга на неякісний пошив';
                break;
            case 'offer':
                purposeOfFeedbackItem.textContent =
                    'Причина звернення: пропозиція';
                break;
            case 'defect':
                purposeOfFeedbackItem.textContent =
                    'Причина звернення: наявність помилки';
                break;
            default:
                purposeOfFeedbackItem.textContent =
                    'Причина звернення: відсутня';
        }

        const isClientItem = document.createElement('li');
        isClientItem.textContent = `Чи клієнт: ${this.isClient? 'так' : 'ні'}`;

        const detailsItem = document.createElement('li');
        detailsItem.textContent = `Подробиці: ${this.details}`;

        const dateItem = document.createElement('li');
        dateItem.textContent = 'Дата звернення: ' +
            this.date.toLocaleDateString(
                'uk-UA',
                {hour: 'numeric', minute: 'numeric', second: 'numeric'}
            );

        const infoList = document.createElement('ul');
        infoList.appendChild(nameItem);
        infoList.appendChild(familyNameItem);
        infoList.appendChild(ageItem);
        infoList.appendChild(emailItem);
        infoList.appendChild(purposeOfFeedbackItem);
        infoList.appendChild(isClientItem);
        infoList.appendChild(detailsItem);
        infoList.appendChild(dateItem);

        return infoList;
    }
}


let feedbacks = [
    new Feedback(
        name='Петро',
        familyName='Петренко',
        age=20,
        email='petro1@post.com',
        purposeOfFeedback='defect',
        isClient=true,
        details='',
        date=new Date('2024-08-17T13:30:00')
    ),
    new Feedback(
        name='Катерина',
        familyName='Петренко',
        age=40,
        email='kateryna2@post.com',
        purposeOfFeedback='offer',
        isClient=false,
        details='',
        date=new Date('2024-08-17T13:30:00')
    ),
    new Feedback(
        name='Іван',
        familyName='Петренко',
        age=20,
        email='ivan3@post.com',
        purposeOfFeedback='complaint',
        isClient=true,
        details='',
        date=new Date('2024-09-20T13:30:00')
    ),
    new Feedback(
        name='Олег',
        familyName='Зимовій',
        age=70,
        email='oleh4@post.com',
        purposeOfFeedback='offer',
        isClient=false,
        details=''
    ),
    new Feedback(
        name='Ольга',
        familyName='Вовченко',
        age=25,
        email='olha5@post.com',
        purposeOfFeedback='defect',
        isClient=true,
        details=''
    ),
    new Feedback(
        name='Сергій',
        familyName='Вовченко',
        age=30,
        email='serhii6@post.com',
        purposeOfFeedback='collaboration',
        isClient=false,
        details=''
    ),
    new Feedback(
        name='Арсен',
        familyName='Деривовк',
        age=60,
        email='arsen7@post.com',
        purposeOfFeedback='defect',
        isClient=true,
        details=''
    ),
    new Feedback(
        name='Василь',
        familyName='Черемош',
        age=40,
        email='vasyl8@post.com',
        purposeOfFeedback='complaint',
        isClient=true,
        details=''
    ),
    new Feedback(
        name='Роман',
        familyName='Шишкаренко',
        age=60,
        email='roman9@post.com',
        purposeOfFeedback='defect',
        isClient=true,
        details=''
    ),
    new Feedback(
        name='Тимофій',
        familyName='Гончар',
        age=72,
        email='tymofii10@post.com',
        purposeOfFeedback='defect',
        isClient=true,
        details=''
    )
]

function showFeedbacks(feedbacks) {
    const feedbacksSection = document.getElementById('feedbacks');

    for (const feedback of feedbacks) {
        feedbacksSection.appendChild(feedback.createFeedbackInfo());
    }
}

function clearChildElements(parent) {
    // const feedbacksSection = document.getElementById('feedbacks');

    // прибираємо всі пункти
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

// вивести мінімальний вік користувача, що звернувся, його E-mail та дату
// звернення.
function showMinimalAgeUser(feedbacks) {
    const min = feedbacks.reduce(
        (a, b) => Math.min(a.age, b.age) === a.age?
            a : b
    )

    const userInfoList = document.getElementById('minimal-age-user');

    const ageItem = document.createElement('li');
    ageItem.textContent = `Вік: ${min.age}`;

    const emailItem = document.createElement('li');
    emailItem.textContent = `Електронна пошта: ${min.email}`;

    const dateItem = document.createElement('li');
    dateItem.textContent = 'Дата звернення: ' +
        min.date.toLocaleDateString(
            'uk-UA',
            {hour: 'numeric', minute: 'numeric', second: 'numeric'}
        );

    clearChildElements(userInfoList);
    userInfoList.appendChild(ageItem);
    userInfoList.appendChild(emailItem);
    userInfoList.appendChild(dateItem);
}

// Вивести мінімальний вік користувача, що звернувся, його E-mail та дату
// звернення.
function showAgesCount(feedbacks) {
    let youngCount = 0;
    let mediumCount = 0;
    let oldCount = 0;

    for (const feedback of feedbacks) {
        if (feedback.age < 30) {
            youngCount++;
        }
        else if (feedback.age >= 30 && feedback.age < 70) {
            mediumCount++;
        }
        else {
            oldCount++;
        }
    }

    const youngCountItem = document.createElement('li');
    youngCountItem.textContent = `Молоді: ${youngCount}`;

    const mediumCountItem = document.createElement('li');
    mediumCountItem.textContent = `Середнього віку: ${mediumCount}`;

    const oldCountItem = document.createElement('li');
    oldCountItem.textContent = `Похилого віку: ${oldCount}`;

    const agesCountList = document.getElementById('ages-count');
    clearChildElements(agesCountList);
    agesCountList.appendChild(youngCountItem);
    agesCountList.appendChild(mediumCountItem);
    agesCountList.appendChild(oldCountItem);
}

function showSortedFeedbacks(feedbacks) {
    feedbacks.sort((a, b) => a.email.localeCompare(b.email));

    const feedbacksSection = document.getElementById('feedbacks');
    clearChildElements(feedbacksSection);
    showFeedbacks(feedbacks);
}

showFeedbacks(feedbacks);

const showMinimalAgeUserButton = document.getElementById('show-minimal-age-user-button');
showMinimalAgeUserButton.addEventListener('click', () => showMinimalAgeUser(feedbacks));

const showAgesCountButton = document.getElementById('show-ages-count-button');
showAgesCountButton.addEventListener('click', () => showAgesCount(feedbacks));

const showSortedFeedbacksButton = document.getElementById('show-sorted-feedbacks-button');
showSortedFeedbacksButton.addEventListener('click', () => showSortedFeedbacks(feedbacks));

// Виведення переліку користувачів, який звернулись продовж певного місяця, в
// деякий заданий момент часу.
const showFeedbackForm = document.getElementById('show-feedback-form');
showFeedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const month = Number(showFeedbackForm.elements['month'].value) - 1;
    const hour = Number(showFeedbackForm.elements['hour'].value);

    const found = feedbacks.filter(
        (feedback) =>
            feedback.date.getMonth() === month &&
                feedback.date.getHours() === hour
    );

    const output = document.getElementById('show-feedback-output');
    clearChildElements(output);
    for (const feedback of found) {
        const listItem = document.createElement('li');
        listItem.textContent = `${feedback.name} ${feedback.familyName}`;
        output.appendChild(listItem);
    }
});

// Додання нового зворотного зв'язку
const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const showErrorMessagePara = document.getElementById('show-error-message')
    if (!feedbackForm.elements['is-agree'].checked) {
        showErrorMessagePara.textContent = 'Підвердіть згоду на обробку інформації';
        return;
    }

    feedback = new Feedback(
        name=feedbackForm.elements['name'].value,
        familyName=feedbackForm.elements['family-name'].value,
        age=Number(feedbackForm.elements['age'].value),
        email=feedbackForm.elements['email'].value,
        purposeOfFeedback=feedbackForm.elements['purpose-of-feedback'].value,
        isClient=feedbackForm.elements['client-yes'].checked,
        details=feedbackForm.elements['details'].value
    );

    feedbacks.push(feedback);
    const feedbacksSection = document.getElementById('feedbacks');
    feedbacksSection.appendChild(feedback.createFeedbackInfo());

    showErrorMessagePara.textContent = '';
});



////////////////////////////////////////////////////////////////////////////////


// 4. На сторінці «Зворотній зв’язок» при наведені курсора миші користувачем
// на поле «Детально», воно змінює колір фону, з’являється рамка та тінь від
// неї, а праворуч нього з’являється текст - підказка (tooltip) «Дякуючи Вам,
// ми стаємо кращі! Конкретизуйте мету звернення, будь ласка».
const feedbackDetails = document.getElementById('details');
const feedbackDetailsStyle = {
    background: feedbackDetails.style.background,
    border: feedbackDetails.style.border,
    boxShadow: feedbackDetails.style.boxShadow,
}
const tooltip = document.getElementById('details-tooltip');

feedbackDetails.addEventListener('mouseover', () => {
    feedbackDetails.style.background = '#DDD';
    feedbackDetails.style.border = '3px solid black';
    feedbackDetails.style.boxShadow = '5px 5px 1px 1px darkgray';

    tooltip.style.visibility = 'visible';
});

feedbackDetails.addEventListener('mouseout', () => {
    feedbackDetails.style.background = feedbackDetailsStyle.background;
    feedbackDetails.style.border = feedbackDetailsStyle.border;
    feedbackDetails.style.boxShadow = feedbackDetailsStyle.boxShadow;

    tooltip.style.visibility = 'hidden';
});
