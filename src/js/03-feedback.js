import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 200));

populateFormData()

function onFormInput(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();

    console.log(formData);
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateFormData() {
    const savedFormData = localStorage.getItem(STORAGE_KEY); 

    if (savedFormData) {
        const parsedSavedFromData = JSON.parse(savedFormData);

        form.email.value = parsedSavedFromData.email || "";
        form.message.value = parsedSavedFromData.message || "";
    }
};