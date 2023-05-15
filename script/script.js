/* Menu Slider */
function changeSlide(imagePath) {
  document.getElementById('menu-slide').src = imagePath;
}









/* Calculator for KG */

// Получаем элементы формы и кнопки
// const form = document.querySelector('.calorie-calculator form');
// const ageInput = document.querySelector('#age');
// const heightInput = document.querySelector('#height');
// const weightInput = document.querySelector('#weight');
// const genderSelect = document.querySelector('#gender');
// const activityLevelSelect = document.querySelector('#activity-level');
// const caloriesOutput = document.querySelector('#calories');

// // Назначаем обработчик события submit на форму
// form.addEventListener('submit', function(event) {
//   // Предотвращаем стандартное поведение формы
//   event.preventDefault();

//   // Получаем значения из всех полей формы
//   const age = ageInput.value;
//   const height = heightInput.value;
//   const weight = weightInput.value;
//   const gender = genderSelect.value;
//   const activityLevel = activityLevelSelect.value;

//   // Вычисляем суточную норму калорий
//   let bmr;
//   if (gender === 'male') {
//     bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
//   } else {
//     bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
//   }
//   const calories = Math.round(bmr * activityLevel);

//   // Отображаем результат на странице
//   caloriesOutput.textContent = calories;
// });
// получаем элементы формы
const genderSelect = document.getElementById('gender-select');
const ageInput = document.getElementById('age-input');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const activitySelect = document.getElementById('activity-select');
const calculateButton = document.getElementById('calculate-button');
const resultValue = document.getElementById('result-value');

// добавляем обработчик события на кнопку "Рассчитать"
calculateButton.addEventListener('click', () => {
  // получаем значения полей формы
  const gender = genderSelect.value;
  const age = ageInput.value;
  const height = heightInput.value;
  const weight = weightInput.value;
  const activity = activitySelect.value;

  // вычисляем суточную норму калорий
  let bmr;
  if (gender === 'male') {
    bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  } else {
    bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }

  let result;
  if (activity === 'low') {
    result = bmr * 1.2;
  } else if (activity === 'moderate') {
    result = bmr * 1.55;
  } else {
    result = bmr * 1.9;
  }

  // выводим результат на страницу
  resultValue.textContent = Math.round(result);
});


/* Menu */



/* Modal Page about Delivery */

const deliveryButton = document.querySelector('.delivery');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.close-modal');

deliveryButton.addEventListener('click', () => {
  modalOverlay.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

window.addEventListener("click", (event) => {
  if (event.target == modalOverlay) {
    modalOverlay.style.display = "none";
  }
  
});


/* Auth and Registration */

// Получаем модальное окно

// получаем элементы кнопок Вход и Регистрация
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

// получаем элементы модальных окон Вход и Регистрация
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");

// получаем элементы закрытия модальных окон
const loginCloseBtn = document.getElementsByClassName("close")[0];
const registerCloseBtn = document.getElementsByClassName("close-reg")[0];

// добавляем обработчики событий на клик по кнопкам Вход и Регистрация
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

registerBtn.addEventListener("click", () => {
  registerModal.style.display = "block";
});

// добавляем обработчики событий на клик по кнопкам закрытия модальных окон
loginCloseBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

registerCloseBtn.addEventListener("click", () => {
  registerModal.style.display = "none";
});

// добавляем обработчик события на клик вне модального окна, чтобы закрыть его
window.addEventListener("click", (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
});


/* Block for chatbot */

const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.parentNode.classList.toggle('active');
  });
});




/* Часть 2 - Функционал сайта */

/* Авторизация  
    1: Регистрация
*/

// Получаем ссылку на форму
const registerForm = document.querySelector('#register-modal form');

// Добавляем обработчик события отправки формы
registerForm.addEventListener('submit', function(event) {
  // Отменяем стандартное поведение отправки формы браузером
  event.preventDefault();

  // Получаем значения полей формы
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#emailReg').value;
  const phone = document.querySelector('#phone2').value;
  const password = document.querySelector('#passwordReg').value;
  const confirmPassword = document.querySelector('#passwordReg2').value;

  // Отправляем данные на сервер с помощью AJAX-запроса
  const xhr = new XMLHttpRequest();
  const url = 'ссылка на сервер, который будет обрабатывать запрос регистрации';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // В случае успешной регистрации перенаправляем пользователя на страницу с заказами
      window.location.href = 'ссылка на страницу с заказами';
    }
  };
  const data = JSON.stringify({firstName, lastName, email, phone, password, confirmPassword});
  xhr.send(data);
});


