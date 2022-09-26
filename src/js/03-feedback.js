import throttle from 'lodash.throttle';
import metodStorage from './localstorage';

const formRef = document.querySelector('.feedback-form');
let saveData = {};
const LOCALE_STORAGE_KEY = 'feedback-form-state';
initPage();
formRef.addEventListener('input', throttle(formInput, 500));
function formInput(event) {
  const { name, value } = event.target;
  saveData[name] = value;
  metodStorage.save(LOCALE_STORAGE_KEY, saveData);
}

function initPage() {
  saveData = metodStorage.load(LOCALE_STORAGE_KEY, {});
  Object.entries(saveData).forEach(([name, value]) => {
    formRef.elements[name].value = value;
  });
}
function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  metodStorage.remove(LOCALE_STORAGE_KEY);
}
formRef.addEventListener('submit', formSubmit);
