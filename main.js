const inputDate = document.querySelector('#inputDate');
const button = document.querySelector('.input-btn');
const inputResult = document.querySelector('.input-result');


// Вешаем слушателя события клик на кнопку
button.addEventListener("click", function (evt) {
    evt.preventDefault();

    // Текущий таймстамп 
    const currentTimestamp = Date.now();

    // Получаем значение из инпут
    const inputDateValue = inputDate.value;

    // Таймстамп введённой в инпут даты
    const inputTimestamp = Date.parse(inputDateValue);

    // Рассчитываем разницу в миллисекундах между текущим временем и временем из инпута
    const timeDifference = inputTimestamp - currentTimestamp;

    // Преобразуем разницу из миллисекунд в количество дней
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Формируем массив для вариантов слова "день" и "осталось"
    const days = ['день', 'дня', 'дней'];
    const left = ['остался', 'осталось'];
    
    // Прописываем условие при отсутствии ввода даты и при разных числах для адекватного отображения слов в соответствии с грамматическими правилами русского языка
    if (inputDateValue === '') {
        inputResult.textContent = 'Пожалуйста, введите дату рождения';
        inputResult.classList.add('error');
    } else if (daysLeft == 1 || daysLeft == 21 || daysLeft == 31) {
        inputResult.textContent = `До Вашего дня рождения ${left[0]} ${daysLeft} ${days[0]}`;
        inputResult.classList.remove('error');
    } else if (daysLeft >= 2 && daysLeft <= 4 || daysLeft >= 22 && daysLeft <=24) {
        inputResult.textContent = `До Вашего дня рождения ${left[1]} ${daysLeft} ${days[1]}`;
        inputResult.classList.remove('error');
    } else {
        inputResult.textContent = `До Вашего дня рождения ${left[1]} ${daysLeft} ${days[2]}`;
        inputResult.classList.remove('error');
    }
});

