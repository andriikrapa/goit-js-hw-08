import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

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
    formData = {};
};

function populateFormData() {
    let savedFormData = localStorage.getItem(STORAGE_KEY); 

    if (savedFormData) {
        savedFormData = JSON.parse(savedFormData);
        
        Object.entries(savedFormData).forEach(([name, value]) => {
            formData[name] = value;
            form.elements[name].value = value;
        });
    };
};